import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[58%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-yellow-300 text-4xl xs:text-5xl sm:text-6xl  lg:text-7xl text-accent">
            Abhishek Yadav
          </h1>
          <p className="font-bold text-white-600 text-foreground text-2xl">
            &lt; Software Developer &gt;
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 flex flex-col items-center text-center left-1/2 -translate-x-1/2">
        <a href="#next-section" className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-accent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
        <p className="text-foreground">Scroll Down</p>
      </div>

      <AboutDetails />
    </>
  );
}
