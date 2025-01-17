import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { Button } from "./components/ui/button";
import AppLayout from "./Layouts/app-layout";
import LandingPage from "./pages/landing-page";
import Onboarding from "./pages/onboarding-page";
import JobList from "./pages/job-list";
import Job from "./pages/job";
import PostJob from "./pages/job-post";
import SavedJobs from "./pages/saved-jobs";
import MyJobs from "./pages/my-jobs";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoutes from "./components/protected-route";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoutes>
            <Onboarding />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoutes>
            <JobList />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/jobs/:id",
        element: (
          <ProtectedRoutes>
            <Job />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoutes>
            <PostJob />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoutes>
            <SavedJobs />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoutes>
            <MyJobs />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={routes}>
        
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
