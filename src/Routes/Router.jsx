import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layoutes/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import NotfounPage from "../Pages/NotfounPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import AuthenticationLayout from "../Layoutes/AuthenticationLayout";
import NewsDetaile from "../Pages/NewsDetaile";
import PrivateRoute from "./PrivateRoute";
import LoadingPage from "../Pages/LoadingPage";
import AboutPage from "../Pages/AboutPage";
import Career from "../Pages/Career";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      { path: "", element: <Home></Home> },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <LoginPage></LoginPage>,
      },
      { path: "/about", element: <AboutPage></AboutPage> },
      { path: "/career", element: <Career></Career> },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationLayout></AuthenticationLayout>,
    children: [
      { path: "/auth/login", element: <LoginPage></LoginPage> },
      { path: "/auth/register", element: <RegisterPage></RegisterPage> },
    ],
  },
  {
    path: "/newsDetails/:id",
    element: (
      <PrivateRoute>
        <NewsDetaile></NewsDetaile>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <LoadingPage></LoadingPage>,
  },
  { path: "*", Component: NotfounPage },
]);
