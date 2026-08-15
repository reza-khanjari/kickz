import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Slider({ images }: { images: { src: string }[] }) {
  return (
    <Swiper
      spaceBetween={0}
      grabCursor={true}
      slidesPerView={1.2}
      centeredSlides={false}
      breakpoints={{
        640: {
          slidesPerView: 2.2,
        },
        1280:{
          slidesPerView:3.5,
        }
      }}
    >
      {images.map((item,i) => (
        <SwiperSlide  >
          <div className="flex-center w-ful h-full p-3 sm:p-4 xl:p-6">
            <img
              className="rounded-2xl  shadow-[0px_4px_8px_rgba(0,0,0,0.5)]"
              src={item.src}
              alt={`image slide 0${i}`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
