import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world! yay!</div>,
    },
]);

const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router