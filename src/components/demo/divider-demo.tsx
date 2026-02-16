import { Divider, Text } from '@/components/ui';

export function DividerDemo() {
  return (
    <>
      <Text variant="subtitle">Divider</Text>
      <Text color="textSecondary">기본</Text>
      <Divider />
      <Text color="textSecondary">Inset (56)</Text>
      <Divider inset={56} />
    </>
  );
}
