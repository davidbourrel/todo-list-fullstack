import Home from '../src/pages/index';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Home', () => {
  it("renders main title 'TODO LIST'", () => {
    render(<Home />);
    expect(screen.getByText('TODO LIST')).toBeInTheDocument();
  });
});
