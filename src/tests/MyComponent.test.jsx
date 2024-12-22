// tests/MyComponent.test.jsx
import { render, screen } from '@testing-library/react';
import MyComponent from '../components/MyComponent.jsx';

describe('MyComponent', () => {
  it('renders title correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello, Vite!')).toBeInTheDocument();
  });
});

