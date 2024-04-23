import Link from "next/link";
import React from "react";
import Image from "next/image";
import camperspotImg from "../../../../public/images/camperspot.png";
import protofolioImg from "../../../../public/images/protfolio.png";

export default function ProjectContents() {
  return (
    <>
      <section className="bg-[#cccac6] p-24">
        <h3 className="h-0 w-0 overflow-hidden indent-[-9999px] leading-[0px]">
          첫번째 프로젝트 캠퍼 스팟
        </h3>
        <section className="relative mx-auto my-0 flex max-w-screen-lg items-end justify-between py-12">
          <p className="absolute left-0 top-0 font-Merriweather text-[650px] leading-none tracking-[-0.2em] text-[#c3c1bc]">
            01
          </p>
          <div className="z-10 w-2/5">
            <p className="border-l-2 border-[#a29e95] pl-2 text-justify text-sm leading-6 text-neutral-500">
              캠핑을 즐기는 캠퍼들을 위한 캠핑장 예약, 운영, 커뮤니티
              서비스입니다. Next.js, TypeScript, React-Query, Supabase 등의
              기술을 활용하여 구현되었으며, 5명의 FE 개발자와 1명의 디자이너가
              팀을 이루어 진행한 프로젝트입니다.
            </p>
          </div>
          <div className="z-10 mt-24 flex w-1/2 flex-col justify-center">
            <h4 className="mb-7 text-6xl uppercase leading-tight text-black">
              the first protfolio
            </h4>
            <ul className="flex items-center text-sm uppercase text-black">
              <li className="relative">
                <span className="absolute -top-1/2 left-0 -z-10 h-8 w-8 translate-y-[10%] rounded-full bg-neutral-200"></span>
                <Link
                  href={"https://camperspot.vercel.app/"}
                  target="blank"
                  className="ml-4"
                >
                  view site
                </Link>
              </li>
              <li className="relative ml-14">
                <span className="absolute -top-1/2 left-0 -z-10 h-8 w-8 translate-y-[10%] rounded-full bg-neutral-200"></span>
                <Link
                  href={"https://github.com/h0ngwon/Camperspot"}
                  target="blank"
                  className="ml-4"
                >
                  view code
                </Link>
              </li>
            </ul>
            <div className="mt-12">
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
      </section>
      <section className="bg-[#cccac6] p-24">
        <h3 className="h-0 w-0 overflow-hidden indent-[-9999px] leading-[0px]">
          두번째 프로젝트 캠퍼 스팟
        </h3>
        <section className="relative mx-auto my-0 flex max-w-screen-lg items-end justify-between py-12">
          <p className="absolute right-28 top-0 font-Merriweather text-[650px] leading-none tracking-[-0.2em] text-[#c3c1bc]">
            02
          </p>
          <div className="z-10 mt-24 flex w-1/2 flex-col justify-center">
            <h4 className="mb-7 text-right text-6xl uppercase leading-tight text-black">
              the second protfolio
            </h4>
            <ul className="flex items-center justify-end text-sm uppercase text-black">
              <li className="relative">
                <span className="absolute -top-1/2 left-0 -z-10 h-8 w-8 translate-y-[10%] rounded-full bg-neutral-200"></span>
                <Link
                  href={"https://2024-protfolio.vercel.app/"}
                  target="blank"
                  className="ml-4"
                >
                  view site
                </Link>
              </li>
              <li className="relative ml-14">
                <span className="absolute -top-1/2 left-0 -z-10 h-8 w-8 translate-y-[10%] rounded-full bg-neutral-200"></span>
                <Link
                  href={"https://github.com/daeppang119/2024_protfolio"}
                  target="blank"
                  className="before: ml-4"
                >
                  view code
                </Link>
              </li>
            </ul>
            <div className="mt-12">
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
              Next.js를 활용하여 구현한 포트폴리오 웹사이트입니다. 직접 기획하고
              구현한 이 웹사이트는 현재 React, Next.js 등의 프로젝트와 저에 대한
              소개 페이지로 구성되어 있습니다.
            </p>
          </div>
        </section>
      </section>
      <section>
        <ul className="flex text-5xl">
          <li className="flex h-[250px] w-2/4 items-center justify-center text-center">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="flex h-[250px] w-2/4 items-center justify-center border-l border-b-color text-center">
            <Link href={"/about"}>About Me</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
