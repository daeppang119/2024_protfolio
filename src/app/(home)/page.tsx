import type { Metadata } from "next";
import Image from "next/image";
import aboutImg from "/public/images/about.png";
import projectImg from "/public/images/project.png";

export const metadata: Metadata = {
  title: "Home",
};

export default function Homepage() {
  return (
    <section className="h-full w-full">
      <h2 className="h-">home</h2>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <div>
        <Image src={projectImg} alt="project이동" width={100} height={100} />
      </div>
      <div>
        <Image src={aboutImg} alt="about이동" width={100} height={100} />
      </div>
    </section>
  );
}
