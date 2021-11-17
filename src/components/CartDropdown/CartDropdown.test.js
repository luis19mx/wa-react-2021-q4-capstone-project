import React from 'react';
import { render, screen } from 'utils/test-utils/render';
import CartDropdown from './CartDropdown.component';
import cartItemsStore from 'utils/fixtures/cartItemsStore.mock';

describe('<CartDropdown />', () => {
  it('shows the cart item', async () => {
    render(<CartDropdown />, {
      route: '/test',
      preloadedState: cartItemsStore,
    });

    const cartItemEl = screen.getByText(/Chesterfield Sofa Dark Brown/);
    expect(cartItemEl).toBeInTheDocument();
  });
  it('shows the empty message', async () => {
    render(<CartDropdown />, {
      route: '/test',
    });

    const cartItemEl = screen.getByText(/You don't have any items yet./);
    expect(cartItemEl).toBeInTheDocument();
  });
});
