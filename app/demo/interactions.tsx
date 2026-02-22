import { InteractionsDemo } from '@/components/demo';
import { BottomSheet, Text, Toast } from '@/components/ui';
import type { BottomSheetMethods } from '@/components/ui/bottom-sheet/types';
import { ExpandableBottomSheet } from '@/components/ui/expandable-bottom-sheet';
import type { ExpandableBottomSheetMethods } from '@/components/ui/expandable-bottom-sheet/types';
import { Spacing } from '@/constants';
import { useCallback, useRef } from 'react';
import { View } from 'react-native';
import DemoScreen from './_wrapper';

export default function () {
  const sheetRef = useRef<BottomSheetMethods>(null);
  const expandableSheetRef = useRef<ExpandableBottomSheetMethods>(null);
  const openSheet = useCallback(() => sheetRef.current?.snapToIndex(0), []);
  const openExpandableSheet = useCallback(() => expandableSheetRef.current?.snapToIndex(0), []);

  return (
    <View style={{ flex: 1 }}>
      <DemoScreen title="Interactions">
        <InteractionsDemo
          onOpenSheet={openSheet}
          onOpenExpandableSheet={openExpandableSheet}
          showToast={(msg: string) => Toast.show(msg, { type: 'success', duration: 3000 })}
        />
      </DemoScreen>
      <BottomSheet ref={sheetRef} snapPoints={['30%']}>
        <View style={{ padding: Spacing.md }}>
          <Text variant="subtitle">Bottom Sheet</Text>
          <Text color="textSecondary">Swipe down to dismiss</Text>
        </View>
      </BottomSheet>
      <ExpandableBottomSheet ref={expandableSheetRef} snapPoints={['30%', '60%']}>
        <View style={{ padding: Spacing.md }}>
          <Text variant="subtitle">Expandable Bottom Sheet</Text>
          <Text color="textSecondary">Drag up to expand, down to dismiss</Text>
        </View>
      </ExpandableBottomSheet>
    </View>
  );
}
