import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import LoginAuth from "../Auth/LoginAuth";
import { ErrorPage } from "./error-page";
import PerfilAuth from "../Auth/PerfilAuth";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <LoginAuth permisos={true}/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:"perfil/",
            element:<PerfilAuth permisos={true}/>,
            children:[
                {
                    path:"",
                    element: <div>sad</div>
                }
            ]
        }
    ]
  },
]);