import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

jest.useFakeTimers();

test('initial render', async () => {
  render(<App />);
  const linkElement = await screen.findByRole('timer');

  expect(linkElement).toHaveTextContent(0);
});

test('start timer with 10 sec', async () => {
  render(<App />);
  const linkElement = await screen.findByRole('timer');
  const btn = await screen.findByText('10 seconds');

  // fireEvent(btn, 'click');
  fireEvent.click(btn);

  expect(linkElement).toHaveTextContent(0);
});

test('start timer with 1 minute', async () => {
  render(<App />);
  const linkElement = await screen.findByRole('timer');
  const btn = await screen.findByText('1 minute');

  fireEvent.click(btn);

  expect(linkElement).toHaveTextContent(60);
});

test('reset timer', async () => {
  render(<App />);
  const linkElement = await screen.findByRole('timer');
  const btn = await screen.findByText('1 minute');
  const rst = await screen.findByText('reset');

  fireEvent.click(btn);
  expect(linkElement).toHaveTextContent(60);

  fireEvent.click(rst);
  expect(linkElement).toHaveTextContent(0);
});

test('start timer', async () => {
  render(<App />);
  const linkElement = await screen.findByRole('timer');
  const btn = await screen.findByText('1 second');
  const strt = await screen.findByText('start');

  fireEvent.click(btn);
  expect(linkElement).toHaveTextContent(1);

  fireEvent.click(strt);
  expect(linkElement).toHaveTextContent(1);

  expect(setInterval).toHaveBeenCalledTimes(2);
});
