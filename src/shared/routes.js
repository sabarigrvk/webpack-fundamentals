import HomePage from "components/pages/HomePage";
import AboutPage from "components/pages/AboutPage";

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
