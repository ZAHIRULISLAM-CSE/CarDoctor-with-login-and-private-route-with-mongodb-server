import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/Login/Login";
import CheckOut from "../pages/checkout/CheckOut";
import Myorders from "../pages/orders/Myorders";
import PrivateRoute from "./PrivateRoute";

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
          {
            path: "/checkout/:id",
            element:<CheckOut></CheckOut>,
            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
          },
          {
            path: "/orders",
            element:<PrivateRoute><Myorders></Myorders></PrivateRoute>,
         },
        ]
        },
      ])

export default router;