/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';

import HomePage from '@/app/page';

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = class {
    root: Element | null = null;
    rootMargin = '';
    thresholds: ReadonlyArray<number> = [];

    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
});

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<HomePage />);

    const heading = screen.getByText(/MiLeMed/i);

    expect(heading).toBeInTheDocument();
  });
});
