import { render, screen } from '@testing-library/react-native';
import { Text } from '../text';

describe('Text', () => {
  it('renders children text', () => {
    render(<Text>Hello</Text>);
    expect(screen.getByText('Hello')).toBeTruthy();
  });

  it('renders with default variant (body)', () => {
    render(<Text>Body text</Text>);
    expect(screen.getByText('Body text')).toBeTruthy();
  });

  it('renders with headline variant', () => {
    render(<Text variant="headline">Headline</Text>);
    expect(screen.getByText('Headline')).toBeTruthy();
  });

  it('renders with color token', () => {
    render(<Text color="textSecondary">Secondary</Text>);
    expect(screen.getByText('Secondary')).toBeTruthy();
  });

  it('renders with align prop', () => {
    render(<Text align="center">Centered</Text>);
    expect(screen.getByText('Centered')).toBeTruthy();
  });
});
