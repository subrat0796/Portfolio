"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="px-24 py-8">
        <div className="flex items-center gap-2">
          <div
            className="w-0 h-0 
  border-l-[25px] border-l-transparent
  border-b-[37.5px] border-b-red-500
  border-r-[25px] border-r-transparent"
          ></div>
          <h2 className="text-xl">Connect With Me</h2>
        </div>
        <div className="w-1/3 mt-10">
          <ul className="text-xl flex justify-between">
            <li>
              <Link
                href={"https://www.linkedin.com/in/subrat-sahoo-01377h/"}
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href={"mailto:subratsahoo0796@gmail.com?subject=Hey There!"}
                target="_blank"
              >
                Email
              </Link>
            </li>
            <li>
              <Link
                href={
                  "https://drive.google.com/file/d/1YUk0Pj6sQzFCZu9mAaUTsSMzJvM0KMkv/view?usp=sharing"
                }
                target="_blank"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link href={"https://github.com/subrat0796"} target="_blank">
                Github
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <h2 className="text-center text-base">
        Made with love by Subrat from 🇮🇳
      </h2>
    </>
  );
};

export default Footer;
