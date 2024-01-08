"use client";
import NavBar from "@/components/Navbar";
import HeroImage from "@/assets/Landing Page Frame.webp";
import Image from "next/image";
import Link from "next/link";

// Crwn Clothing
import CrwnClothingDesktopImage1 from "@/assets/CrwnClothingAssets/DesktopImage1.png";
import CrwnClothingMobileImage1 from "@/assets/CrwnClothingAssets/MobileImage1.png";

// LeetCode Extension
import LeetCodeExtensionDesktopImage1 from "@/assets/LeetCodeExtensionAssets/DesktopImage1.png";
import LeetCodeExtensionDesktopImage2 from "@/assets/LeetCodeExtensionAssets/DesktopImage2.png";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      <NavBar />

      {/* Intro section */}
      <section
        id="intro"
        className="h-[70vh] min-w-[400px] px-5 mx-auto sm:h-[90vh] sm:px-48 sm:max-w-[1336px]"
      >
        <div className="h-full w-full flex items-center justify-center gap-10 border-b">
          <div>
            <Image
              height={400}
              width={400}
              alt="Hero Image"
              src={HeroImage}
              className="hidden sm:block"
              data-aos="zoom-in-right"
            />
          </div>
          <div data-aos="zoom-in-left">
            <h2 className="text-red-300 text-6xl sm:text-8xl animate-pulse">
              Namaste !
            </h2>
            <h3 className="text-4xl">I am Subrat</h3>
            <h3 className="text-4xl">A Software Engineer From 🇮🇳</h3>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="px-5 sm:h-[90vh] sm:px-48 sm:pt-4 sm:max-w-[1336px] mx-auto"
      >
        <div className="h-full w-full border-b">
          <div className="sm:flex pt-2 px-4 justify-between">
            <div className="flex gap-3 items-start" data-aos="fade-down-right">
              <div className="h-4 w-4 sm:h-6 sm:w-6 bg-red-300 rounded-full"></div>
              <div>
                <h2 className="text-base sm:text-xl">CRWN Clothing</h2>
                <h3 className="text-base sm:capitalize">
                  DESIGNER STORE WEBSITE
                </h3>
              </div>
            </div>
            <div data-aos="fade-down-left">
              <h2 className="text-base sm:text-xl">
                An application where users can buy clothing from the latest
                stores
              </h2>
              <div className="gap-10 w-full">
                <Link
                  href={"https://github.com/subrat0796/crwn-clothing"}
                  target="_blank"
                  className="animate-pulse hover:text-blue-300 transform ease-in-out transition-all delay-75"
                >
                  👉 Github Link
                </Link>
                <Link
                  href={"https://delightful-frangollo-a369d4.netlify.app/"}
                  target="_blank"
                  className="animate-pulse ml-10 hover:text-blue-300 transform ease-in-out transition-all delay-75"
                >
                  👉 Website Link
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:absolute flex sm:flex-row flex-col items-center justify-center h-full">
            <Image
              className="sm:relative sm:bottom-10 sm:left-0"
              height={600}
              width={900}
              src={CrwnClothingDesktopImage1}
              alt="Crwn Clothing Desktop Image"
              data-aos="zoom-in-right"
            />
            <Image
              className="sm:relative sm:-left-40"
              height={300}
              width={300}
              src={CrwnClothingMobileImage1}
              alt="Crwn Clothing Mobile Image"
              data-aos="zoom-in-left"
            />
          </div>
        </div>
      </section>

      <section className="px-5 sm:h-[100vh] sm:px-48 sm:pt-4 max-w-[1336px] mx-auto">
        <div className="h-full w-full border-b">
          <div className="sm:flex pt-2 px-4 justify-between">
            <div className="flex gap-3 items-start" data-aos="fade-down-right">
              <div className="h-4 w-4 sm:h-6 sm:w-6 bg-blue-300"></div>
              <div>
                <h2 className="text-base sm:text-xl">LeetCode Extension</h2>
                <h3 className="text-base sm:capitalize">
                  PRACTISING WEBSITE FOR CODERS
                </h3>
              </div>
            </div>
            <div data-aos="fade-down-left">
              <h2 className="text-base sm:text-xl">
                An application where users can practice questions just before
                interviews
              </h2>
              <div className="sm:gap-10 w-full sm:flex">
                <div className="sm:w-full">
                  <Link
                    href={
                      "https://github.com/subrat0796/LeetCode-Extension-Frontend"
                    }
                    target="_blank"
                    className="animate-pulse hover:text-blue-300 transform ease-in-out transition-all delay-75"
                  >
                    👉 Github Frontend Link
                  </Link>
                </div>
                <div className="sm:w-full">
                  <Link
                    href={
                      "https://github.com/subrat0796/LeetCode-Extension-Backend"
                    }
                    target="_blank"
                    className="animate-pulse hover:text-blue-300 transform ease-in-out transition-all delay-75"
                  >
                    👉 Github Backend Link
                  </Link>
                </div>
                <div className="sm:w-full">
                  <Link
                    href={
                      "https://leet-code-extension-frontend-beta.vercel.app/sign-up"
                    }
                    target="_blank"
                    className="animate-pulse hover:text-blue-300 transform ease-in-out transition-all delay-75"
                  >
                    👉 Website Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:absolute flex sm:flex-row flex-col items-center justify-center h-full">
            <Image
              className="sm:relative sm:-bottom-44 sm:z-10"
              height={300}
              width={300}
              src={LeetCodeExtensionDesktopImage2}
              alt="LeetCode Extension Desktop Image 2"
              data-aos="zoom-in-right"
            />
            <Image
              className="sm:relative sm:-left-44"
              height={600}
              width={900}
              src={LeetCodeExtensionDesktopImage1}
              alt="LeetCode Extension Desktop Image 1"
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
