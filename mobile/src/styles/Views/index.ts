import { ViewStyle, ViewBase } from 'react-native';
import { colors, metrics } from '@src/theme';
import { elementBaseColor, elementeSecundaryColor } from '../inputs';

const baseView: ViewStyle = {
  padding: metrics.base,
};

const baseContainer: ViewStyle = {
  flex: 1,
};
const baseContent: ViewStyle = {
  width: metrics.screenWidth / 1.09,
  alignSelf: 'center',
};
const baseViewForFooter: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const shadow: ViewStyle = {
  shadowColor: '#000',
  shadowOffset: { height: 1, width: 1 },
  shadowOpacity: 1,
  shadowRadius: 1,
  elevation: 1,
  backgroundColor: colors.background,
};

const center: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
};

const radioBase: ViewStyle = {
  borderRadius: metrics.radiusBase,
};

export const content: ViewStyle = {
  ...baseContent,
};

export const contentShadow = {
  ...baseContent,
  ...baseView,
  ...shadow,
  ...radioBase,
};

export const container: ViewStyle = {
  ...baseContainer,
  backgroundColor: colors.background,
};
export const containerCenter: ViewStyle = {
  ...container,
  ...center,
};

export const viewShadow: ViewStyle = {
  ...baseView,
  ...shadow,
};

export const row: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
};
