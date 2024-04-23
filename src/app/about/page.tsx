import type { Metadata } from "next";
import Footer from "../_components/Footer";
import AboutMESvg from "../_svg/AboutMESvg";
import Link from "next/link";
import Header from "../_components/Header";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div>
      <Header />
      <div className="font-miracle">
        <section className="relative h-screen p-[32px]">
          <h2 className="h-0 w-0 overflow-hidden indent-[-9999px] leading-[0px]">
            about
          </h2>
          <div className="absolute left-[5vw] top-1/2 translate-y-[-50%] text-[6vw] font-light uppercase leading-snug tracking-tight">
            <p className="translate-y-[50px] animate-actAboutShowOne opacity-0">
              a story of
            </p>
            <p className="ml-[14vw] translate-y-[50px] animate-actAboutShowTwo opacity-0">
              creative
              <em className="not-italic text-[#c3c1bc]"> fornt-end</em>
            </p>
            <p className="translate-y-[50px] animate-actAboutShowThree opacity-0">
              <em className="not-italic text-[#c3c1bc]">developer</em>
            </p>
            <div className="mt-7 text-[3vw] tracking-normal">
              <span className="inline-block h-px w-[400px] bg-[#c3c1bc]"></span>
              <p className="inline-block pl-2 font-thin lowercase text-[#c3c1bc] ">
                about me
              </p>
            </div>
          </div>
        </section>
        <section className="relative bg-[#cccac6] text-neutral-500">
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
                  <br /> &quot;강한 성장 욕구를 동력 삼아 어려운 상황에서도
                  끊임없이 학습하고 익혀 나아가고 있습니다.&quot;
                </p>
                <div className="my-10 flex justify-between">
                  <p className="w-[48%] text-justify">
                    UI/UX 디자이너 또는 퍼블리셔로 일을 해 온 경험을 통해 커리어
                    개발에 대한 욕구와 새로운 분야에 대한 호기심을 바탕으로
                    커리어 전환을 지속적으로 시도해 오고 있습니다.
                  </p>
                  <p className="w-[48%] text-justify">
                    서비스 기획에 관하여 의사소통을 해 본 경험을 통해 서비스
                    만드는 일은 다양한 사람들의 의견을 취합해 가며 더 나은
                    결과물을 만들어 나가는 과정이라는 점을 이해하게 되었습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <ul className="flex text-5xl">
            <li className="flex h-[250px] w-2/4 items-center justify-center text-center">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="flex h-[250px] w-2/4 items-center justify-center border-l border-b-color text-center">
              <Link href={"/project"}>Project</Link>
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}
