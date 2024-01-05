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
    path: "/mentorship",
    element: <Mentorship />,
  },
  {
    path: "/sponsorship",
    element: <Sponsorship />,
  },
  {
    path: "/volunteering",
    element: <Volunteering />,
  },

  {
    path: "/workshops",
    element: <Workshop />,
  },
  {
    path: "/judging",
    element: <Judging />,
  },
  {
    path: "/prizes",
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
