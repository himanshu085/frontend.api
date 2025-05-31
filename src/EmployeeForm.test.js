import React from 'react';
import { render } from '@testing-library/react';
import EmployeeForm from './EmployeeForm';  // Adjust import if needed

test('renders EmployeeForm with submit button', () => {
  const { getByText } = render(<EmployeeForm />);
  expect(getByText('Submit')).toBeInTheDocument();
});
