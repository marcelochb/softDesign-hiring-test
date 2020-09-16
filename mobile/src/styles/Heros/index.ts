import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { metrics, colors } from '@src/theme';
import { Texts } from '..';

export const viewHero: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: metrics.large,
};

export const image: ImageStyle = {
  width: 100,
  height: 100,
  borderRadius: metrics.radiusRounded,
  borderColor: colors.elements,
  borderWidth: 2,
  marginRight: metrics.large,
};

export const nameOfHero: TextStyle = {
  ...Texts.body,
  flex: 1,
};
