import React from 'react';
import renderWithProviders from 'utils/test-utils/renderWithProviders';
import App from 'components/App';

describe('<App />', () => {
  it('renders the layout and spinner state', async () => {
    const { getByTestId, getByText } = renderWithProviders(<App />);

    const spinnerEl = getByTestId('spinner');
    const headerEl = getByTestId('header');
    const footerEl = getByText(
      /Ecommerce created during Wizeline’s Academy React Bootcamp./
    );

    expect(spinnerEl).toBeInTheDocument();
    expect(headerEl).toBeInTheDocument();
    expect(footerEl).toBeInTheDocument();
  });
});
