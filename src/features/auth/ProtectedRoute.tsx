import type React from "react";
import { useUser } from "./useAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Loader from "@/ui/Loader";

interface ProtectedRout {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRout) {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <Loader className="min-w-200" />;
  }
  return isAuthenticated ? <>{children}</> : null;
}

export default ProtectedRoute;
