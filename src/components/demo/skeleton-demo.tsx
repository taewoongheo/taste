import { Skeleton, Text } from '@/components/ui';
import { Spacing } from '@/constants';
import { StyleSheet, View } from 'react-native';

export function SkeletonDemo() {
  return (
    <>
      <Text variant="subtitle">Skeleton</Text>
      <View style={styles.row}>
        <Skeleton circle height={48} />
        <View style={styles.lines}>
          <Skeleton width={160} height={16} />
          <Skeleton width={100} height={12} />
        </View>
      </View>
      <Skeleton height={120} radius={12} />
    </>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: Spacing.sm },
  lines: { flex: 1, gap: Spacing.sm },
});
