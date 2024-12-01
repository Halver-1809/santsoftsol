import '@/assets/css/App.css';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import React from "react"
import * as ReactDOM from "react-dom/client"
import Main from '@/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ErrorBoundary>
      <Main />
  </ErrorBoundary>,
);
