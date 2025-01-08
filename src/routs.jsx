import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutUs from "./pages/AboutUss";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <AboutUs /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/services", element: <Services /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <ContactUs /> },
    ],
  },
]);
