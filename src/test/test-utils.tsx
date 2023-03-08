import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { PreloadedState } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { setupStore } from '../redux/store';
import { RootState } from '../redux/reducers';

// Reference: https://tkdodo.eu/blog/testing-react-query
// Reference: https://github.com/TanStack/query/blob/ead2e5dd5237f3d004b66316b5f36af718286d2d/src/react/tests/utils.tsx#L6-L17
export const renderWithClient = (ui: React.ReactElement, preloadedState: PreloadedState<RootState> = {}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  });

  const store = setupStore(preloadedState);

  const { rerender, ...result } = render(
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
      </BrowserRouter>
    </Provider>
  );

  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(<QueryClientProvider client={queryClient}>{rerenderUi}</QueryClientProvider>)
  };
};
