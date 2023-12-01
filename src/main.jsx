import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Presentation from "./components/Presentation.jsx";
import Experiences from "./components/Experiences.jsx";
import Hobbies from "./components/Hobbies.jsx";
import Education from "./components/Education.jsx";
import Error from "./components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Presentation />,
      },
      {
        path: "experiences",
        element: <Experiences />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "hobbies",
        element: <Hobbies />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
