import { useDispatch } from 'react-redux';
import { onboardCheckInRequest } from '@src/store/modules/Onboard/actions';

export const useOnboardController = () => {
  const dispatch = useDispatch();
  const checkOnboard = () => dispatch(onboardCheckInRequest());

  return {
    handleController: {
      checkOnboard,
    },
  };
};
