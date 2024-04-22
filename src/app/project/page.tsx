import type { Metadata } from "next";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import ProjectTitle from "./_componets/ProjectTitle";
import ProjectContents from "./_componets/ProjectContents";

export const metadata: Metadata = {
  title: "Project",
};

export default function Project() {
  return (
    <div>
      <Header />
      <h2 className="h-0 w-0 overflow-hidden indent-[-9999px] leading-[0px]">
        Project
      </h2>
      <ProjectTitle />
      <ProjectContents />
      <Footer />
    </div>
  );
}
