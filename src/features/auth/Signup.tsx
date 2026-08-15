import Heading from "@/ui/Heading";
import { useRegister } from "./useAuth";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterInput } from "./authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/ui/Input";
import { useEffect, useState } from "react";
import { FaCamera, FaPlus } from "react-icons/fa6";
import Button from "@/ui/Button";
import { NavLink } from "react-router";
import {  logoUrl } from "@/ui/constants";


function Signup() {
  const { mutate: registerUser, isPending } = useRegister();
  const [prevUrl, setPrevUrl] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });
  const avatarRegister = register("avatar");
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file)
      setPrevUrl((oldURL) => {
        if (oldURL) URL.revokeObjectURL(oldURL);
        return file ? URL.createObjectURL(file) : null;
      });
    else setPrevUrl(null);
  };
  useEffect(() => {
    return () => {
      if (prevUrl) URL.revokeObjectURL(prevUrl);
    };
  }, [prevUrl]);
  const onSubmit = (data: RegisterInput) => {
    registerUser(data);
  };
  return (
    <div className={`h-dvh w-full  [background:var(--bg-101-sm)] md:[background:var(--bg-101-lg)]`}>
      <div className="abs-center bg-black-900/90 flex max-h-[80dvh] w-full max-w-lg  flex-col items-center overflow-auto rounded-lg border border-white/10 px-12 pt-6 pb-8 text-white backdrop-blur-md">
        <div className="size-24">
          <img className="size-full" src={logoUrl} alt="logo" />
        </div>
        <Heading level="h3" className="mb-2">
          Welcome To Our Website
        </Heading>
        <p className="mb-4 text-sm text-white/60">Sign up to continue</p>
        <form
          noValidate
          className="flex w-full flex-col"
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <div className="my-4 justify-self-center">
            <label className="flex cursor-pointer items-center gap-x-4">
              <input
                className="hidden"
                type="file"
                {...avatarRegister}
                onChange={(e) => {
                  avatarRegister.onChange(e);
                  handleAvatarChange(e);
                }}
              />
              {prevUrl ? (
                <div className="mx-auto size-28 rounded-full">
                  <img
                    className="size-full rounded-full"
                    src={prevUrl}
                    alt="avatar"
                  />
                </div>
              ) : (
                <div className="bg-black-500 flex-center relative mx-auto size-28 rounded-full border border-white/60">
                  <div className="flex-center absolute right-0 bottom-0 size-8 rounded-full bg-[#eee]">
                    <FaPlus className="text-black" />
                  </div>
                  <FaCamera className="text-4xl text-white/60" />
                </div>
              )}
            </label>
          </div>
          {errors.avatar?.message ? (
            <p className="my-1 rounded-md border border-[#FF4D4F] bg-[#2A1215] py-1.5 pl-4 text-sm text-[#FF4D4F]">
              {errors.avatar?.message}
            </p>
          ) : (
            <p className="text-sm text-transparent">&nbsp;</p>
          )}
          <Input
            label="Username"
            type="text"
            error={errors.username?.message}
            {...register("username")}
          />
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
          <Input
            label="Confirm Password"
            type="password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

          <Button
            className="mx-auto max-w-75 py-2.5"
            variant="secondary"
            type="submit"
          >
            {isPending ? "Signing up..." : "Sign up"}
          </Button>
          <p className="mt-6 text-center text-sm text-white/60">
            Already have an account?
            <NavLink className={`pl-2 text-white`} to="/login">
              Sign In
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
