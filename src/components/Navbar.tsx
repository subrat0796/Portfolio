"use client";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between px-24 py-4 items-center sticky">
      <div className="flex gap-4 items-center">
        <div className="h-6 w-6 bg-red-300 rounded-full"></div>
        <h2 className="text-2xl">
          <Link href={"/home"}>Subrat Sahoo</Link>
        </h2>
      </div>
      <div className="w-1/4">
        <ul className="flex justify-evenly text-xl">
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
