// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinSpark title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinSpark/i);
    expect(titleElement).toBeInTheDocument();
});
