import Image from "next/image";
import { Ref } from "react";

type Props = {
  name: string;
  imgUrl: string;
  polaroid: Ref<HTMLDivElement> | any;
};

export default function Polaroid({ name, imgUrl, polaroid }: Props) {
  return (
    <div ref={polaroid} className="md:p-6 pointer-events-none select-none">
      <div className="py-6 px-4 neubrutal-borders neubrutal-borders-shadow origin-center -rotate-6">
        <div className="flex py-14 px-10 bg-[#eeedde] border-2  border-brand-2 ">
          {name && (
            <div className="relative w-[150px] h-[150px] md:w-[280px] md:h-[280px] flex justify-center items-center object-contain">
              <Image
                className="md:max-w-[280px] md:max-h-[280px]"
                src={imgUrl}
                alt={name}
                priority
                fill
              />
            </div>
          )}
        </div>
        <p className="flex justify-center uppercase font-bold items-center pt-6 text-lg">
          {name}
        </p>
      </div>
    </div>
  );
}
