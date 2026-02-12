import { Spacing, Typography } from '@/constants/design-tokens';
import { useThemeColor } from '@/hooks/use-theme-color';
import { StyleSheet, Text, View } from 'react-native';

export default function ModalScreen() {
  const backgroundColor = useThemeColor('background');
  const textColor = useThemeColor('text');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[Typography.body, { color: textColor }]}>Modal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.md,
  },
});
