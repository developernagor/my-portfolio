import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import ProjectDetails from "../components/Projects/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    //   {
    //     path: '/projects/:id',
    //     element: <ProjectDetails></ProjectDetails>
    // }
      

      
    ],
  },
  {
      path: '/projects/:id',
      element: <ProjectDetails></ProjectDetails>,
      loader: () => fetch('/projects.json')
  }
]);

export default router;
