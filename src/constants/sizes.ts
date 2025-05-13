import {Dimensions} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';

export const sizes = {
  WIDTH: Dimensions.get('screen').width,
  HEIGHT: Dimensions.get('screen').height,
  TOP: initialWindowMetrics?.insets.top,
  BOTTOM: initialWindowMetrics?.insets.bottom,
};
