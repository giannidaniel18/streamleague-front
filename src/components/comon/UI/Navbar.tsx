import Image from "next/image";
import Link from "next/link";

export default function Example() {
  return (
    <nav className="sticky top-0 h-16 flex flex-row justify-between items-center">
      <span className=" text-1xl font-extrabold">LOGO</span>
      <ul className="flex flex-row gap-4 justify-center  ">
        <li>
          <Link href="#home">
            <p className="text-2xl">Home </p>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <p className="text-2xl">About </p>
          </Link>
        </li>
        <li>
          <Link href="#services">
            <p className="text-2xl">Services </p>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <p className="text-2xl">Contact </p>
          </Link>
        </li>
      </ul>
      <div className="mr-4">
        <Link href="#profile">
          <Image
            src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png"
            width={50}
            height={50}
            alt="User Avatar"
            className="rounded-full border border-white"
          />
        </Link>
      </div>
    </nav>
  );
}
