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
      <section id="" className="h-[90vh] w-[100vw] px-48">
        <div className="h-full w-full flex flex-col items-center justify-center gap-10 border-b">
          <h2 className="text-red-300 text-8xl">I Work At KoinX ✌️</h2>
        </div>
      </section>

      <section className="h-[90vh] w-[100vw] px-48 pt-4">
        <div className="h-full w-full border-b ">
          <div className="flex pt-2 px-4 justify-between">
            <div className="flex gap-3 items-start">
              <div className="h-6 w-6 bg-red-300 rounded-full"></div>
              <div>
                <h2 className="text-xl">KoinX Website</h2>
                <h3 className="capitalize">CRYPTO TAXATION WEBSITE</h3>
              </div>
            </div>
            <div>
              <h2 className="text-xl">
                An application where users can file their crypto taxes
              </h2>
              <div className="w-full">
                <Link
                  href={"https://app.koinx.com"}
                  target="_blank"
                  className="hover:text-blue-300 transform ease-in-out transition-all delay-75"
                >
                  👉 Website Link
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-full">
            <Image
              className="absolute"
              height={700}
              width={900}
              src={KoinXDesktopImage1}
              alt="KoinX Desktop Image"
            />
            <Image
              className="absolute -right-10 bottom-16"
              height={300}
              width={300}
              src={KoinXMobileImage1}
              alt="KoinX Mobile Image"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
