import { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Progress from "@radix-ui/react-progress";
import { exportToPng } from "@helpers";
import Display from "@types";
import Image from "next/image";
import useSWR from "swr";
import axios from "axios";
import Polaroid from "./Polaroid";
import { JetBrains_Mono } from "@next/font/google";
import { Cross2Icon, DownloadIcon } from "@radix-ui/react-icons";
import { v4 as uuidv4 } from "uuid";

type Props = {
  cardData: Display;
};
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

const Modal = ({ cardData }: Props) => {
  const [open, setOpen] = useState(false);

  const polaroid = useRef<HTMLDivElement | any>({ current: 1 });
  const { data, error } = useSWR(
    cardData.name && `/api/${cardData.name}`,
    async (input: string) => {
      const res = await axios.get(input);
      return res.data;
    }
  );
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="neubrutal-borders px-3 py-2 bg-yellow-500">
        Get Card
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 transition-opacity bg-white bg-opacity-20 backdrop-blur-md" />
        <Dialog.Content
          className={`bg-white rounded-md neubrutal-borders fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 max-w-7xl w-[95vw] h-[85vh] xl:h-fit xl:overflow-hidden overflow-y-scroll p-6  ${jetBrainsMono.className}`}
        >
          <Dialog.Title className="text-lg md:text-4xl capitalize flex flex-col justify-between items-center">
            <div className="flex justify-between items-center  w-full">
              <h2> {cardData?.name}</h2>
              <div className="flex justify-end items-center text-sm">
                <div className="border-2 border-brand-2 rounded-[3px] p-2 py-1 hidden md:flex justify-center items-center">
                  <p className="text-lg pr-3">{data?.message}</p>
                  <DownloadIcon className="w-5 h-5" />
                </div>
                <Dialog.Close>
                  <button
                    className="neubrutal-borders ml-3 p-2"
                    aria-label="Close"
                  >
                    <Cross2Icon className="w-5 h-5" />
                  </button>
                </Dialog.Close>
              </div>
            </div>
            <div className="md:hidden flex items-center justify-between mt-3 w-full">
              <button
                className="neubrutal-borders px-3 py-2 bg-yellow-500"
                onClick={() => exportToPng(polaroid, cardData?.name)}
              >
                Get Card
              </button>
              <div className="border-2 border-brand-2 rounded-[3px] px-3 py-2 flex justify-center items-center">
                <p className="text-lg pr-3">{data?.message}</p>
                <DownloadIcon />
              </div>
            </div>
          </Dialog.Title>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between max-w-[2000px]">
            <div className="py-14 md:p-6">
              <Polaroid
                name={cardData?.name}
                polaroid={polaroid}
                imgUrl={cardData?.image}
              />

              <div className="hidden md:flex justify-center items-center mt-4">
                <button
                  className="neubrutal-borders px-3 py-2 bg-yellow-500"
                  onClick={() => exportToPng(polaroid, cardData?.name)}
                >
                  Get Card
                </button>
              </div>
            </div>
            <div className="pb-2 md:p-6 max-w-xl">
              <div className="mb-4 md:w-3/4 flex justify-start items-center">
                <div className="mb-2 mr-6">
                  <p className="text-lg uppercase">Height</p>
                  <p className="my-2">{cardData.height / 10} m</p>
                </div>
                <div className="mb-2">
                  <p className="text-lg uppercase">Weight</p>
                  <p className="my-2">{cardData.weight / 10} Kg</p>
                </div>
              </div>
              <div className="mb-2">
                <p className="text-lg uppercase">Abilities</p>
                <div className="flex justify-start items-center">
                  {cardData.abilities.map((item: any, index: number) => {
                    return (
                      <span
                        key={uuidv4()}
                        className="px-3 py-1 m-2 ml-0 neubrutal-borders-inverse text-white"
                      >
                        <p>{item.ability.name}</p>
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="my-4">
                <p className="text-lg uppercase mb-4">
                  Base Experience : {cardData.base_experience}
                </p>
                <div className="Progress-Wrapper">
                  <Progress.Root className="ProgressRoot" value={66}>
                    <Progress.Indicator
                      className="ProgressIndicator"
                      style={{
                        transform: `translateX(-${
                          100 - (cardData.base_experience / 500) * 100
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
                          key={uuidv4()}
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
