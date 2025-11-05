import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));
import ErrorPage from "../pages/ErrorPage"; // create this

const repoName = import.meta.env.VITE_REPO_NAME || "";

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      errorElement: <ErrorPage />, // <-- add this
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ],
  { basename: `/${repoName}` }
);
