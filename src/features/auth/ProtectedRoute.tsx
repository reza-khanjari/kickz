import type React from "react";
import { useUser } from "./useAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { IoWarning } from "react-icons/io5";
import toast from "react-hot-toast";

interface ProtectedRout {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRout) {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast.custom((t) => <div className="bg-[#f7f7f7] flex text-black items-center rounded-lg gap-x-2 px-6 py-2" >
        <IoWarning className="text-3xl animate-scale text-orange-500" />
         <p >
           Please sign in to continue.
         </p>
      </div>)
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div
        className={`flex-center h-dvh w-full px-8 [background:var(--bg-101-sm)] md:[background:var(--bg-101-lg)]`}
      >
        <div className="h-full flex-center max-h-50 w-full border border-white/50 max-w-100 rounded-2xl backdrop-blur-sm bg-white/30">
          <p className="text-5xl font-bold ">Loading...</p>
        </div>
      </div>
    );
  }
  return isAuthenticated ? <>{children}</> : null;
}

export default ProtectedRoute;
