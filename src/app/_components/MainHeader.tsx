import Link from "next/link";
import ModeBtn from "./DarkTheme";
import DarkTheme from "./DarkTheme";

export default function MainHeader() {
  return (
    <header
      className={`border-color-line bg-color-background absolute z-10 flex h-12 w-full translate-y-[-65px] animate-actHeaderFadeIn items-center justify-between border-b px-8 opacity-0`}
    >
      <h1 className="text-color-primary-accent text-2xl uppercase">
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
