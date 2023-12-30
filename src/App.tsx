import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Cards from "./pages/cards";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/more",
    element: <Cards />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
