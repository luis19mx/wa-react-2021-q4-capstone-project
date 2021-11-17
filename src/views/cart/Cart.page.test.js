import React from 'react';
import { render, screen, fireEvent, waitFor } from 'utils/test-utils/render';
import App from 'components/App';
import cartItemsStore from 'utils/fixtures/cartItemsStore.mock';

describe('/cart', () => {
  it('renders the cart items', async () => {
    render(<App />, {
      route: '/cart',
      preloadedState: cartItemsStore,
    });

    const cartItemName = screen.getByText(/Pearce Modular Sofa Left Arm/);
    const cartItemImg = screen.getByAltText(/Pearce Modular Sofa Left Arm/);

    expect(cartItemName).toBeInTheDocument();
    expect(cartItemImg).toBeInTheDocument();
  });

  it('redirects to products page when cart is empty', async () => {
    const { history } = render(<App />, {
      route: '/cart',
    });

    expect(history.location.pathname).toBe('/products');
    expect(history.entries.length).toBe(2);
  });

  it('should remove cart item after clicking remove', async () => {
    const { store } = render(<App />, {
      route: '/cart',
      preloadedState: cartItemsStore,
    });

    const itemsBeforeRemove = store.getState().cart.cartItems.length;

    fireEvent.click(screen.getAllByTestId('remove-item')[0]);

    const itemsAfterRemove = store.getState().cart.cartItems.length;

    expect(itemsAfterRemove).toBe(itemsBeforeRemove - 1);
  });

  it('should change total after clicking increase / decrease icons', async () => {
    const { container, store } = render(<App />, {
      route: '/cart',
      preloadedState: cartItemsStore,
    });

    const cartItemPrice = store.getState().cart.cartItems[1].price;
    const totalEl = container.querySelector('[data-testid=cart-total]');

    const totalValueBeforeIncrease = parseFloat(
      totalEl.textContent.replace(/[$,]/g, '')
    );

    fireEvent.click(screen.getAllByTestId('increase-item')[1]);

    const totalValueAfterIncrease = parseFloat(
      totalEl.textContent.replace(/[$,]/g, '')
    );

    expect(cartItemPrice + totalValueBeforeIncrease).toBe(
      totalValueAfterIncrease
    );

    fireEvent.click(screen.getAllByTestId('decrease-item')[1]);

    const totalValueAfterDecrease = parseFloat(
      totalEl.textContent.replace(/[$,]/g, '')
    );

    expect(totalValueAfterDecrease).toBe(totalValueBeforeIncrease);
  });

  it('should show the total', async () => {
    render(<App />, {
      route: '/cart',
      preloadedState: cartItemsStore,
    });

    const checkoutLink = screen.getByRole('link', { name: 'Go to checkout' });
    const cartTotal = screen.getByTestId('cart-total');

    expect(checkoutLink).toBeInTheDocument();
    expect(cartTotal).toBeInTheDocument();
  });
});
