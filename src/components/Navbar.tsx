"use client";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="px-4 justify-evenly py-2 sm:flex sm:justify-between sm:px-24 sm:py-4 sm:items-center sm:sticky">
      <div className="flex gap-2 items-center justify-center sm:flex sm:gap-4 sm:items-center">
        <div className="h-4 w-4 sm:h-6 sm:w-6 bg-red-300 rounded-full"></div>
        <h2 className="text-xl font-bold sm:text-2xl">
          <Link href={"/home"}>Subrat Sahoo</Link>
        </h2>
      </div>
      <div className="w-full sm:w-1/4">
        <ul className="flex justify-evenly sm:text-xl">
          <li>
            <Link href={"/home#intro"}>Home</Link>
          </li>
          <li>
            <Link href={"/work"}>Work</Link>
          </li>
          <li>
            <Link href={"/home#projects"}>Project</Link>
          </li>
          <li>
            <Link href={"#footer"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
