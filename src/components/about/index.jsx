import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+{" "}
            <sub className="font-semibold text-base">Companies worked with</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=iqlipse-abhi&&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Iqlipse-abhi"
            loading="lazy"
          />
          {/* [![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=donut-vertical)](https://github.com/anuraghazra/github-readme-stats) */}
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <Link
            href="https://github.com/iqlipse-abhi"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api?username=iqlipse-abhi&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
              alt="iqlipse-abhi"
              loading="lazy"
            />
          </Link>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=react,js,html,css,mui,git,github,c,cpp,java,linux,mongodb,mysql,nextjs,nodejs,npm,redux,figma,threejs,vercel,vscode,atom`}
            alt="iqlipse-abhi"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=iqlipse-abhi&theme=dark&type=png&background=EB545400&ring=FFEF20&border=FFF60C00"
            alt="iqlipse-abhi streak"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=iqlipse-abhi&repo=Code-Buddy&hide_border=true&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&text_bold=false&description_lines_count=2&icon_color=FEFE5B"
            alt="iqlipse-abhi repo"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
