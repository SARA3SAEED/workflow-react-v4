import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import React from 'react';
import HomePage from '../pages/HomePage';
import Projects from '../pages/Projects';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import Users from '../pages/Users';
import Dashbord from '../pages/Dashbord';
import Add from '../pages/Add';
import Details from '../pages/Details';
import EditDetails from '../pages/EditDetails';


export default function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <HomePage />,
        },
        {
            path: "/signup",
            element: <SignupPage />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/dashbord",
            element: <Dashbord />,
          },
          {
            path: "/projects",
            element: <Projects />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/add",
            element: <Add />,
          }
          ,
          {
            path: "/details",
            element: <Details />,
          },
          ,
          {
            path: "/edit",
            element: <EditDetails />,
          },
      ]);


  return (
    <RouterProvider router={router}/>
  )
}
