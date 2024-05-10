import Link from "next/link";
import DarkTheme from "./DarkTheme";

export default function Header() {
  return (
    <header
      className={`font-Abel absolute z-10 flex h-12 w-full translate-y-[-65px] animate-actHeaderFadeIn items-center justify-between border-b border-color-line bg-color-background px-8 tracking-tighter opacity-0`}
    >
      <h1 className="text-2xl uppercase text-color-primary-accent">
        <Link href={"/"} replace>
          yuna.
        </Link>
      </h1>
      <DarkTheme />
    </header>
  );
}
