import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RestBody from './Components/RestBody';
import SingleCard from './Components/customHooks/useSingleCard';
import { Provider } from 'react-redux';
import Store from './Components/redux/store';
import Cart from './Components/cart';
// import Help from './Components/help';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const Help = lazy(() => import('./Components/help'));

const HeaderFooter = () => {
  return (
    <Provider store={Store}>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeaderFooter />,
    children: [
      {
        path: '/',
        element: <RestBody />,
      },
      {
        path: '/restaurent/:id',
        element: <SingleCard />,
      },
      {
        path: '/help',
        element: (
          <Suspense>
            <Help />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('swiggy'));
root.render(<RouterProvider router={AppRouter} />);
