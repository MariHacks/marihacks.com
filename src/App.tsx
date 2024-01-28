import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Apply from "./pages/apply";
import Home from "./pages/home";
import Judging from "./pages/application-center/judging";
import Mentorship from "./pages/application-center/mentorship";
import Prizes from "./pages/application-center/prizes";
import Registration from "./pages/application-center/registration";
import Sponsorship from "./pages/application-center/sponsorship";
import Volunteering from "./pages/application-center/volunteering";
import Workshop from "./pages/application-center/workshop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/application-center",
    element: <Apply />,
  },
  {
    path: "/application-center/mentorship",
    element: <Mentorship />,
  },
  {
    path: "/application-center/sponsorship",
    element: <Sponsorship />,
  },
  {
    path: "/application-center/volunteering",
    element: <Volunteering />,
  },

  {
    path: "/application-center/workshops",
    element: <Workshop />,
  },
  {
    path: "/application-center/judging",
    element: <Judging />,
  },
  {
    path: "/application-center/prizes",
    element: <Prizes />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
