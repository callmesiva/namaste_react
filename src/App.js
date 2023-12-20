import React, { Suspense, lazy } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/H&F/Header";
import Footer from "./components/H&F/Footer";
import Body from "./components/Body/Body";
import Profile from "./components/About/Profile";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Utils/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const About = lazy(() => import("./components/About/About"));

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h6>Loading....</h6>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
