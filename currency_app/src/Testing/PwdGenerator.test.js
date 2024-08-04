import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
import { PwdGenerator } from '../components/PwdGenerator';
describe('PwdGenerator', () => {
  it('renders password generator form', () => {
    const { getByText } = render(<PwdGenerator />);
    expect(getByText('Generate Password')).toBeInTheDocument();
  });

  it('generates password when form is submitted', async () => {
    const { getByText, getByPlaceholderText } = render(<PwdGenerator />);
    const passwordInput = getByPlaceholderText('Password');
    const generateButton = getByText('Generate Password');

    fireEvent.click(generateButton);

    await waitFor(() => {
      expect(passwordInput.value).not.toBe('');
    });
  });

  it('generates password with correct length', async () => {
    const { getByText, getByPlaceholderText } = render(<PwdGenerator />);
    const passwordInput = getByPlaceholderText('Password');
    const generateButton = getByText('Generate Password');
    const lengthInput = getByPlaceholderText('Length');

    fireEvent.change(lengthInput, { target: { value: '12' } });
    fireEvent.click(generateButton);

    await waitFor(() => {
      expect(passwordInput.value.length).toBe(12);
    });
  });

  it('includes uppercase letters when option is selected', async () => {
    const { getByText, getByPlaceholderText, getByLabelText } = render(<PwdGenerator />);
    const passwordInput = getByPlaceholderText('Password');
    const generateButton = getByText('Generate Password');
    const uppercaseCheckbox = getByLabelText('Include Uppercase Letters');

    fireEvent.click(uppercaseCheckbox);
    fireEvent.click(generateButton);

    await waitFor(() => {
      expect(passwordInput.value).toMatch(/[A-Z]/);
    });
  });

  it('includes numbers when option is selected', async () => {
    const { getByText, getByPlaceholderText, getByLabelText } = render(<PwdGenerator />);
    const passwordInput = getByPlaceholderText('Password');
    const generateButton = getByText('Generate Password');
    const numbersCheckbox = getByLabelText('Include Numbers');

    fireEvent.click(numbersCheckbox);
    fireEvent.click(generateButton);

    await waitFor(() => {
      expect(passwordInput.value).toMatch(/[0-9]/);
    });
  });

  it('includes special characters when option is selected', async () => {
    const { getByText, getByPlaceholderText, getByLabelText } = render(<PwdGenerator />);
    const passwordInput = getByPlaceholderText('Password');
    const generateButton = getByText('Generate Password');
    const specialCharsCheckbox = getByLabelText('Include Special Characters');

    fireEvent.click(specialCharsCheckbox);
    fireEvent.click(generateButton);

    await waitFor(() => {
      expect(passwordInput.value).toMatch(/[^a-zA-Z0-9]/);
    });
  });
});