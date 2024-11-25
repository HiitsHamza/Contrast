import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import ContactPage from "./pages/contact";
import ExplorePage from "./pages/explore";
import ProfilePage from "./components/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      // remove once producst have been assigned, replace w category
      {
        path: "product-demo",
        element: <ProductPage />,
      },
      //add routes here
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "explore",
        element: <ExplorePage />,
      },
      {
        path: "ProfilePage",
        element: <ProfilePage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
