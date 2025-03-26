import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import ContactPage from "./pages/Contactpage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TopRatedMovies } from "./pages/TopRatedMovies";
import Upcoming from "./pages/Upcoming";
import MovieDetails from "./pages/MovieDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * (60 * 1000),
    },
  },
});

const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },

      {
        path: "upcoming",
        element: <Upcoming />,
      },

      {
        path: "top-rated",
        element: <TopRatedMovies />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
