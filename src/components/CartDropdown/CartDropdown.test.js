import React from 'react';
import renderWithProviders from 'utils/test-utils/renderWithProviders';
import CartDropdown from './CartDropdown.component';
import cartItemsStore from 'utils/fixtures/cartItemsStore.mock'

describe('<CartDropdown />', () => {
  it('shows the cart item', async () => {
    const { getByText } = renderWithProviders(<CartDropdown />, {
      route: '/test',
      initialState: cartItemsStore,
    });

    const cartItemEl = getByText(/Grayton Armchair/);
    expect(cartItemEl).toBeInTheDocument();
  });
  it('shows the empty message', async () => {
    const { getByText } = renderWithProviders(<CartDropdown />, {
      route: '/test',
    });
    const cartItemEl = getByText(/You don't have any items yet./);
    expect(cartItemEl).toBeInTheDocument();
  });
});
