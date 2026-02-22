import { AnimatedPressable, Button, Text } from '@/components/ui';
import { Spacing } from '@/constants';
import { useThemeColor } from '@/hooks';
import { Haptic } from '@/lib';
import { StyleSheet, View } from 'react-native';

interface InteractionsDemoProps {
  onOpenSheet: () => void;
  onOpenExpandableSheet?: () => void;
  showToast: (msg: string) => void;
}

export function InteractionsDemo({
  onOpenSheet,
  onOpenExpandableSheet,
  showToast,
}: InteractionsDemoProps) {
  const bgGrouped = useThemeColor('backgroundGrouped');

  return (
    <>
      <Text variant="subtitle">Interactions</Text>
      <AnimatedPressable onPress={onOpenSheet}>
        <View style={[styles.card, { backgroundColor: bgGrouped }]}>
          <Text>Sheet 열기</Text>
        </View>
      </AnimatedPressable>
      {onOpenExpandableSheet && (
        <AnimatedPressable onPress={onOpenExpandableSheet}>
          <View style={[styles.card, { backgroundColor: bgGrouped }]}>
            <Text>Expandable Sheet 열기</Text>
          </View>
        </AnimatedPressable>
      )}
      <View style={styles.row}>
        <Button
          fullWidth={false}
          variant="secondary"
          size="sm"
          onPress={() => showToast('저장되었습니다')}
        >
          <Text variant="label" color="accent" bold>
            Toast: success
          </Text>
        </Button>
        <Button
          fullWidth={false}
          variant="secondary"
          size="sm"
          onPress={() => showToast('오류 발생')}
        >
          <Text variant="label" color="accent" bold>
            Toast: error
          </Text>
        </Button>
      </View>
      <View style={styles.row}>
        <Button fullWidth={false} variant="ghost" size="sm" onPress={() => Haptic.tap()}>
          <Text variant="label" color="accent" bold>
            Haptic: tap
          </Text>
        </Button>
        <Button fullWidth={false} variant="ghost" size="sm" onPress={() => Haptic.success()}>
          <Text variant="label" color="accent" bold>
            Haptic: success
          </Text>
        </Button>
        <Button fullWidth={false} variant="ghost" size="sm" onPress={() => Haptic.error()}>
          <Text variant="label" color="accent" bold>
            Haptic: error
          </Text>
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: Spacing.sm, flexWrap: 'wrap' },
  card: { borderRadius: 12, padding: Spacing.md, overflow: 'hidden' as const },
});
