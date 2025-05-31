import React from 'react';
import { render } from '@testing-library/react';
import EmployeeList from './EmployeeList';  // Adjust import if needed

test('renders EmployeeList correctly', () => {
  const { getByText } = render(<EmployeeList />);
  expect(getByText('Employee List')).toBeInTheDocument();
});
