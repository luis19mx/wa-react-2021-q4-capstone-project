import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen } from 'utils/test-utils/render';
import { useFetchSingleProduct } from 'utils/hooks';
import App from 'components/App';

const productId = 'YWL6YBIAAC0AztrR';

describe('/product/:productId', () => {
  it('renders the product', async () => {
    const { Wrapper } = render(<App />, {
      route: `/product/${productId}`,
    });

    const { result, waitFor } = renderHook(
      () => useFetchSingleProduct(productId),
      { wrapper: Wrapper }
    );

    await waitFor(() => {
      const productEl = screen.getByTestId('product-details');

      expect(result.current.product.id).toBe(productId);
      expect(productEl).toBeInTheDocument();
    });
  });
});
