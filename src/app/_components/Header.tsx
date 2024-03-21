import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b border-[#969086]  ">
      <div className="px-[32px] py-[16px] text-2xl uppercase">
        <Link href={"/"} className="text-[#f1f1f1]">
          yuna.
        </Link>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}
