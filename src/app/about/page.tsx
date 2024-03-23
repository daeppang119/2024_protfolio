import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div>
      <h2 className="h-0 w-0 overflow-hidden indent-[-9999px] leading-[0px]">
        about
      </h2>
    </div>
  );
}
