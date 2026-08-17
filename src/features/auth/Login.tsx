import { useForm } from "react-hook-form";
import { loginSchema, type LoginInput } from "./authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/ui/Input";
import { useLogin } from "./useAuth";
import Heading from "@/ui/Heading";
import Button from "@/ui/Button";
import { NavLink } from "react-router";
import {  logoUrl } from "@/ui/constants";

function Login() {
  const { mutate: login, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });
  return (
    <div className={`h-dvh w-full  [background:var(--bg-101-sm)] md:[background:var(--bg-101-lg)]`}>
      <div className="abs-center bg-black-900/90 flex w-full max-w-86 sm:max-w-lg  flex-col items-center rounded-lg border border-white/10 px-8 pt-6 pb-8 text-white backdrop-blur-md">
        <div className="size-24">
          <img className="size-full"src={logoUrl} alt="logo" />
        </div>
        <Heading level="h3" className="mb-2">
          Welcome Back
        </Heading>
        <p className="mb-4 text-sm text-white/60">
          Sign in to your account to continue
        </p>
        <form
          className="gap-y flex w-full flex-col"
          onSubmit={handleSubmit((data) => login(data))}
          noValidate
        >
          <Input
            label="Email"
            type="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Password"
            type="password"
            error={errors.password?.message}
            {...register("password")}
          />
          <Button
            variant="secondary"
            className="mx-auto mt-4 max-w-75 py-2.5"
            type="submit"
          >
            {isPending ? "Logging in..." : "Sign in"}
          </Button>
          <p className="mt-6 text-center text-sm text-white/60">
            Don't have an account?
            <NavLink className={`pl-2 text-white`} to="/signup">
              Sign Up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
