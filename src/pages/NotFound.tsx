import Button from "@/ui/Button";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="relative h-dvh [background-image:var(--bg-102-sm)] bg-cover bg-center bg-no-repeat sm:[background-image:var(--bg-102-lg)]">
      <div className="absolute top-28 md:gap-y-8 left-1/2 md:left-1/16 -translate-x-1/2 md:translate-x-0 flex w-full max-w-md flex-col items-center gap-y-4       uppercase ">
        <p className="text-7xl">404</p>
        <p className="text-4xl font-black">Page not found</p>
        <div className="text-center mt-104 md:mt-0 text-lg font-medium">
          <p>lost?</p>
          <p>let's get back on track</p>
        </div>

        <Button
          onClick={() => navigate("/")}
          className="max-w-48 py-3"
          variant="secondary"
        >
          Back to home
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
