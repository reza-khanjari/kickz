import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import {
  getCurrentUser,
  signInWithEmail,
  signOutWithEmail,
  signupWithEmail,
} from "./authService";
import type { LoginInput, RegisterInput } from "./authSchema";
import toast from "react-hot-toast";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: RegisterInput) => signupWithEmail(data),
    onSuccess: () => {
      toast.success(
        "Registration successful! please check your email for confirmation link.",
      );
      navigate("/login");
    },
    onError: (error: Error) => {
      toast.error(error.message || "An error occurred during registration.");
      throw new Error(error.message);
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginInput) => signInWithEmail(data),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success("Welcome Back!");
      navigate("/", { replace: true });
    },
    onError: (error: Error) => {
      toast.error(error.message || "Invalid email or password.");
      throw new Error(error.message);
    },
  });
};

export const useUser = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    staleTime: Infinity,
    queryFn: getCurrentUser,
  });
  if (error) {
    toast.error(error.message);
    throw new Error(error.message || "Unable to retrieve user data.");
  }

  const isAuthenticated: boolean = !!user && user.role === "authenticated";

  return { user, isAuthenticated, isLoading };
};

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signOutWithEmail,
    onSuccess: () => {
      queryClient.clear();
      toast.success("Logged out successfully");
      navigate("/login", { replace: true });
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to Log out.");
      throw new Error(error.message);
    },
  });
};
