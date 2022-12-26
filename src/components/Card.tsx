import useFetch from "../hooks/usefetch";
import Image from "next/image";
import { Modal } from "@components";
import { PokeBall } from "@assets";

type Props = {
  item: { name: string; url: string };
};

const Card = ({ item }: Props) => {
  //TODO : Add Loading
  const [cardData, loading] = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${item.name}`
  );
  return (
    <div className="py-6 px-4 md:w-[294px] neubrutal-borders select-none">
      <div>
        {loading ? (
          <div className="border-2 py-10 px-14 pointer-events-none border-brand-2">
            <div className="flex justify-center items-center  w-[150px] h-[150px] animate-bounce">
              <PokeBall className="w-10 h-10 animate-spin" />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center border-2 py-10 px-14 pointer-events-none border-brand-2">
            {cardData?.name && (
              <Image
                className="w-[150px] h-[150px]"
                src={cardData?.image}
                height="150"
                width="150"
                alt={cardData?.name}
                priority
              />
            )}
          </div>
        )}

        <div className="flex justify-center capitalize text-base items-center pointer-events-none py-4">
          {loading ? "loading" : cardData?.name}
        </div>
        <div className="flex justify-center items-center">
          {cardData && <Modal cardData={cardData} />}
        </div>
      </div>
    </div>
  );
};

export default Card;
