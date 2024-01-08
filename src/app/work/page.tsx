"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";

// KoinX Assets
import KoinXDesktopImage1 from "@/assets/KoinXAssets/DesktopImage1.png";
import KoinXMobileImage1 from "@/assets/KoinXAssets/MobileImage1.png";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <NavBar />
      <section
        id=""
        className="px-5 h-[70vh] sm:h-[90vh] sm:w-[100vw] sm:px-48 sm:max-w-[1336px] mx-auto"
      >
        <div className="h-full w-full flex flex-col items-center justify-center gap-10 border-b">
          <h2 className="animate-pulse text-4xl text-red-300 sm:text-8xl">
            I Work At KoinX ✌️
          </h2>
        </div>
      </section>

      <section className="px-5 sm:h-[90vh] sm:w-[100vw] sm:px-48 pt-4 sm:max-w-[1336px] mx-auto">
        <div className="h-full w-full border-b ">
          <div className="sm:flex pt-2 px-4 justify-between">
            <div className="flex gap-3 items-start" data-aos="fade-down-right">
              <div className="h-4 w-4 sm:h-6 sm:w-6 bg-red-300 rounded-full"></div>
              <div>
                <h2 className="text-base sm:text-xl">KoinX Website</h2>
                <h3 className="text-base sm:capitalize">
                  CRYPTO TAXATION WEBSITE
                </h3>
              </div>
            </div>
            <div data-aos="fade-down-left">
              <h2 className="text-base sm:text-xl">
                An application where users can file their crypto taxes
              </h2>
              <div className="sm:w-full">
                <Link
                  href={"https://app.koinx.com"}
                  target="_blank"
                  className="animate-pulse hover:text-blue-300 transform ease-in-out transition-all delay-75"
                >
                  👉 Website Link
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:absolute flex sm:flex-row flex-col items-center justify-center h-full">
            <Image
              className="sm:relative sm:bottom-20 sm:left-0"
              height={700}
              width={900}
              src={KoinXDesktopImage1}
              alt="KoinX Desktop Image"
              data-aos="zoom-in-right"
            />
            <Image
              className="sm:relative sm:-left-56 sm:-bottom-10"
              height={300}
              width={300}
              src={KoinXMobileImage1}
              alt="KoinX Mobile Image"
              data-aos="zoom-in-left"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
