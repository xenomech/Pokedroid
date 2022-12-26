import React, { useMemo, useState, useEffect, useRef } from "react";
import { GetServerSideProps } from "next";
import { Card, Container, CountMonitor, Footer, Navbar } from "@components";
import usePageNumber from "@hooks/usePageNumber";
import useWidth from "@hooks/useWidth";
import axios from "axios";
import useSWR from "swr";
import debounce from "lodash.debounce";
import { v4 as uuidv4 } from "uuid";

type allPokemonType = {
  name: string;
  url: string;
};
type Props = {
  allPokemons: [allPokemonType];
};
const Home = ({ allPokemons }: Props) => {
  const [pokemonData, setPokemonData] = useState<allPokemonType[]>(allPokemons);
  const lottieRef = useRef<HTMLDivElement | any>(null);

  const { data, error } = useSWR(`/api/count`, async (input: string) => {
    const res = await axios.get(input);
    return res.data;
  });
  const width = useWidth();
  const [pageNumber, setPageNumber, numberOfPages, startIndex, lastIndex] =
    usePageNumber(pokemonData.length, width);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const data: allPokemonType[] = allPokemons.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    setPokemonData(data);
    setPageNumber(1);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleQueryChange, 300);
  }, []);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <Container>
      <div className="mx-4">
        <Navbar />
        <div className="max-w-[1250px] mt-8 md:my-[115px] mx-auto lg:flex-row flex flex-col-reverse lg:justify-between items-center">
          <div className="md:max-w-[496px] text-center lg:text-left my-10 mx-auto">
            <h1 className="flex justify-center lg:justify-start flex-wrap items-center">
              <span className="text-4xl mb-6">Get your</span>
              <span className="text-4xl mb-6">&nbsp;Pokédroid!</span>
            </h1>
            <p className="text-base mb-6">
              Search for your favourite Pokémon and export a high quality
              polaroid of it.
            </p>
            <button className="px-4 py-[10px] neubrutal-borders bg-brand-1">
              <a href="#search">Get Card</a>
            </button>
          </div>
          <div className="w-80 h-80 md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[440px] mx-auto flex justify-center items-center">
            <lottie-player
              ref={lottieRef}
              id="cardsLottie"
              autoplay
              mode="normal"
              src="/cards.json"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
        {/* search input */}
        <div
          className="max-w-5xl mx-auto flex justify-center align-middle "
          id="search"
        >
          <input
            className="neubrutal-borders mt-8 p-2 w-full"
            placeholder="Search for your favorite Pokémons here!"
            onChange={debouncedResults}
          />
        </div>

        <div className="max-w-[1250px] max-h-full mx-4 lg:mx-auto">
          <div className="md:flex lg:grid-cols-3 xl:grid-cols-4 flex justify-center items-center flex-wrap gap-6 my-10">
            {pokemonData.slice(startIndex, lastIndex).map((item, index) => {
              return <Card key={uuidv4()} item={item} />;
            })}
          </div>

          {/* pagination */}
          <div className="flex justify-center align-middle">
            <button
              className="p-2 px-3 mx-2 text-sm neubrutal-borders "
              onClick={() => {
                if (pageNumber > 1) {
                  setPageNumber(pageNumber - 1);
                }
              }}
            >
              Prev
            </button>
            <p className="text-sm text-center p-2 mx-2">
              Page {pageNumber} of {numberOfPages}
            </p>
            <button
              className="p-2 px-3 mx-2 text-sm neubrutal-borders "
              onClick={() => {
                if (pageNumber < numberOfPages) {
                  setPageNumber(pageNumber + 1);
                }
              }}
            >
              <a className="md:hidden" href="#search">
                Next
              </a>
              <p className="hidden md:block">Next</p>
            </button>
          </div>
        </div>
        <CountMonitor data={data?.message} />
        <Footer />
      </div>
    </Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<{
  allPokemons: allPokemonType;
}> = async (context) => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species?limit=100000&offset=0"
  );
  const allPokemons = await res.json();
  return {
    props: {
      allPokemons: allPokemons.results,
    },
  };
};
