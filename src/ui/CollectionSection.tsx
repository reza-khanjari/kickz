import Heading from "./Heading";
import Slider from "./Slider";

type Props = {
  title: string;
  images: { src: string; alt?: string }[];
};

function CollectionSection({ title, images }: Props) {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-21  py-12 text-black">
      <Heading className="font-montserrat mb-6 font-extrabold uppercase" level="h1">
        {title}
      </Heading>
      <Slider images={images} />
    </div>
  );
}

export default CollectionSection;
