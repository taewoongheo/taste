import { Text, Toggle } from '@/components/ui';
import { useState } from 'react';

export function ToggleDemo() {
  const [value, setValue] = useState(false);

  return (
    <>
      <Text variant="subtitle">Toggle</Text>
      <Toggle value={value} onValueChange={setValue} />
    </>
  );
}
