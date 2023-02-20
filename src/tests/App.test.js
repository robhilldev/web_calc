import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders web_calc title, calculator table, and footer', () => {
  render(<App />);
  const webCalcTitle = screen.getByText(/Web Calc/i);
  const calcTable = screen.getByRole('table');
  const madeByFooter = screen.getByText(/Made by rhd/i);

  expect(webCalcTitle).toBeInTheDocument();
  expect(calcTable).toBeInTheDocument();
  expect(madeByFooter).toBeInTheDocument();
});
