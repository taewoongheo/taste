import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import { FadeView } from '../fade-view';

describe('FadeView', () => {
  it('renders children when visible', () => {
    const { getByText } = render(
      <FadeView visible>
        <Text>Visible</Text>
      </FadeView>,
    );

    expect(getByText('Visible')).toBeTruthy();
  });

  it('does not render children when not visible', () => {
    const { queryByText } = render(
      <FadeView visible={false}>
        <Text>Hidden</Text>
      </FadeView>,
    );

    expect(queryByText('Hidden')).toBeNull();
  });

  it('accepts custom duration', () => {
    const { getByText } = render(
      <FadeView visible duration={400}>
        <Text>Content</Text>
      </FadeView>,
    );

    expect(getByText('Content')).toBeTruthy();
  });

  it('accepts testID', () => {
    const { getByTestId } = render(
      <FadeView visible testID="fade">
        <Text>Content</Text>
      </FadeView>,
    );

    expect(getByTestId('fade')).toBeTruthy();
  });

  it('accepts style prop', () => {
    const { getByTestId } = render(
      <FadeView visible testID="fade" style={{ marginTop: 10 }}>
        <Text>Content</Text>
      </FadeView>,
    );

    expect(getByTestId('fade')).toBeTruthy();
  });
});
