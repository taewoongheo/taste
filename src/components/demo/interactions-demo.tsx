import { AnimatedPressable, Button, Text, type useToast } from '@/components/ui';
import { Spacing } from '@/constants';
import { useThemeColor } from '@/hooks';
import { Haptic } from '@/lib';
import { StyleSheet, View } from 'react-native';

interface InteractionsDemoProps {
  onOpenSheet: () => void;
  onOpenDialog: () => void;
  showToast: ReturnType<typeof useToast>['show'];
}

export function InteractionsDemo({ onOpenSheet, onOpenDialog, showToast }: InteractionsDemoProps) {
  const bgGrouped = useThemeColor('backgroundGrouped');

  return (
    <>
      <Text variant="subtitle">Interactions</Text>
      <AnimatedPressable onPress={onOpenSheet}>
        <View style={[styles.card, { backgroundColor: bgGrouped }]}>
          <Text>Sheet 열기</Text>
        </View>
      </AnimatedPressable>
      <View style={styles.row}>
        <Button
          title="Toast: success"
          variant="secondary"
          size="sm"
          onPress={() => showToast({ message: '저장되었습니다', type: 'success' })}
        />
        <Button
          title="Toast: error"
          variant="secondary"
          size="sm"
          onPress={() => showToast({ message: '오류 발생', type: 'error' })}
        />
      </View>
      <Button title="Dialog 열기" variant="secondary" fullWidth onPress={onOpenDialog} />
      <View style={styles.row}>
        <Button title="Haptic: tap" variant="ghost" size="sm" onPress={() => Haptic.tap()} />
        <Button title="Haptic: success" variant="ghost" size="sm" onPress={() => Haptic.success()} />
        <Button title="Haptic: error" variant="ghost" size="sm" onPress={() => Haptic.error()} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: Spacing.sm },
  card: { borderRadius: 12, padding: Spacing.md, overflow: 'hidden' as const },
});
