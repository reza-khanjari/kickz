interface SkeletonProps {
  variant: string;
}

function Skeleton({ variant }: SkeletonProps) {
  let content;
  if (variant === "card")
    content = (
      <div className="h-100 w-full rounded-2xl bg-[#fafafa] shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
        <div className="animate-background-pulse h-1/2 w-full bg-[#ddd]"></div>
        <div className="flex flex-col gap-y-6 p-6">
          <div className="animate-background-pulse h-8 w-7/10 rounded-sm bg-[#ddd]"></div>
          <div className="animate-background-pulse h-4 w-2/10 rounded-sm bg-[#ddd]"></div>
          <div className="animate-background-pulse h-8 w-1/2 rounded-sm bg-[#ddd]"></div>
        </div>
      </div>
    );
  else if (variant === "productPage")
    content = (
      <div className="flex flex-col md:flex-row  w-full h-[80dvh] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.15)] overflow-hidden bg-[#fafafa]">
        <div className="animate-background-pulse  h-1/2 md:h-full md:w-1/2 bg-[#ddd]"></div>
        <div className="flex w-full  bg-white md:w-1/2 flex-col gap-y-6 py-16 px-6">
          <div className="animate-background-pulse h-8 w-7/10 rounded-sm bg-[#ddd]"></div>
          <div className="animate-background-pulse  h-4 w-2/10 rounded-sm bg-[#ddd]"></div>
          <div className="animate-background-pulse h-8 w-1/2 rounded-sm bg-[#ddd]"></div>
          <div className="animate-background-pulse  h-8 w-7/10 rounded-sm bg-[#ddd]"></div>
          <div className="animate-background-pulse h-4 w-2/10 rounded-sm bg-[#ddd]"></div>
          <div className="animate-background-pulse  h-8 w-1/2 rounded-sm bg-[#ddd]"></div>
     
        </div>
      </div>
    );
  else if (variant === "infoBox")
    content = (
      <div className="grid grid-cols-2 gap-2 grid-rows-2 py-4 px-8 w-full h-24 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.15)] overflow-hidden bg-[#fafafa]">

          <div className="animate-background-pulse h-6 w-full rounded-sm bg-[#ddd]"></div>
          <div className="animate-background-pulse self-center justify-self-end row-span-2 h-10 w-10 rounded-lg bg-[#ddd]"></div>
          <div className="animate-background-pulse h-4 w-7/10 rounded-sm bg-[#ddd]"></div>
     
     
        </div>
  
    );

  return content;
}

export default Skeleton;
