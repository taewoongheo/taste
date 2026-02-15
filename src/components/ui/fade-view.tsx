import { Timings } from '@/constants';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import type { ViewProps } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export interface FadeViewProps {
  /** Whether the content is visible */
  visible: boolean;
  children: ReactNode;
  /** Animation duration in ms (default: 250) */
  duration?: number;
  style?: ViewProps['style'];
  testID?: string;
}

export function FadeView({
  visible,
  children,
  duration = Timings.normal.duration,
  style,
  testID,
}: FadeViewProps) {
  const [shouldRender, setShouldRender] = useState(visible);
  const opacity = useSharedValue(visible ? 1 : 0);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
      opacity.value = withTiming(1, { duration });
    } else {
      opacity.value = withTiming(0, { duration }, (finished) => {
        if (finished) {
          runOnJS(setShouldRender)(false);
        }
      });
    }
  }, [visible, duration, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    pointerEvents: opacity.value === 0 ? ('none' as const) : ('auto' as const),
  }));

  if (!shouldRender) return null;

  return (
    <Animated.View style={[style, animatedStyle]} testID={testID}>
      {children}
    </Animated.View>
  );
}
