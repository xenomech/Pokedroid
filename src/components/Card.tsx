import useFetch from "../hooks/usefetch";
import Image from "next/image";
import { Modal } from "@components";
type Props = {
  item: { name: string; url: string };
};

const Card = ({ item }: Props) => {
  const [cardData, loading] = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${item.name}`
  );
  return (
    <div className="p-3 w-60 h-72 md:w-auto neubrutal-borders">
      {loading ? (
        <div className="p-3 py-8">
          <Image
            className="h-20 w-auto animate-bounce mx-auto"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
            height="300"
            width="300"
            alt="PokeBall"
            priority
          />
          <p className="text-sm text-center">Loading...</p>
        </div>
      ) : (
        <>
          <div className="flex justify-center align-middle p-3 py-8 border-2  border-black">
            {cardData?.name && (
              <Image
                className="h-20 w-auto"
                src={cardData?.image}
                height="300"
                width="300"
                alt={cardData?.name}
                priority
              />
            )}
          </div>
          <div className="flex justify-center capitalize align-middle py-4">
            {cardData?.name}
          </div>
        </>
      )}
      <div className="flex justify-center align-middle">
        <Modal cardData={cardData} />
      </div>
    </div>
  );
};

export default Card;
