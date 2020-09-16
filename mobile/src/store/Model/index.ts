import { ModelOfUserGlobalState } from '../modules/User/model';
import { ModelOfOnboardGlobalState } from '../modules/onboard/model';

export type GlobalState = {
  user: ModelOfUserGlobalState;
  onboard: ModelOfOnboardGlobalState;
};
