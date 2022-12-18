import { Ref, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Progress from "@radix-ui/react-progress";
import { exportToPng } from "@helpers";
import Display from "@types";
import Image from "next/image";
import CloseButton from "@assets";
type Props = {
  cardData: Display;
};
const Modal = ({ cardData }: Props) => {
  const [open, setOpen] = useState(false);
  const polaroid = useRef<HTMLDivElement | any>({ current: 1 });
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="neubrutal-borders px-3 py-2 bg-yellow-500">
        Get Card
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 transition-opacity" />
        <Dialog.Content className=" bg-white rounded-md neubrutal-borders fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 max-w-7xl w-[90vw] h-[80vh] lg:h-[95vh] xl:overflow-hidden overflow-y-scroll p-6 ">
          <Dialog.Title className="text-lg md:text-4xl capitalize flex justify-between items-center">
            <h2> {cardData?.name}</h2>
            <div className="flex  justify-end items-center text-sm">
              <button
                className="md:hidden neubrutal-borders px-3 py-2 bg-yellow-500"
                onClick={() => exportToPng(polaroid, cardData?.name)}
              >
                Get Card
              </button>
              <Dialog.Close>
                <button
                  className="neubrutal-borders ml-3 p-2"
                  aria-label="Close"
                >
                  <CloseButton />
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Title>
          <div className="flex flex-col xl:flex-row justify-center items-center lg:justify-between">
            <div className="py-10 md:py-0">
              <div ref={polaroid} className="p-6">
                <div className="md:h-[520px] sm:w-[420px] sm:mx-auto  xl:m-10 neubrutal-borders neubrutal-borders-shadow  origin-center -rotate-6">
                  <div className="flex justify-center bg-[#eeedde] m-6 h-5/6 my-4 p-3 py-8 border-2  border-black">
                    {cardData?.name && (
                      <Image
                        className="h-auto"
                        src={cardData?.image}
                        height="500"
                        width="500"
                        alt={cardData?.name}
                        priority
                      />
                    )}
                  </div>
                  <p className="flex justify-center uppercase font-bold items-center pb-4 text-lg">
                    {cardData?.name}
                  </p>
                </div>
              </div>
              <div className="hidden md:flex justify-center items-center mt-4">
                <button
                  className="neubrutal-borders px-3 py-2 bg-yellow-500"
                  onClick={() => exportToPng(polaroid, cardData?.name)}
                >
                  Get Card
                </button>
              </div>
            </div>
            <div className="py-2 md:px-8 max-w-xl">
              <div className="my-4 md:w-3/4 flex justify-between items-center">
                <div className="my-2">
                  <p className="text-lg uppercase">Generation</p>
                  <p className="my-2">Generation 1</p>
                </div>
                <div className="my-2">
                  <p className="text-lg uppercase">Height</p>
                  <p className="my-2">{cardData.height / 10} m</p>
                </div>
                <div className="my-2">
                  <p className="text-lg uppercase">Weight</p>
                  <p className="my-2">{cardData.weight / 10} Kg</p>
                </div>
              </div>
              <div className="my-2">
                <p className="text-lg uppercase">Abilities</p>
                <div className="flex justify-start items-center">
                  {cardData.abilities.map((item: any, index: number) => {
                    return (
                      <span
                        key={index + 1}
                        className="px-3 py-1 m-2 ml-0 neubrutal-borders-inverse text-white"
                      >
                        <p>{item.ability.name}</p>
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="my-4">
                <p className="text-lg uppercase">Base Experience</p>
                <div className="Progress-Wrapper">
                  <Progress.Root className="ProgressRoot" value={66}>
                    <Progress.Indicator
                      className="ProgressIndicator"
                      style={{
                        transform: `translateX(-${
                          100 - cardData.base_experience
                        }%)`,
                      }}
                    />
                  </Progress.Root>
                </div>
              </div>
              <div className="my-4">
                <p className="text-lg uppercase">Moves</p>
                <div className="flex flex-wrap justify-start items-center">
                  {cardData.moves.map((item: any, index: number) => {
                    if (index < 20) {
                      return (
                        <span
                          key={index + 1}
                          className="px-3 py-1 m-2 ml-0 neubrutal-borders-inverse text-white"
                        >
                          <p>{item.move.name}</p>
                        </span>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
