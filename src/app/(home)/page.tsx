import type { Metadata } from "next";
import Image from "next/image";
import aboutImg from "/public/images/about.png";
import project from "/public/images/project.png";
import Link from "next/link";
import ProjectSvg from "../_svg/ProjectSvg";
import AboutSvg from "../_svg/AboutSvg";
import MainFooter from "../_components/MainFooter";
import MainHeader from "../_components/MainHeader";

export const metadata: Metadata = {
  title: "Home",
};

export default function Homepage() {
  return (
    <>
      <MainHeader />
      <section className="h-screen w-full">
        <h2 className="h-0 w-0 overflow-hidden indent-[-9999px] leading-[0px]">
          home
        </h2>
        <ul className="flex items-center justify-between">
          <li className="flex h-screen w-1/2 scale-50 animate-actPopShow items-center justify-center opacity-0">
            <Link
              href={"/project"}
              className="relative flex h-[300px] w-[300px] items-center justify-center grayscale duration-500 hover:scale-[1.15] hover:grayscale-0"
            >
              <div className="animate-actRolling">
                <ProjectSvg />
              </div>
              <div className="absolute flex justify-center">
                <Image
                  className="scale-75"
                  src={project}
                  width={0}
                  height={0}
                  alt="project이동"
                  priority
                />
              </div>
            </Link>
          </li>
          <li className="border-color-line flex h-screen w-1/2 scale-50 animate-actPopShow items-center justify-center border-l border-dashed opacity-0">
            <Link
              href={"/about"}
              className="relative flex h-[300px] w-[300px] items-center justify-center grayscale duration-500 hover:scale-[1.15] hover:grayscale-0"
            >
              <div className="animate-actRolling">
                <AboutSvg />
              </div>
              <div className="absolute flex justify-center">
                <Image
                  className="scale-[0.45] "
                  src={aboutImg}
                  alt="about이동"
                  width={0}
                  height={0}
                  priority
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
