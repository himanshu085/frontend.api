// src/HomePage.react.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './HomePage.react';

// Mock child components
jest.mock('./EmployeeData', () => ({
  ListAllEmployees: () => <div>ListAllEmployees</div>,
  ListEmployeeActiveEmployee: () => <div>ListEmployeeActiveEmployee</div>,
  ListEmployeeInActiveEmployee: () => <div>ListEmployeeInActiveEmployee</div>,
  RoleDistribution: () => <div>RoleDistribution</div>,
  LocationDistribution: () => <div>LocationDistribution</div>,
  StatusDistribution: () => <div>StatusDistribution</div>
}));

jest.mock('./SiteWrapper.react', () => ({
  __esModule: true,
  default: ({ children }) => <div>{children}</div> // Mock SiteWrapper
}));

describe('HomePage Component', () => {
  test('renders HomePage and its child components', () => {
    render(<Home />);

    // Check if the main title "Dashboard" is rendered
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();

    // Check if the mocked components are rendered
    expect(screen.getByText(/ListAllEmployees/i)).toBeInTheDocument();
    expect(screen.getByText(/ListEmployeeActiveEmployee/i)).toBeInTheDocument();
    expect(screen.getByText(/ListEmployeeInActiveEmployee/i)).toBeInTheDocument();
    expect(screen.getByText(/RoleDistribution/i)).toBeInTheDocument();
    expect(screen.getByText(/LocationDistribution/i)).toBeInTheDocument();
    expect(screen.getByText(/StatusDistribution/i)).toBeInTheDocument();
  });

  test('renders StatsCard for office locations', () => {
    render(<Home />);

    // Test if the StatsCard for office locations is rendered with the correct label
    expect(screen.getByText(/Office Locations/i)).toBeInTheDocument();
  });
});
