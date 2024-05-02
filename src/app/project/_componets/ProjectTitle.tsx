import React from "react";

export default function ProjectTitle() {
  return (
    <section className="relative h-screen select-none p-[32px]">
      <h2 className="h-0 w-0 overflow-hidden indent-[-9999px] leading-[0px]">
        projcet
      </h2>
      <div className="absolute left-[5vw] top-1/2 translate-y-[-50%] text-[6vw] font-light uppercase leading-snug tracking-tight">
        <p className="translate-y-[50px] animate-actAboutShowOne opacity-0">
          fornt-end
        </p>
        <p className="ml-[14vw] translate-y-[50px] animate-actAboutShowTwo opacity-0">
          projcet
          <em className="not-italic text-[#c3c1bc]"> experience</em>
        </p>
        <div className="mt-7 text-[3vw] tracking-normal">
          <span className="inline-block h-px w-[400px] bg-[#c3c1bc]"></span>
          <p className="inline-block pl-2 font-thin lowercase text-[#c3c1bc]">
            projcet
          </p>
        </div>
      </div>
    </section>
  );
}
