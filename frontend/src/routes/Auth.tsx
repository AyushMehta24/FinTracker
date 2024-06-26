import { useRoutes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { PageNotFound } from "../components/errors/PageNotFound";

export const Auth = () => {
  const element = useRoutes([
    { path: "/login", Component: Login },
    { path: "/register", Component: Register },
    { path: "*", Component: PageNotFound },
  ]);
  return element;
};
