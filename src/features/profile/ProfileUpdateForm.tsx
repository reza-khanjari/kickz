import DatePickerUi from "@/ui/DatePicker";
import Heading from "@/ui/Heading";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { updateInfoSchema } from "./updateProfileSchema";
import type z from "zod";
import { RxCross2 } from "react-icons/rx";
import useUpdateInfo from "./useUpdateProfile";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import type { Dispatch, SetStateAction } from "react";
export type UpdateInfo = z.infer<typeof updateInfoSchema>;
interface AccountDetailsUpdateProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function ProfileUpdateForm({ isOpen, setIsOpen }: AccountDetailsUpdateProps) {
  const { updateInfo, isPending } = useUpdateInfo();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateInfo>({
    resolver: zodResolver(updateInfoSchema),
  });

  const onSubmit = (data: UpdateInfo) => {
    const cleanData = Object.fromEntries(
      Object.entries(data).filter(([, value]) => value !== "" && value != null),
    );

    updateInfo(cleanData, {
      onSuccess: () => {
        reset();
        setIsOpen(false);
      },
    });
  };
  return (
    <div
      className={`${isOpen ? "" : "hidden"} md:abs-center max-md:animate-fade-in fixed top-16 left-0 z-50 mx-auto min-h-dvh w-full overflow-auto bg-black p-8 text-white shadow-[0px_0px_8px_rgba(0,0,0,0.5)] md:max-h-120 md:min-h-[75dvh] md:max-w-lg md:rounded-md`}
    >
      <RxCross2
        aria-label="Close"
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 cursor-pointer stroke-[0.7] text-3xl drop-shadow-[0_0_3px_rgba(0,0,0,0.2)]"
      />

      <Heading className="mb-3" level="h3">
        Update Your Info
      </Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-[minmax(200px,300px)] justify-center gap-y-6 overflow-auto text-sm"
      >
        <div>
          <label htmlFor="full_name" className="pl-2">
            Full Name
          </label>
          <Input
            id="full_name"
            {...register("full_name")}
            className="my-2 w-full rounded-md border border-black bg-white px-2 py-1.5 outline-0"
            type="text"
            error={errors.full_name?.message}
          />
        </div>
        <div>
          <label htmlFor="national_code" className="pl-2">
            National Code
          </label>
          <Input
            {...register("national_code")}
            id="national_code"
            className="my-2 w-full rounded-md border border-black bg-white px-2 py-1.5 outline-0"
            type="text"
            error={errors.national_code?.message}
          />
        </div>
        <div>
          <label htmlFor="email" className="pl-2">
            Email
          </label>
          <Input
            {...register("email")}
            id="email"
            className="my-2 w-full rounded-md border border-black bg-white px-2 py-1.5 outline-0"
            type="email"
            error={errors.email?.message}
          />
        </div>
        <div>
          <label htmlFor="phone_number" className="pl-2">
            Phone Number
          </label>
          <Input
          id="phone_number"
            {...register("phone_number")}
            className="my-2 w-full rounded-md border border-black bg-white px-2 py-1.5 outline-0"
            type="tel"
            error={errors.phone_number?.message}
          />
        </div>
        <div>
          <label htmlFor="birthday" className="pl-2">
            Birthday
          </label>
          <div className="my-2">
            <Controller
        
              name="birthday"
              control={control}
              render={({ field }) => (
                <>
                  <DatePickerUi
                
                    label={"Pick your birthday"}
                    value={field.value ?? null}
                    onChange={field.onChange}
                  />
                </>
              )}
            />
            {errors.birthday?.message ? (
              <p className="my-1 rounded-md border border-[#FF4D4F] bg-[#2A1215] py-1.5 pl-4 text-sm text-[#FF4D4F]">
                {errors.birthday?.message}
              </p>
            ) : (
              <p className="text-sm text-transparent">&nbsp;</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="" className="pl-2">
            User Name
          </label>
          <Input
            {...register("username")}
            id="username"
            className="my-2 w-full rounded-md border border-black bg-white px-2 py-1.5 outline-0"
            type="text"
            error={errors.username?.message}
          />
        </div>
        <Button disabled={isPending} className="mx-auto py-2.5" type="submit">
          {isPending ? "pending" : "submit"}
        </Button>
      </form>
    </div>
  );
}

export default ProfileUpdateForm;
