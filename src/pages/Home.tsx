import { useNavigate } from 'react-router-dom';
import { Button, Card } from '../components/ui';
import { useForm } from '../context/FormContext';
import { allActivities, WEEKLY_RATES } from '../data';

export function Home() {
  const navigate = useNavigate();
  const { isStarted, completedCount, totalActivities, formState, clearAllData, startForm } = useForm();

  const handleStart = () => {
    startForm();
    navigate('/activity/0');
  };

  const handleContinue = () => {
    navigate(`/activity/${formState.currentActivityIndex}`);
  };

  const handleStartFresh = () => {
    if (window.confirm('This will clear all your saved progress. Are you sure?')) {
      clearAllData();
    }
  };

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-100">
          PIP Application Helper
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          A step-by-step guide to help you complete your Personal Independence Payment (PIP) application,
          with specific support for mental health conditions.
        </p>
      </section>

      {isStarted && completedCount > 0 && (
        <Card variant="highlighted" className="text-center">
          <h2 className="text-lg font-semibold text-slate-100 mb-2">
            Welcome back
          </h2>
          <p className="text-slate-400 mb-4">
            You've completed {completedCount} of {totalActivities} questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={handleContinue} size="lg">
              Continue where you left off
            </Button>
            <Button onClick={handleStartFresh} variant="outline" size="lg">
              Start fresh
            </Button>
          </div>
        </Card>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-semibold text-slate-100 mb-3">
            What is PIP?
          </h2>
          <p className="text-slate-400 mb-4">
            Personal Independence Payment (PIP) is a benefit that helps with the extra costs
            of a long-term health condition or disability. It's based on how your condition
            affects you, not the condition itself.
          </p>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-primary-400 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>You can get PIP whether or not you work</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-400 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>It's not means-tested (your savings don't affect it)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-400 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>You can claim for both physical and mental health conditions</span>
            </li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-slate-100 mb-3">
            PIP Payment Rates
          </h2>
          <p className="text-slate-400 mb-4">
            PIP has two components: Daily Living and Mobility. Each has a standard and enhanced rate.
          </p>
          <div className="space-y-3">
            <div>
              <h3 className="font-medium text-slate-200">Daily Living</h3>
              <p className="text-sm text-slate-400">
                Standard: £{WEEKLY_RATES.dailyLiving.standard}/week |
                Enhanced: £{WEEKLY_RATES.dailyLiving.enhanced}/week
              </p>
            </div>
            <div>
              <h3 className="font-medium text-slate-200">Mobility</h3>
              <p className="text-sm text-slate-400">
                Standard: £{WEEKLY_RATES.mobility.standard}/week |
                Enhanced: £{WEEKLY_RATES.mobility.enhanced}/week
              </p>
            </div>
            <p className="text-sm text-slate-500 pt-2 border-t border-slate-700">
              Maximum total: £{(WEEKLY_RATES.dailyLiving.enhanced + WEEKLY_RATES.mobility.enhanced).toFixed(2)}/week
            </p>
          </div>
        </Card>
      </div>

      <Card>
        <h2 className="text-xl font-semibold text-slate-100 mb-3">
          How this tool helps
        </h2>
        <p className="text-slate-400 mb-4">
          This tool guides you through each of the {allActivities.length} activities that PIP assesses.
          For each activity, you'll see:
        </p>
        <ul className="space-y-3 text-slate-400">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary-900/50 rounded-full flex items-center justify-center text-primary-300 font-semibold">1</span>
            <div>
              <strong className="text-slate-200">Plain English explanations</strong>
              <p className="text-sm">What the DWP is really asking about</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary-900/50 rounded-full flex items-center justify-center text-primary-300 font-semibold">2</span>
            <div>
              <strong className="text-slate-200">Mental health-specific prompts</strong>
              <p className="text-sm">Questions to help you think about how your condition affects you</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary-900/50 rounded-full flex items-center justify-center text-primary-300 font-semibold">3</span>
            <div>
              <strong className="text-slate-200">Descriptor options with points</strong>
              <p className="text-sm">See which level best describes your situation</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-primary-900/50 rounded-full flex items-center justify-center text-primary-300 font-semibold">4</span>
            <div>
              <strong className="text-slate-200">Space for your notes</strong>
              <p className="text-sm">Write your own descriptions of good days and bad days</p>
            </div>
          </li>
        </ul>
      </Card>

      <Card className="bg-amber-900/30 border-amber-700">
        <h2 className="text-lg font-semibold text-amber-200 mb-2">
          Important information
        </h2>
        <ul className="space-y-2 text-amber-300 text-sm">
          <li>• This tool helps you <strong>prepare</strong> your application - you still need to complete the official PIP2 form</li>
          <li>• Your answers are saved locally on your device only - we don't store any data</li>
          <li>• This is not legal or benefits advice - consider getting help from Citizens Advice or a welfare rights adviser</li>
          <li>• You can stop and continue later - your progress will be saved</li>
        </ul>
      </Card>

      {(!isStarted || completedCount === 0) && (
        <div className="text-center">
          <Button onClick={handleStart} size="lg">
            Start the PIP guide
          </Button>
        </div>
      )}
    </div>
  );
}
