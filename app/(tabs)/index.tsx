import {
  AnimationsDemo,
  ButtonDemo,
  DividerDemo,
  ImageDemo,
  InputDemo,
  InteractionsDemo,
  NavigationDemo,
  SkeletonDemo,
  TextDemo,
  ToggleDemo,
} from "@/components/demo";
import {
  AnimatedPressable,
  Dialog,
  Sheet,
  Text,
  useToast,
} from "@/components/ui";
import { Spacing, Springs } from "@/constants";
import { useThemeColor } from "@/hooks";
import { Haptic } from "@/lib";
import { Ionicons } from "@expo/vector-icons";
import type BottomSheetType from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Staggered entrance animation — shared value + withDelay + withSpring
function useEntranceStyle(delay: number) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(30);
  const spring = Springs.gentle;

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally run only on mount
  useEffect(() => {
    opacity.value =
      delay > 0
        ? withDelay(delay, withSpring(1, spring))
        : withSpring(1, spring);
    translateY.value =
      delay > 0
        ? withDelay(delay, withSpring(0, spring))
        : withSpring(0, spring);
  }, []);

  return useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));
}

export default function HomeScreen() {
  const bg = useThemeColor("background");
  const accent = useThemeColor("accent");
  const { top } = useSafeAreaInsets();
  const [renderKey, setRenderKey] = useState(0);

  const sheetRef = useRef<BottomSheetType>(null);
  const openSheet = useCallback(() => sheetRef.current?.snapToIndex(0), []);
  const { show } = useToast();
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleReplay = useCallback(() => {
    Haptic.tap();
    setRenderKey((k) => k + 1);
  }, []);

  return (
    <View style={[styles.root, { backgroundColor: bg }]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          { paddingTop: top + Spacing.md },
        ]}
      >
        <View style={styles.headerRow}>
          <View style={styles.headerText}>
            <Text variant="hero">Components</Text>
            <Text variant="label" color="textSecondary">
              UI 컴포넌트 카탈로그
            </Text>
          </View>
          <AnimatedPressable onPress={handleReplay}>
            <View style={[styles.replayButton, { backgroundColor: accent }]}>
              <Ionicons name="refresh" size={20} color="#fff" />
            </View>
          </AnimatedPressable>
        </View>

        <DemoSections
          key={renderKey}
          onOpenSheet={openSheet}
          onOpenDialog={() => setDialogVisible(true)}
          showToast={show}
        />
      </ScrollView>

      <Sheet sheetRef={sheetRef} snapPoints={["30%"]}>
        <Text variant="subtitle">Bottom Sheet</Text>
        <Text color="textSecondary">Swipe down to dismiss</Text>
      </Sheet>

      <Dialog
        visible={dialogVisible}
        onDismiss={() => setDialogVisible(false)}
        title="삭제하시겠습니까?"
        message="이 작업은 되돌릴 수 없습니다."
        actions={[
          {
            label: "취소",
            variant: "ghost",
            onPress: () => setDialogVisible(false),
          },
          {
            label: "삭제",
            variant: "destructive",
            onPress: () => {
              setDialogVisible(false);
              show({ message: "삭제되었습니다", type: "success" });
            },
          },
        ]}
      />
    </View>
  );
}

function DemoSections({
  onOpenSheet,
  onOpenDialog,
  showToast,
}: {
  onOpenSheet: () => void;
  onOpenDialog: () => void;
  showToast: ReturnType<typeof useToast>["show"];
}) {
  const s1 = useEntranceStyle(0);
  const s2 = useEntranceStyle(100);
  const s3 = useEntranceStyle(200);
  const s4 = useEntranceStyle(300);
  const s5 = useEntranceStyle(400);

  return (
    <>
      <Animated.View style={[styles.section, s1]}>
        <TextDemo />
      </Animated.View>

      <Animated.View style={[styles.section, s1]}>
        <ButtonDemo />
      </Animated.View>

      <Animated.View style={[styles.section, s2]}>
        <ImageDemo />
      </Animated.View>

      <Animated.View style={[styles.section, s2]}>
        <InputDemo />
      </Animated.View>

      <Animated.View style={[styles.section, s3]}>
        <ToggleDemo />
      </Animated.View>

      <Animated.View style={[styles.section, s3]}>
        <DividerDemo />
      </Animated.View>

      <Animated.View style={[styles.section, s3]}>
        <SkeletonDemo />
      </Animated.View>

      <Animated.View style={[styles.section, s4]}>
        <InteractionsDemo
          onOpenSheet={onOpenSheet}
          onOpenDialog={onOpenDialog}
          showToast={showToast}
        />
      </Animated.View>

      <Animated.View style={[styles.section, s4]}>
        <NavigationDemo />
      </Animated.View>

      <Animated.View style={[styles.section, s5]}>
        <AnimationsDemo />
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  scroll: { flex: 1 },
  content: {
    padding: Spacing.md,
    gap: Spacing.md,
    paddingBottom: Spacing["2xl"],
  },
  section: { gap: Spacing.sm, marginTop: Spacing.md },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerText: { flex: 1 },
  replayButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Spacing.xs,
  },
});
