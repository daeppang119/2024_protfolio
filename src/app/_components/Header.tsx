import Link from "next/link";
import DarkModeBtn from "./DarkModeBtn";

export default function Header() {
  return (
    <header
      className={`absolute z-10 flex w-full translate-y-[-65px] animate-actHeaderFadeIn items-center justify-between border-b border-[#969086] bg-white px-[32px] py-[16px] opacity-0 dark:bg-black`}
    >
      <div className="text-2xl uppercase">
        <Link href={"/"} className="text-black dark:text-white">
          yuna.
        </Link>
      </div>
      <div>
        <DarkModeBtn />
      </div>
    </header>
  );
}
