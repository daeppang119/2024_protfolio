import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-[#969086] px-[32px] py-[16px]">
      <div className="text-2xl uppercase">
        <Link href={"/"} className="text-[#222] dark:text-[#f1f1f1]">
          yuna.
        </Link>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}
