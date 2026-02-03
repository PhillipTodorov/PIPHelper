import { dailyLivingActivities } from './dailyLivingActivities';
import { mobilityActivities } from './mobilityActivities';
import { Activity } from '../types';

export const allActivities: Activity[] = [
  ...dailyLivingActivities,
  ...mobilityActivities
];

export { dailyLivingActivities, mobilityActivities };

export const POINTS_THRESHOLDS = {
  dailyLiving: {
    standard: 8,
    enhanced: 12
  },
  mobility: {
    standard: 8,
    enhanced: 12
  }
};

export const WEEKLY_RATES = {
  dailyLiving: {
    standard: 72.65,
    enhanced: 108.55
  },
  mobility: {
    standard: 28.70,
    enhanced: 75.75
  }
};

export const getActivityById = (id: string): Activity | undefined => {
  return allActivities.find(activity => activity.id === id);
};

export const getActivityByNumber = (number: number): Activity | undefined => {
  return allActivities.find(activity => activity.number === number);
};
