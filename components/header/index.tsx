import LogoWhite from "../../public/assets/LogoWhite.svg";

export default function Header(): JSX.Element {
  return (
    <header
      id="header"
      className="flex min-h-[4.6rem] w-full flex-row items-center justify-center bg-automatorsBlue text-white md:h-20"
    >
      <div
        id="logo"
        className="flex h-full w-16 min-w-[4rem] items-center justify-center bg-automatorsPurple md:w-20 md:min-w-[5rem]"
      >
        <LogoWhite />
      </div>
      <div className="flex h-full w-full items-center pl-4 md:pl-10">
        <h1 className="text-xl font-normal uppercase tracking-widest">
          datamaker
        </h1>
      </div>
    </header>
  );
}