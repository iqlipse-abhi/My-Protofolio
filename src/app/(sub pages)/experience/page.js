import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ExperienceList from "@/components/Experience";
import { ExperienceData } from "../../data";
import RenderModel from "@/components/RenderModel";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export const metadata = {
  title: "Experience",
};

export default function Home() {
  return (
    <>
      {/* <div>
        <h1 className="text-yellow-600 bottom-20 font-bold text-4xl">
          Experience
        </h1>
      </div> */}
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      {/* <h1 className="text-yellow-600 font-bold text-4xl">Experience</h1> */}
      <ExperienceList experience={ExperienceData} />

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
