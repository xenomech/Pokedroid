import { FigmaLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <div className="max-w-[1224px] mx-auto">
      <div className="flex justify-center flex-col md:flex-row md:justify-between items-center my-6 text-4xl ">
        <h2 className=" origin-center -rotate-6 neubrutal-borders neubrutal-borders-shadow p-4 bg-white ">
          <a href="#">Pokédroid</a>
        </h2>
        <div className="mt-12 md:mt-0 text-base flex justify-center items-center text-brand-2">
          <a
            className="flex justify-center items-center"
            href="https://www.github.com/xenomech"
          >
            <GitHubLogoIcon className="w-6 h-6" />
            <p className="pl-2">GitHub</p>
          </a>
          <a
            className="flex justify-center items-center pl-6"
            href="https://www.figma.com/@gokulsuresh"
          >
            <FigmaLogoIcon className="w-6 h-6" />
            <p className="pl-2">Figma</p>
          </a>
        </div>
      </div>
    </div>
  );
}
