import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/Login/Login";

    const router = createBrowserRouter([
        {
          path: "/",
          element:<Main></Main>,
          children:[
            {
            path: "/",
            element:<Home></Home>,
            },
            {
                path: "/register",
                element:<Register></Register>,
            },
            {
              path: "/login",
              element:<Login></Login>,
          },
        ]
        },
      ])

export default router;