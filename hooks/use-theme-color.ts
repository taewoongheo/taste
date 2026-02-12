import { Colors } from '@/constants/design-tokens';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function useThemeColor(
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  props?: { light?: string; dark?: string },
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props?.[theme];

  return colorFromProps ?? Colors[theme][colorName];
}
