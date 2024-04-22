import Link from "next/link";
import ModeBtn from "./ModeBtn";

export default function Header() {
  return (
    <header
      className={`absolute z-10 flex h-12 w-full translate-y-[-65px] animate-actHeaderFadeIn items-center justify-between border-b border-b-color px-8 opacity-0`}
    >
      <h1 className="text-2xl uppercase">
        <Link href={"/"} replace>
          yuna.
        </Link>
      </h1>
      <ModeBtn />
    </header>
  );
}
