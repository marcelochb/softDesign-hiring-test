import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HerosList, HerosDetail, Onboard } from '@src/pages';
import { Navigations } from '@src/styles';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '@src/store/Model';
import IconArrowLeft from '@src/assets/Icons/IconArrowLeft.svg';
import { ButtonLink } from '@src/components/UI';
import { metrics } from '@src/theme';
import { onboardCheckOutRequest } from '@src/store/modules/Onboard/actions';
const Stack = createStackNavigator();

export const Routes: React.FC = () => {
  const onboard = useSelector((state: GlobalState) => state.onboard)
  const dispatch = useDispatch();
  return (
    <Stack.Navigator screenOptions={Navigations.screenOptions}>
      {onboard.checked
        ? (
          <React.Fragment>
            <Stack.Screen
              name="HerosList"
              component={HerosList}
              options={{
                title: 'Super-Heróis',
                headerLeft: () =>
                  <ButtonLink
                    style={{ padding: metrics.large }}
                    IconSVG={IconArrowLeft}
                    onHandleButtonLink={() => dispatch(onboardCheckOutRequest())}
                  />
              }}
            />
            <Stack.Screen
              name="HerosDetail"
              component={HerosDetail}
              options={{ title: 'Detalhes' }}
            />
          </React.Fragment>
        )
        : (
          <Stack.Screen
            name="Onboard"
            component={Onboard}
            options={{ headerShown: false }}
          />
        )}
    </Stack.Navigator>
  )
}
