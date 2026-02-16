import { Button, Text } from '@/components/ui';
import { useAppStore } from '@/stores';
import { router } from 'expo-router';

export function NavigationDemo() {
  return (
    <>
      <Text variant="subtitle">Navigation</Text>
      <Button
        title="온보딩 다시 보기"
        variant="secondary"
        fullWidth
        onPress={() => {
          useAppStore.getState().setOnboarded(false);
          router.replace('/onboarding');
        }}
      />
    </>
  );
}
