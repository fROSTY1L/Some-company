import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "../AppLayout";
import HomePage from "../pages/HomePage";
import ContactUsPage from "../pages/ContactUsPage";
import { SEO } from "./SEO";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: 
          <>
            <SEO title="Контакты" description="Контактная информация" />
            <HomePage />
          </>,
      },
      {
        path: "contact",
        element: 
          <>
            <SEO title="Контакты" description="Контактная информация" />
            <ContactUsPage />
          </>,
      },
    ],
  },
]);
