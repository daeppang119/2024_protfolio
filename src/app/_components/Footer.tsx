import Link from "next/link";

import GithubSvg from "../_svg/GithubSvg";
import VelogSvg from "../_svg/VelogSvg";

export default function Footer() {
  return (
    <div className="bg-[#222] text-xs">
      <div className="flex flex-wrap  items-center justify-between border-t border-gray-800 px-[32px] py-[48px] text-[#969086]">
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
              <p>e-mail : yundutls@gmail.com</p>
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
            <li className="pl-3.5">
              <Link href={`https://velog.io/@yundutls/posts`}>
                <VelogSvg />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}