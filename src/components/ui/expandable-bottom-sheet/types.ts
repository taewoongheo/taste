import type { StyleProp, ViewStyle } from 'react-native';
import type { WithSpringConfig } from 'react-native-reanimated';

type SnapPoint = number | `${number}%`;

interface ExpandableBottomSheetMethods {
  snapToIndex: (index: number) => void;
  snapToPosition: (position: number) => void;
  expand: () => void;
  collapse: () => void;
  close: () => void;
  getCurrentIndex: () => number;
}

interface ExpandableBottomSheetProps {
  children: React.ReactNode;
  snapPoints: readonly [...SnapPoint[]];
  readonly enableBackdrop?: boolean;
  readonly backdropOpacity?: number;
  readonly dismissOnBackdropPress?: boolean;
  readonly dismissOnSwipeDown?: boolean;
  readonly onSnapPointChange?: (index: number) => void;
  readonly onClose?: () => void;
  readonly springConfig?: WithSpringConfig;
  readonly sheetStyle?: StyleProp<ViewStyle>;
  readonly backdropStyle?: StyleProp<ViewStyle>;
  readonly handleStyle?: StyleProp<ViewStyle>;
  readonly showHandle?: boolean;
  readonly enableOverDrag?: boolean;
  readonly enableHapticFeedback?: boolean;
  readonly snapVelocityThreshold?: number;
  readonly backgroundColor?: string;
  readonly borderRadius?: number;
  readonly contentContainerStyle?: StyleProp<ViewStyle>;
  readonly expandedTopOffset?: number;
  readonly expandedSideMargin?: number;
  readonly onExpandedChange?: (expanded: boolean) => void;
}

export type { ExpandableBottomSheetMethods, ExpandableBottomSheetProps, SnapPoint };
