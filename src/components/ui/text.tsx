import { Colors, Typography } from '@/constants';
import { useColorScheme } from '@/hooks';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

export type TextVariant = keyof typeof Typography;
export type TextColor = keyof (typeof Colors)['light'];

export interface TextProps extends Omit<RNTextProps, 'style'> {
  /** Typography variant (default: 'body') */
  variant?: TextVariant;
  /** Color token name (default: 'text') */
  color?: TextColor;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
}

export function Text({ variant = 'body', color = 'text', align, ...rest }: TextProps) {
  const colorScheme = useColorScheme();
  const resolvedColor = Colors[colorScheme][color];

  return (
    <RNText
      {...rest}
      style={[Typography[variant], { color: resolvedColor }, align && { textAlign: align }]}
    />
  );
}
