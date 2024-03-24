import type { Metadata } from "next";
import Image from "next/image";
import aboutImg from "/public/images/about.png";
import projectImg from "/public/images/project.png";
import Link from "next/link";
import ProjectSvg from "../_svg/ProjectSvg";
import AboutSvg from "../_svg/AboutSvg";
import MainFooter from "../_components/MainFooter";

export const metadata: Metadata = {
  title: "Home",
};

export default function Homepage() {
  return (
    <>
      <section className="h-screen w-full">
        <h2 className="h-0 w-0 overflow-hidden indent-[-9999px] leading-[0px]">
          home
        </h2>
        <ul className="flex items-center justify-between">
          <li className="flex h-screen w-1/2 items-center justify-center">
            <Link
              href={"/project"}
              className="relative flex h-[300px] w-[300px] items-center justify-center hover:grayscale dark:grayscale-[0.9]"
            >
              <div className="animate-actRolling h-[300px] w-[300px]">
                <ProjectSvg />
              </div>
              <div className="absolute">
                <Image
                  src={projectImg}
                  alt="project이동"
                  width={120}
                  height={120}
                />
              </div>
            </Link>
          </li>
          <li className="flex h-screen w-1/2 items-center justify-center border-l border-dashed border-[#969086]">
            <Link
              href={"/about"}
              className="relative flex h-[300px] w-[300px] items-center justify-center hover:grayscale dark:grayscale-[0.9]"
            >
              <div className="animate-actRolling h-[300px] w-[300px]">
                <AboutSvg />
              </div>
              <div className="absolute">
                <Image
                  src={aboutImg}
                  alt="about이동"
                  width={120}
                  height={120}
                />
              </div>
            </Link>
          </li>
        </ul>
      </section>
      <MainFooter />
    </>
  );
}
