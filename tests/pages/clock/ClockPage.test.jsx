import { render, screen } from '@testing-library/react';
import { ClockPage } from '../../../src/pages';
import { useLocalClock } from '../../../src/pages/clock/hooks';

jest.mock('../../../src/pages/clock/hooks/useLocalClock');

describe('tests on <ClockPage />', () => {
  test('should match snapshot', () => {
    useLocalClock.mockReturnValue({
      hours: '05',
      minutes: '07',
    });

    const { container } = render(<ClockPage />);
    expect(container).toMatchSnapshot();
  });

  test('should show correctly the clock', () => {
    useLocalClock.mockReturnValue({
      hours: '05',
      minutes: '07',
    });

    render(<ClockPage />);
    expect(screen.getByText('05:07'));
  });
});
