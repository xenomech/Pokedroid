import { v4 as uuidv4 } from "uuid";

type Props = {
  data: number | string;
};

export default function CountMonitor({ data }: Props) {
  return (
    <div className="mt-20 md:mt-28 select-none pointer-events-none">
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center gap-6 items-center max-w-[284px] mx-auto">
          {data
            ?.toString()
            ?.split("")
            ?.map((item: string) => {
              return (
                <p
                  key={uuidv4()}
                  className="text-xl py-2 px-4 w-11 h-11 md:py-6 md:text-3xl sm:w-16 sm:h-16 text-center flex justify-center items-center neubrutal-borders"
                >
                  {item}
                </p>
              );
            })}
        </div>
        <p className="md:mt-10 md:mb-3 mt-4 text-xl md:text-3xl">
          Pokémons Downloaded
        </p>
      </div>
    </div>
  );
}
