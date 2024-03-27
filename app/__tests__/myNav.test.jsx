import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MyNav from '../components/MyNav';

test('render menue', () => {
    render(<MyNav />);
    const leHome = screen.getByTestId(/myNav/i);
    expect(leHome).toBeInTheDocument();
})