import { AnimatedNumber, Button, Collapse, Text } from '@/components/ui';
import { Spacing } from '@/constants';
import { useThemeColor } from '@/hooks';
import * as HapticsLib from 'expo-haptics';
import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

export function AnimationsDemo() {
  const bgGrouped = useThemeColor('backgroundGrouped');
  const [collapseExpanded, setCollapseExpanded] = useState(false);
  const [counterValue, setCounterValue] = useState(0);

  const shakeX = useSharedValue(0);
  const shakeStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeX.value }],
  }));
  const shake = useCallback(() => {
    const distance = 8;
    const oscillations = 4;
    const duration = 60;
    const steps: number[] = [];
    for (let i = 0; i < oscillations; i++) {
      steps.push(i % 2 === 0 ? distance : -distance);
    }
    steps.push(0);
    shakeX.value = withSequence(...steps.map((v) => withTiming(v, { duration })));
    HapticsLib.notificationAsync(HapticsLib.NotificationFeedbackType.Error);
  }, [shakeX]);

  return (
    <>
      <Text variant="subtitle">Animations</Text>

      <Button
        title={collapseExpanded ? 'Collapse 닫기' : 'Collapse 열기'}
        variant="secondary"
        size="sm"
        onPress={() => setCollapseExpanded((v) => !v)}
      />
      <Collapse expanded={collapseExpanded}>
        <View style={[styles.card, { backgroundColor: bgGrouped }]}>
          <Text>접힌 콘텐츠가 여기에 표시됩니다.</Text>
          <Text color="textSecondary" variant="caption">
            height 애니메이션으로 자연스럽게 열고 닫힙니다.
          </Text>
        </View>
      </Collapse>

      <Animated.View style={shakeStyle}>
        <Button title="Shake!" variant="destructive" size="sm" onPress={shake} />
      </Animated.View>

      <AnimatedNumber value={counterValue} align="center" />
      <View style={styles.row}>
        <Button
          title="+100"
          variant="secondary"
          size="sm"
          onPress={() => setCounterValue((v) => v + 100)}
        />
        <Button
          title="-50"
          variant="secondary"
          size="sm"
          onPress={() => setCounterValue((v) => v - 50)}
        />
        <Button title="Reset" variant="ghost" size="sm" onPress={() => setCounterValue(0)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: Spacing.sm },
  card: { borderRadius: 12, padding: Spacing.md, overflow: 'hidden' as const },
});
