import { FormState } from '../types';
import { allActivities, dailyLivingActivities, mobilityActivities, POINTS_THRESHOLDS, WEEKLY_RATES } from '../data';

export interface PointsBreakdown {
  dailyLiving: {
    points: number;
    activities: { name: string; points: number }[];
    rate: 'none' | 'standard' | 'enhanced';
    weeklyAmount: number;
  };
  mobility: {
    points: number;
    activities: { name: string; points: number }[];
    rate: 'none' | 'standard' | 'enhanced';
    weeklyAmount: number;
  };
  totalWeekly: number;
  totalMonthly: number;
  totalYearly: number;
}

export function calculatePoints(formState: FormState): PointsBreakdown {
  const dailyLivingPoints: { name: string; points: number }[] = [];
  const mobilityPoints: { name: string; points: number }[] = [];

  for (const activity of allActivities) {
    const response = formState.responses[activity.id];
    if (response?.selectedDescriptorId) {
      const descriptor = activity.descriptors.find(d => d.id === response.selectedDescriptorId);
      if (descriptor) {
        const entry = { name: activity.name, points: descriptor.points };
        if (activity.category === 'daily-living') {
          dailyLivingPoints.push(entry);
        } else {
          mobilityPoints.push(entry);
        }
      }
    }
  }

  const dailyLivingTotal = dailyLivingPoints.reduce((sum, a) => sum + a.points, 0);
  const mobilityTotal = mobilityPoints.reduce((sum, a) => sum + a.points, 0);

  const getDailyLivingRate = (points: number): 'none' | 'standard' | 'enhanced' => {
    if (points >= POINTS_THRESHOLDS.dailyLiving.enhanced) return 'enhanced';
    if (points >= POINTS_THRESHOLDS.dailyLiving.standard) return 'standard';
    return 'none';
  };

  const getMobilityRate = (points: number): 'none' | 'standard' | 'enhanced' => {
    if (points >= POINTS_THRESHOLDS.mobility.enhanced) return 'enhanced';
    if (points >= POINTS_THRESHOLDS.mobility.standard) return 'standard';
    return 'none';
  };

  const dailyLivingRate = getDailyLivingRate(dailyLivingTotal);
  const mobilityRate = getMobilityRate(mobilityTotal);

  const getDailyLivingAmount = (rate: 'none' | 'standard' | 'enhanced'): number => {
    if (rate === 'enhanced') return WEEKLY_RATES.dailyLiving.enhanced;
    if (rate === 'standard') return WEEKLY_RATES.dailyLiving.standard;
    return 0;
  };

  const getMobilityAmount = (rate: 'none' | 'standard' | 'enhanced'): number => {
    if (rate === 'enhanced') return WEEKLY_RATES.mobility.enhanced;
    if (rate === 'standard') return WEEKLY_RATES.mobility.standard;
    return 0;
  };

  const dailyLivingWeekly = getDailyLivingAmount(dailyLivingRate);
  const mobilityWeekly = getMobilityAmount(mobilityRate);
  const totalWeekly = dailyLivingWeekly + mobilityWeekly;

  return {
    dailyLiving: {
      points: dailyLivingTotal,
      activities: dailyLivingPoints,
      rate: dailyLivingRate,
      weeklyAmount: dailyLivingWeekly
    },
    mobility: {
      points: mobilityTotal,
      activities: mobilityPoints,
      rate: mobilityRate,
      weeklyAmount: mobilityWeekly
    },
    totalWeekly,
    totalMonthly: totalWeekly * 4.33,
    totalYearly: totalWeekly * 52
  };
}

export function getCompletionStatus(formState: FormState) {
  const dailyLivingCompleted = dailyLivingActivities.filter(
    a => formState.responses[a.id]?.selectedDescriptorId
  ).length;

  const mobilityCompleted = mobilityActivities.filter(
    a => formState.responses[a.id]?.selectedDescriptorId
  ).length;

  return {
    dailyLiving: {
      completed: dailyLivingCompleted,
      total: dailyLivingActivities.length
    },
    mobility: {
      completed: mobilityCompleted,
      total: mobilityActivities.length
    },
    total: {
      completed: dailyLivingCompleted + mobilityCompleted,
      total: allActivities.length
    }
  };
}
