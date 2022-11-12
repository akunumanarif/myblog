import React from "react";
import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";
import Register from "./pages/Register";
import Register from "./pages/Login";
import Register from "./pages/Home";
import Register from "./pages/Api";
import Register from "./pages/Single";
import Register from "./pages/Write";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is Home</div>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/api",
    element: <Api />,
  },
  {
    path: "/Write",
    element: <Single />,
  },
  {
    path: "/write",
    element: <Write />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
