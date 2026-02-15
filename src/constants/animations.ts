import { Easing, type WithSpringConfig, type WithTimingConfig } from 'react-native-reanimated';

// ─── Spring Configs ──────────────────────────────────────

export const Springs = {
  /** Slow, smooth — page transitions, large elements */
  gentle: { damping: 26, stiffness: 180 } satisfies WithSpringConfig,
  /** Quick, responsive — buttons, toggles */
  snappy: { damping: 36, stiffness: 380 } satisfies WithSpringConfig,
  /** Playful, subtle overshoot — celebrations, attention */
  bouncy: { damping: 28, stiffness: 260 } satisfies WithSpringConfig,
  /** Instant, no overshoot — corrections, resets */
  stiff: { damping: 54, stiffness: 600 } satisfies WithSpringConfig,
} as const;

// ─── Timing Configs ──────────────────────────────────────

export const Timings = {
  /** Fast micro-interaction — 150ms */
  fast: {
    duration: 150,
    easing: Easing.out(Easing.cubic),
  } satisfies WithTimingConfig,
  /** Standard transition — 250ms */
  normal: {
    duration: 250,
    easing: Easing.out(Easing.cubic),
  } satisfies WithTimingConfig,
  /** Slow, deliberate — 400ms */
  slow: {
    duration: 400,
    easing: Easing.out(Easing.cubic),
  } satisfies WithTimingConfig,
} as const;

// ─── Tap Feedback Defaults ───────────────────────────────

export const TapFeedback = {
  /** Scale down on press */
  scale: 0.97,
  /** Opacity on press */
  opacity: 0.8,
} as const;
