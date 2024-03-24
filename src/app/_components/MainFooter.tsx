import Link from "next/link";
import React from "react";

export default function MainFooter() {
  return (
    <footer className="animate-actFooterFadeIn absolute bottom-0 z-10 w-full translate-y-[125px] bg-white text-xs dark:bg-black">
      <div className="flex flex-wrap  items-center justify-between border-t border-[#969086] px-[32px] py-[16px] text-[#969086]">
        <div>
          <p className="uppercase">Next.js</p>
        </div>
        <div>
          <ul className="flex flex-wrap">
            <li>
              <Link href={`https://github.com/daeppang119`}>Github</Link>
            </li>
            <li className="pl-4">
              <Link href={`https://velog.io/@yundutls/posts`}>Velog</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
