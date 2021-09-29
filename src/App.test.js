import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('Find logon button', () => {
  render(<App />);
  expect(screen.getByText('Forgot Password')).toBeInTheDocument();
});

it('Find Email Address', () => {
  render(<App />);
  expect(screen.getByText('Email Address')).toBeInTheDocument();
});

it('Find Password', () => {
  render(<App />);
  expect(screen.getByText('Password')).toBeInTheDocument();
});

it('Find Forgot Password', () => {
  render(<App />);
  expect(screen.getByText('Forgot Password')).toBeInTheDocument();
});
