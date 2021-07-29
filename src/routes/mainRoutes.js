import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";

const mainRoutes = [
  { name: "home", path: "/", exact: true, component: HomePage },
  { name: "movies", path: "/movies", exact: false, component: MoviesPage },
  // { name: "movieDetailsPage", path: "/movieDetailsPage", exact: true },
  // { name: "cast", path: "/cast", exact: true },
  // { name: "reviews", path: "/reviews", exact: true },
];
export default mainRoutes;
