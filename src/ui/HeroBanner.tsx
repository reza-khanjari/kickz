import { useNavigate } from "react-router";

interface HeroBanner {
  btnLabel: string;
  desc: string;
  title: string;
  imgUrl: string;
  imgAlt: string;
}

function HeroBanner({ btnLabel, desc, title, imgUrl, imgAlt }: HeroBanner) {
  const navigate = useNavigate();
  return (
    <div className="relative  font-montserrat font-black">
      <div className="absolute inset-0 bg-black/30" ></div>
      <img
        className="w-full aspect-9/16 md:aspect-video object-center object-cover"
        src={imgUrl}
        alt={imgAlt}
      />
      <div className="absolute top-1/5   flex px-8 md:px-20  flex-col items-start gap-y-8">
        <h1 className="shadow-text font-montserrat text-3xl md:text-5xl font-black uppercase">
          {title}
        </h1>
        <p className="shadow-text text-base md:text-xl font-bold">{desc}</p>
        <button
          onClick={() => navigate("products")}
          className="flex cursor-pointer px-4 items-center gap-x-1 rounded-full  bg-white sm:px-6 py-2 sm:text-lg font-bold text-black capitalize shadow-[0px_2px_6px_rgba(0,0,0,0.5)]"
        >
          {btnLabel}
        </button>
      </div>
    </div>
  );
}

export default HeroBanner;
