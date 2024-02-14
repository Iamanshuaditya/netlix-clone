import { atom } from 'recoil';

export const selectedPlanState = atom<string | null>({
  key: 'selectedPlan',
  default: null,
});
