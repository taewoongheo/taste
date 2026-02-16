import { Text } from '@/components/ui';

export function TextDemo() {
  return (
    <>
      <Text variant="subtitle">Text</Text>
      <Text variant="hero">hero</Text>
      <Text variant="title">title</Text>
      <Text variant="subtitle">subtitle</Text>
      <Text variant="body">body (default)</Text>
      <Text variant="label" color="textSecondary">
        label · secondary
      </Text>
      <Text variant="caption" color="textSecondary">
        caption · secondary
      </Text>
    </>
  );
}
