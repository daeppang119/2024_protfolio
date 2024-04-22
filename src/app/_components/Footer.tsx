import Link from "next/link";

import GithubSvg from "../_svg/GithubSvg";
import VelogSvg from "../_svg/VelogSvg";

export default function Footer() {
  return (
    <footer className="z-10 w-full text-xs">
      <div className="border-b-color flex flex-wrap items-center justify-between border-t px-8 py-12">
        <div>
          <ul className="uppercase">
            <li>
              <p>front-end developer</p>
            </li>
            <li className="pt-2">
              <p>&copy; yuna&lsquo;s portfolio 2024</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="uppercase">
            <li>
              <p>phone : 010.9348.9119</p>
            </li>
            <li className="pt-2">
              <p>
                e-mail : <span className="lowercase">yundutls@gmail.com</span>
              </p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-wrap">
            <li>
              <Link href={`https://github.com/daeppang119`}>
                <GithubSvg />
              </Link>
            </li>
            <li className="pl-4">
              <Link href={`https://velog.io/@yundutls/posts`}>
                <VelogSvg />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
