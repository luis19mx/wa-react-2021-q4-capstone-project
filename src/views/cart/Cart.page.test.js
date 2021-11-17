import React from 'react';
import { render, screen } from 'utils/test-utils/render';
import App from 'components/App';
import cartItemsStore from 'utils/fixtures/cartItemsStore.mock';

describe('/cart', () => {
  it('renders the cart items', async () => {
    render(<App />, {
      route: '/cart',
      preloadedState: cartItemsStore,
    });

    const checkoutLink = screen.getByRole('link', { name: 'Go to checkout' });
    const cartItem = screen.getByText(/Pearce Modular Sofa Left Arm/);

    expect(checkoutLink).toBeInTheDocument();
    expect(cartItem).toBeInTheDocument();
  });

  it('redirects to products page when cart is empty', async () => {
    const { history } = render(<App />, {
      route: '/cart',
    });

    expect(history.location.pathname).toBe('/products');
    expect(history.entries.length).toBe(2);
  });
});
