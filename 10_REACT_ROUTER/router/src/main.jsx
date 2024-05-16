import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1 - configurando router
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom';

// components
import Contact from './routes/Contact.jsx';
import ErrorPage from './routes/ErrorPage.jsx'; // 2 - página de erro
import Home from './routes/Home.jsx'; // 3 - componente base
import Product from './routes/Product.jsx'; // 7 - rota dinamica
import Info from './routes/Info.jsx'; // 8 - Nested route
import Search from './routes/Search.jsx'; // 9 - Search

// 1 - configurando router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 7 - rota dinamica
      {
        path: "products/:id",
        element: <Product />,
      },
      // 8 - nested route
      {
        path: "products/:id/info",
        element: <Info />,
      },
      // 9 - search
      {
        path: "search",
        element: <Search />,
      },
      // 10 - Redirect
      {
        path: "teste",
        element: <Navigate to="/" />,
      }
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
