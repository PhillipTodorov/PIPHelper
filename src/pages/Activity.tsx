import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button, Card, RadioGroup, TextArea } from '../components/ui';
import { ProgressBar } from '../components/layout';
import { MentalHealthPrompt } from '../components/questions/MentalHealthPrompt';
import { useForm } from '../context/FormContext';
import { allActivities } from '../data';

export function Activity() {
  const { index } = useParams<{ index: string }>();
  const navigate = useNavigate();
  const { getResponse, updateResponse, setCurrentActivityIndex } = useForm();

  const activityIndex = parseInt(index || '0', 10);
  const activity = allActivities[activityIndex];
  const response = getResponse(activity?.id || '');

  useEffect(() => {
    if (activity) {
      setCurrentActivityIndex(activityIndex);
    }
  }, [activityIndex, activity, setCurrentActivityIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activityIndex]);

  if (!activity) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-slate-100 mb-4">Activity not found</h1>
        <Button onClick={() => navigate('/')}>Return home</Button>
      </div>
    );
  }

  const handleDescriptorChange = (descriptorId: string) => {
    updateResponse(activity.id, { selectedDescriptorId: descriptorId });
  };

  const handleNotesChange = (field: 'userNotes' | 'goodDayDescription' | 'badDayDescription', value: string) => {
    updateResponse(activity.id, { [field]: value });
  };

  const handlePrevious = () => {
    if (activityIndex > 0) {
      navigate(`/activity/${activityIndex - 1}`);
    } else {
      navigate('/');
    }
  };

  const handleNext = () => {
    if (activityIndex < allActivities.length - 1) {
      navigate(`/activity/${activityIndex + 1}`);
    } else {
      navigate('/summary');
    }
  };

  const isLastActivity = activityIndex === allActivities.length - 1;
  const categoryLabel = activity.category === 'daily-living' ? 'Daily Living' : 'Mobility';

  return (
    <div className="space-y-6">
      <ProgressBar
        current={activityIndex + 1}
        total={allActivities.length}
      />

      <div className="flex items-center gap-2 text-sm">
        <span className={`
          px-2 py-1 rounded font-medium
          ${activity.category === 'daily-living'
            ? 'bg-blue-900/50 text-blue-300'
            : 'bg-green-900/50 text-green-300'
          }
        `}>
          {categoryLabel}
        </span>
        <span className="text-slate-400">
          {activity.formQuestion}
        </span>
      </div>

      <h1 className="text-2xl font-bold text-slate-100">
        {activity.name}
      </h1>

      <Card>
        <h2 className="text-lg font-semibold text-slate-100 mb-2">
          What this question covers
        </h2>
        <p className="text-slate-400 mb-4">
          {activity.description}
        </p>
        <div className="bg-slate-700/50 p-4 rounded-lg">
          <h3 className="font-medium text-slate-200 mb-1">What they're really asking:</h3>
          <p className="text-slate-300">{activity.whatTheyReallyAsk}</p>
        </div>
      </Card>

      <MentalHealthPrompt prompts={activity.mentalHealthPrompts} />

      <Card>
        <RadioGroup
          name={`descriptor-${activity.id}`}
          label="Which statement best describes your situation?"
          options={activity.descriptors.map((d) => ({
            id: d.id,
            label: d.plainEnglish,
            description: d.text,
            points: d.points
          }))}
          value={response?.selectedDescriptorId || null}
          onChange={handleDescriptorChange}
        />
      </Card>

      <Card>
        <div className="space-y-6">
          <TextArea
            label="Describe how this affects you on a bad day"
            hint="Think about your worst days. What can't you do? What help do you need? Be specific."
            value={response?.badDayDescription || ''}
            onChange={(e) => handleNotesChange('badDayDescription', e.target.value)}
            placeholder="On my worst days, I..."
          />

          <TextArea
            label="Describe how this affects you on a good day"
            hint="Even on good days, do you still have difficulties? Do things still take longer?"
            value={response?.goodDayDescription || ''}
            onChange={(e) => handleNotesChange('goodDayDescription', e.target.value)}
            placeholder="Even on good days, I still..."
          />

          <TextArea
            label="Any other notes"
            hint="Anything else relevant? Examples, incidents, or things you want to remember for the form."
            value={response?.userNotes || ''}
            onChange={(e) => handleNotesChange('userNotes', e.target.value)}
            placeholder="Additional notes..."
          />
        </div>
      </Card>

      <div className="flex justify-between items-center pt-4">
        <Button onClick={handlePrevious} variant="outline">
          {activityIndex === 0 ? 'Back to home' : 'Previous'}
        </Button>

        <span className="text-sm text-slate-400">
          {activityIndex + 1} of {allActivities.length}
        </span>

        <Button onClick={handleNext}>
          {isLastActivity ? 'View summary' : 'Next'}
        </Button>
      </div>

      <p className="text-center text-sm text-slate-500">
        Your progress is automatically saved.
      </p>
    </div>
  );
}
