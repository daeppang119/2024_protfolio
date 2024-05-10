import Link from "next/link";
import DarkTheme from "./DarkTheme";

export default function MainHeader() {
  return (
    <header
      className={`font-Abel bg-color-primary-bg absolute z-10 flex h-12 w-full translate-y-[-65px] animate-actHeaderFadeIn items-center justify-between border-b border-color-line px-8 opacity-0`}
    >
      <h1 className="text-2xl uppercase text-color-primary-accent">
        <Link className="text-Jacquard" href={"/"} replace>
          yuna.
        </Link>
      </h1>
      <ul className="absolute left-1/2 top-1/2 flex -translate-y-1/2 translate-x-[-42%] gap-6 text-xs">
        <li>
          <Link href={"tel:010-9348-9119"}>+82 9348 9119</Link>
        </li>
        <li>
          <Link href={"mailto:yundutls@gmail.com"}>yundutls@gmail.com</Link>
        </li>
      </ul>
      <DarkTheme />
    </header>
  );
}
