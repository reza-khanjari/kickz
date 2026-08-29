import Heading from "@/ui/Heading";
import { FiEdit } from "react-icons/fi";
import useGetProfile from "./useProfileQuery";
import { useState } from "react";
import Overlay from "@/ui/Overlay";
import Loader from "@/ui/Loader";
import ProfileUpdateForm from "./ProfileUpdateForm";
import Skeleton from "@/ui/Skeleton";
function ProfileUpdate() {
  const { data, isLoading } = useGetProfile();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (!data) {
    return;
  }
  const formatedBirthday = new Intl.DateTimeFormat("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(data?.birthday));
  const profileInfo = [
    {
      label: "Full Name",
      value: data.full_name,
    },
    {
      label: "National Code",
      value: data.national_code,
    },
    {
      label: "Email",
      value: data.email,
    },
    {
      label: "Phone Number",
      value: data.phone_number,
    },
    {
      label: "Birthday",
      value: formatedBirthday,
    },
    {
      label: "User Name",
      value: data.username,
    },
  ];

  return (
    <div className="w-full">
      <Heading className="mb-6 font-medium capitalize" level="h2">
        Personal info
      </Heading>
      <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-6 rounded-md p-8 md:grid-cols-3">
        {isLoading
          ? Array.from({ length: 9 }, (_, i) => (
              <Skeleton  variant="infoBox" key={i} />
            ))
          : profileInfo.map((item) => (
              <div
                key={item.label}
                className="shadow-bottom flex w-full max-w-sm items-center justify-between justify-self-center rounded-lg bg-white/5 px-4 py-3 md:p-6"
              >
                <div className="space-y-2">
                  <p className="text-sm font-light"> {item.label} </p>
                  <p className="font-medium">
                    {item.value === "" ? (
                      <span className="text-sm">Empty</span>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
                <div className="shadow-bottom rounded-xl p-2.5">
                  <FiEdit
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer text-xl"
                  />
                </div>
              </div>
            ))}
      </div>
      <Overlay closeToggle={() => setIsOpen(false)} isOpen={isOpen} />
      <ProfileUpdateForm setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}

export default ProfileUpdate;
