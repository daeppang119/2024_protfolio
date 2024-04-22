import React from "react";

export default function ProjectTitle() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div>
        <div className="mb-8">
          <p className="animate-actProjcetFadeInOne translate-y-1/2 text-7xl opacity-0">
            프로젝트.페이지인데..
          </p>
          <p className="animate-actProjcetFadeInTwo translate-y-1/2 pt-4 text-7xl opacity-0">
            멘트 추천좀..
          </p>
        </div>
        <div className="animate-actProjcetFadeInThree flex translate-y-3/4 items-center justify-center opacity-0">
          <p className="">Scroll down</p>
        </div>
      </div>
    </section>
  );
}
