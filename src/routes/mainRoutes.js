import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";

const mainRoutes = [
  { name: "home", path: "/", exact: true, component: HomePage },
  { name: "movies", path: "/movies", exact: true, component: MoviesPage },
  {
    name: "movieDetails",
    path: "/movies/:id",
    exact: false,
    component: MovieDetailsPage,
  },
  // { name: "movieDetailsPage", path: "/movieDetailsPage", exact: true },
  // { name: "cast", path: "/cast", exact: true },
  // { name: "reviews", path: "/reviews", exact: true },
];
export default mainRoutes;
