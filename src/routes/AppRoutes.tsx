import { lazy, Suspense } from "react";
import MainLayout from "@/layouts/MainLayout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "@/features/auth/Login";
import Signup from "@/features/auth/Signup";
import ProtectedRoute from "@/features/auth/ProtectedRoute";
import Products from "@/pages/ProductsPage";
import ProductPage from "@/pages/ProductPage";

const Home = lazy(() => import("@/pages/HomePage"));
const Cart = lazy(() => import("@/pages/CartPage"));
const Profile = lazy(() => import("@/pages/ProfilePage"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:productId",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "cart",
    element: (
      <ProtectedRoute>
        <Cart />
      </ProtectedRoute>
    ),
  },
  {
    path: "profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  { path: "login", element: <Login /> },
  { path: "signup", element: <Signup /> },
]);
export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
