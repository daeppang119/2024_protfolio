import type { Metadata } from "next";
import Footer from "../_components/Footer";
import AboutMESvg from "../_svg/AboutMESvg";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="font-miracle">
      <section className="relative h-screen p-[32px]">
        <h2 className="h-0 w-0 overflow-hidden indent-[-9999px] leading-[0px]">
          about
        </h2>
        <div className="absolute left-[5vw] top-1/2 translate-y-[-50%] text-[6vw] font-light uppercase leading-snug tracking-tight text-black dark:text-white">
          <p className="translate-y-[50px] animate-actAboutShowOne opacity-0">
            a story of
          </p>
          <p className="ml-[14vw] translate-y-[50px] animate-actAboutShowTwo opacity-0">
            creative
            <em className="not-italic text-[#9b9377] dark:text-[#969086]">
              {" "}
              fornt-end
            </em>
          </p>
          <p className="translate-y-[50px] animate-actAboutShowThree opacity-0">
            <em className="not-italic text-[#9b9377] dark:text-[#969086]">
              developer
            </em>
          </p>
          <div className="mt-7 text-[3vw] tracking-normal">
            <span className="inline-block h-px w-[400px] bg-[#c3b996] dark:bg-[#beb6a9]"></span>
            <p className="inline-block pl-2 font-thin lowercase text-[#c3b996] dark:text-[#beb6a9]">
              about me
            </p>
          </div>
        </div>
      </section>
      <section className="relative bg-[#beb6a9] text-white dark:bg-[#e5e3dc] dark:text-black">
        <div className="px-[10vw] py-[13vw] text-center">
          <h4 className="z-10 text-[8vw] uppercase">who am i?</h4>
          <div className="absolute right-[24vw] top-[9vw] w-[15vw] animate-actRolling">
            <AboutMESvg />
          </div>
          <div>
            <h5 className="mb-12 text-[4.5vw] uppercase leading-none">
              hello, i&lsquo;m parkyuna
              <br />
              <span className="text-[3vw]">frontend developer</span>
            </h5>
            <div className="font-gowun leading-relaxed">
              <p>
                안녕하세요 저는 프론트엔드 개발자 박유나 입니다.
                <br /> &quot;저는 시작한 일은 포기하지 않고 반드시 끝내는 성격을
                가지고 있습니다.&quot;
              </p>
              <p className="my-10">
                뒤늦게 대학교 졸업하고 개발에 흥미가 생겨 꾸준한 학습을 통해
                실제 코드에 적용하는 노력을 기울이고
                <br /> 또한 개발뿐만 아니라 기획, 디자인, 서비스 차원에도
                생각하기 위해 노력하고 있습니다.
              </p>
              <div className="flex justify-between">
                <p className="w-[48%] text-justify">
                  캔버스 같은 흰 화면이 코드를 통해 하나씩 채워지는 것을
                  직관적으로 확인할 수 있어 프론트엔드라는 직업이 매력적으로
                  느껴졌고 원하는 것을 직접 이뤘을 때 너무나도 큰 성취감이 있고
                  흠이롭게 다가왔습니다.
                </p>
                <p className="w-[48%] text-justify">
                  아직 서툴고 부족하기에 많이 배워야하고 더 많이 노력이
                  필요하다는 것을 알고 있기에 실패에 두려워하지 않고, 항상
                  노력하며 끊임없이 공부하고 센스있는 프론트엔드 개발자로 성장할
                  수 있도록 노력하겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative dark:bg-[#e5e3dc]"></section>
      <section>
        <ul className="flex text-5xl dark:text-[#969086]">
          <li className="flex h-[250px] w-2/4 items-center justify-center text-center">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="flex h-[250px] w-2/4 items-center justify-center border-l border-[#969086] text-center">
            <Link href={"/project"}>Project</Link>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}
