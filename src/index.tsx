import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CustomToastContainer from './components/blocks/CustomToastContainer';

const rootNode = document.getElementById('root') as HTMLElement;

// react-query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <CustomToastContainer />
    </QueryClientProvider>
  </React.StrictMode>,
);
