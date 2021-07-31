import { lazy } from "react";
import NotFoundPage from "../pages/NotFoundPage";

const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage")),
  },
  {
    name: "movies",
    path: "/movies",
    exact: true,
    component: lazy(() => import("../pages/MoviesPage")),
  },
  {
    name: "movieDetails",
    path: "/movies/:id",
    exact: false,
    component: lazy(() => import("../pages/MovieDetailsPage")),
  },
  { name: "NotFoundPage", component: NotFoundPage },
];

export default mainRoutes;
