import Link from "next/link";
import React from "react";
import Image from "next/image";
import camperspotImg from "../../../../public/images/camperspot.png";
import protofolioImg from "../../../../public/images/protfolio.png";

export default function ProjectContents() {
  return (
    <>
      <div className="bg-[#cccac6] p-24">
        <h3 className="h-0 w-0 overflow-hidden indent-[-9999px] leading-[0px]">
          첫번째 프로젝트 캠퍼 스팟
        </h3>
        <section className="relative mx-auto my-0 flex max-w-screen-lg items-end justify-between py-12">
          <p className="font-Merriweather absolute left-0 top-0 text-[650px] leading-none tracking-[-0.2em] text-[#c3c1bc]">
            01
          </p>
          <div className="z-10 w-2/5">
            <p className="border-l-2 border-[#a29e95] pl-2 text-justify text-sm leading-6 text-neutral-500">
              캠핑 열풍 속에서 캠퍼들에게 최적화된 편리한 경험을 제공하기 위한
              플랫폼을 개발하는 것입니다. 이 플랫폼은 캠핑장 예약, 운영, 캠핑
              커뮤니티를 통합하여 사용자들에게 새로운 캠핑 체험을 제공할
              것입니다.
            </p>
          </div>
          <div className="z-10 mt-24 flex w-1/2 flex-col justify-center">
            <h4 className="mb-7 text-6xl uppercase leading-tight text-black">
              the first protfolio
            </h4>

            <ul className="flex items-center text-sm uppercase text-black">
              <li className="relative">
                <span className="absolute -top-1/4 left-0 -z-10 h-8 w-8 rounded-full bg-neutral-200"></span>
                <Link
                  href={"https://camperspot.vercel.app/"}
                  target="blank"
                  className="ml-4"
                >
                  view site
                </Link>
              </li>
              <li className="relative ml-14">
                <span className="absolute -top-1/4 left-0 -z-10 h-8 w-8 rounded-full bg-neutral-200"></span>
                <Link
                  href={"https://github.com/h0ngwon/Camperspot"}
                  target="blank"
                  className="ml-4"
                >
                  view code
                </Link>
              </li>
            </ul>
            <div>
              <Image
                className="scale-[1.2] "
                src={camperspotImg}
                alt="캠퍼 스팟 이미지"
                width={0}
                height={0}
                priority
              />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[#cccac6] p-24">
        <h3 className="h-0 w-0 overflow-hidden indent-[-9999px] leading-[0px]">
          두번째 프로젝트 캠퍼 스팟
        </h3>
        <section className="relative mx-auto my-0 flex max-w-screen-lg items-end justify-between py-12">
          <p className="font-Merriweather absolute right-0 top-0 text-[650px] leading-none tracking-[-0.2em] text-[#c3c1bc]">
            02
          </p>
          <div className="z-10 mt-24 flex w-1/2 flex-col justify-center">
            <h4 className="mb-7 text-6xl uppercase leading-tight text-black">
              the second protfolio
            </h4>

            <ul className="flex items-center text-sm uppercase text-black">
              <li className="relative">
                <span className="absolute -top-1/4 left-0 -z-10 h-8 w-8 rounded-full bg-neutral-200"></span>
                <Link
                  href={"https://camperspot.vercel.app/"}
                  target="blank"
                  className="ml-4"
                >
                  view site
                </Link>
              </li>
              <li className="relative ml-14">
                <span className="absolute -top-1/4 left-0 -z-10 h-8 w-8 rounded-full bg-neutral-200"></span>
                <Link
                  href={"https://github.com/h0ngwon/Camperspot"}
                  target="blank"
                  className="ml-4"
                >
                  view code
                </Link>
              </li>
            </ul>
            <div>
              <Image
                className="scale-[1.2] "
                src={protofolioImg}
                alt="포트폴리오 페이지"
                width={0}
                height={0}
                priority
              />
            </div>
          </div>
          <div className="z-10 w-2/5">
            <p className="border-l-2 border-[#a29e95] pl-2 text-justify text-sm leading-6 text-neutral-500">
              캠핑 열풍 속에서 캠퍼들에게 최적화된 편리한 경험을 제공하기 위한
              플랫폼을 개발하는 것입니다. 이 플랫폼은 캠핑장 예약, 운영, 캠핑
              커뮤니티를 통합하여 사용자들에게 새로운 캠핑 체험을 제공할
              것입니다.
            </p>
          </div>
        </section>
      </div>
      <section>
        <ul className="flex text-5xl">
          <li className="flex h-[250px] w-2/4 items-center justify-center text-center">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="border-b-color flex h-[250px] w-2/4 items-center justify-center border-l text-center">
            <Link href={"/about"}>About Me</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
