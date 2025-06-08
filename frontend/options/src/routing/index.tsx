import { Error } from "@/Error";
import { WithSidebar } from "@/layout/WithSidebar";
import { Context, Resume, Template } from "@/pages";
import { Login } from "@/pages/Login/Login";
import { RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    Component: WithSidebar,
    errorElement: <Error />,
    children: [
      {
        path: "/resume",
        element: <Resume />,
        errorElement: <Error />,
      },
      {
        path: "/context",
        element: <Context />,
        errorElement: <Error />,
      },
      {
        path: "/template",
        element: <Template />,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
