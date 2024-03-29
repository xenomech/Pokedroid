import {
  FigmaLogoIcon,
  GitHubLogoIcon,
  ReaderIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="max-w-[1224px] my-20 md:my-28 mx-auto px-2 md:px-[104px] gap-10 flex justify-between items-center flex-col md:flex-row neubrutal-borders neubrutal-borders-shadow p-6 bg-white ">
      <div className="flex justify-start items-start flex-col">
        <h2 className="max-w-max origin-center -rotate-6 neubrutal-borders neubrutal-borders-shadow p-4 bg-white ">
          <a className="text-4xl" href="#">
            Pokédroid
          </a>
        </h2>
        <div className="mt-8 hidden md:block">
          <p>
            Made With ❤️ by&nbsp;
            <a
              className="hover:text-brand-1 transition-all duration-100"
              href="https://www.github.com/xenomech"
              target="_blank"
              rel="noreferrer"
            >
              Gokul Suresh
            </a>
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-6 items-start">
        <div className="">
          <a
            className="flex justify-start gap-2 my-4 md:mb-6 items-center"
            href="https://www.justgokul.dev"
          >
            <ReaderIcon className="w-6 h-6" />
            <p>Blog</p>
          </a>
          <a
            className="flex justify-start gap-2 my-4 md:mb-6 items-center"
            href="https://twitter.com/justgokulsuresh"
          >
            <TwitterLogoIcon className="w-6 h-6" />
            Twitter
          </a>
        </div>
        <div>
          <a
            className="flex justify-start gap-2 my-4 md:mb-6 items-center"
            href="https://www.github.com/xenomech"
          >
            <GitHubLogoIcon className="w-6 h-6" />
            <p>GitHub</p>
          </a>
          <a
            className="flex justify-start gap-2 items-center"
            href="https://www.figma.com/@gokulsuresh"
          >
            <FigmaLogoIcon className="w-6 h-6" />
            Figma
          </a>
        </div>
      </div>
      <div className=" md:hidden">
        <p>
          Made With ❤️ by&nbsp;
          <a
            className="hover:text-brand-1 transition-all duration-100"
            href="https://www.github.com/xenomech"
            target="_blank"
            rel="noreferrer"
          >
            Gokul Suresh
          </a>
        </p>
      </div>
    </div>
  );
}
