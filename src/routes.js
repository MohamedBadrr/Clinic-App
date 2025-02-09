import { createBrowserRouter  } from "react-router-dom";
import HomePaage from "./pages/Home/HomePage";
import App from "./App";
import Login from "./pages/Home/componants/Login/Login";
import Register from "./pages/Home/componants/Register/Register";
export const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePaage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
