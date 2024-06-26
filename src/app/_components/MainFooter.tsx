import Link from "next/link";

export default function MainFooter() {
  return (
    <footer className="font-Abel absolute bottom-0 z-10 w-full translate-y-[125px] animate-actFooterFadeIn text-xs">
      <div className="flex flex-wrap items-center justify-between px-8 py-4">
        <div>
          <p className="uppercase">Next.js</p>
        </div>
        <ul className="absolute left-1/2 top-1/2 flex -translate-y-1/2 translate-x-[-46%] select-none gap-6 text-xs">
          <li>Fornt-end Developer</li>
          <li>ⓒ Yuna’s Portfolio 2024</li>
        </ul>
        <div>
          <ul className="relative flex flex-wrap gap-6">
            <li className="after:relative after:-right-3 after:content-['/']">
              <Link href={`https://github.com/daeppang119`}>Github</Link>
            </li>
            <li>
              <Link href={`https://velog.io/@yundutls/posts`}>Velog</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
