import { cn } from "@/lib/util";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img, 
  imgClassName,
  spareImg,
  titleClassName,
  id }:
  {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  titleClassName?: string
  id: number;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        
        background: "linear-gradient(180deg,rgba(15, 15, 15, 1) 0%, rgba(13, 0, 48, 0.98) 50%, rgba(11, 0, 38, 1) 100%)",
      }}>
        <div className={`${id === 6} && 'flex justify-center h-full' `}>
          <div className="w-full h-full absolute">
            {img && (
              <img 
              src={img}
              alt={img}
              className={cn(imgClassName), 'object-cover, object-center'}/>
            )}
          </div>
          <div className={`abosolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
            {spareImg && (
              <img 
              src={spareImg}
              alt={spareImg}
              className={'object-cover object-center w-full'}/>
            )}
          </div>
        </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
