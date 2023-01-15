import { render, screen } from '@testing-library/react';
import App from 'App';
import { GlobalStyle } from 'styles/global-style';

jest.mock('styles/global-style', () => ({
  GlobalStyle: jest.fn(() => null),
}));

describe('App component', () => {
  it('renders the children and applies the GlobalStyle', () => {
    const children = <div data-testid='test-children' />;
    render(<App>{children}</App>);

    expect(screen.getByTestId('test-children')).toBeInTheDocument();
    expect(GlobalStyle).toHaveBeenCalled();
  });
});
