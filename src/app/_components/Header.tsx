import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header
      className={`animate-actHeaderFadeIn absolute z-10 flex w-full translate-y-[-65px] items-center justify-between border-b border-[#969086] bg-white px-[32px] py-[16px] opacity-0 dark:bg-black`}
    >
      <div className="text-2xl uppercase">
        <Link href={"/"} className="text-black dark:text-white">
          yuna.
        </Link>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}
