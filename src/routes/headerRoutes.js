import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";

const mainRoutes = [
  { name: "home", path: "/", exact: true, component: HomePage },
  { name: "movies", path: "/movies", exact: false, component: MoviesPage },
];
export default mainRoutes;
