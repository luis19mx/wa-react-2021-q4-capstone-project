import React from 'react';
import { server } from 'utils/test-utils/server';
import { render, screen } from 'utils/test-utils/render';
import App from 'components/App';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('<App />', () => {
  it('renders the layout and spinner state', async () => {
    render(<App />);

    const spinnerEl = screen.getByTestId('spinner');
    const headerEl = screen.getByTestId('header');
    const footerEl = screen.getByText(
      /Ecommerce created during Wizeline’s Academy React Bootcamp./
    );

    expect(spinnerEl).toBeInTheDocument();
    expect(headerEl).toBeInTheDocument();
    expect(footerEl).toBeInTheDocument();
  });
});
