import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '../AppLayout';
import HomePage from '../pages/HomePage';
import ContactUsPage from '../pages/ContactUsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <ContactUsPage />,
      },
    ],
  },
]);