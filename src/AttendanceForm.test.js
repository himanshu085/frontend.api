// src/AttendanceForm.test.js
import React from 'react';
import { render } from '@testing-library/react';
import AttendanceForm from './AttendanceForm';  // Adjust the import if needed

test('renders AttendanceForm component correctly', () => {
  const { getByText } = render(<AttendanceForm />);
  // Check if a button with "Submit" text is present (or any other element from the component)
  expect(getByText('Submit')).toBeInTheDocument();
});
