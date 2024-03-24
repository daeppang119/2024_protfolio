import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <section className="h-screen p-[32px]">
        <h2 className="h-0 w-0 overflow-hidden indent-[-9999px] leading-[0px]">
          about
        </h2>
        <div className="absolute left-[5vw] top-1/2 translate-y-[-50%] text-[7vw] uppercase leading-snug text-[#6f674a] dark:text-white">
          <p>a story of</p>
          <p>creative fornt-end</p>
          <p>developer</p>
          <div className="mt-7 text-[3vw]">
            <span className="inline-block h-px w-[400px] dark:bg-white"></span>
            <p className="inline-block pl-2 font-thin lowercase dark:text-white">
              about me
            </p>
          </div>
        </div>
      </section>
      <section className="h-screen p-[32px]"></section>
      <section className="h-screen p-[32px]"></section>
    </>
  );
}
