import HomePage from "components/pages/Home";
import AboutPage from "components/pages/About";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/about",
    exact: true,
    component: AboutPage,
  },
];

export default routes;
