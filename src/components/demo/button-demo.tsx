import { Button, Text } from '@/components/ui';
import { Spacing } from '@/constants';
import { StyleSheet, View } from 'react-native';

export function ButtonDemo() {
  return (
    <>
      <Text variant="subtitle">Button</Text>
      <View style={styles.row}>
        <Button title="Primary" variant="primary" size="sm" />
        <Button title="Secondary" variant="secondary" size="sm" />
      </View>
      <View style={styles.row}>
        <Button title="Destructive" variant="destructive" size="sm" />
        <Button title="Ghost" variant="ghost" size="sm" />
      </View>
      <Button title="Primary sm" variant="primary" size="sm" fullWidth />
      <Button title="Primary md" variant="primary" size="md" fullWidth />
      <Button title="Primary lg" variant="primary" size="lg" fullWidth />
      <Button title="Secondary sm" variant="secondary" size="sm" fullWidth />
      <Button title="Secondary md" variant="secondary" size="md" fullWidth />
      <Button title="Secondary lg" variant="secondary" size="lg" fullWidth />
      <Button title="Destructive sm" variant="destructive" size="sm" fullWidth />
      <Button title="Destructive md" variant="destructive" size="md" fullWidth />
      <Button title="Destructive lg" variant="destructive" size="lg" fullWidth />
      <Button title="Ghost sm" variant="ghost" size="sm" fullWidth />
      <Button title="Ghost md" variant="ghost" size="md" fullWidth />
      <Button title="Ghost lg" variant="ghost" size="lg" fullWidth />
      <Button title="Loading" loading fullWidth />
      <Button title="Disabled" disabled fullWidth />
    </>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: Spacing.sm },
});
