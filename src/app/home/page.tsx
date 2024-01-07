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
      <section id="intro" className="h-[90vh] w-[100vw] px-48">
        <div className="h-full w-full flex items-center justify-center gap-10 border-b">
          <div>
            <Image height={400} width={400} alt="Hero Image" src={HeroImage} />
          </div>
          <div>
            <h2 className="text-red-300 text-8xl">Namaste !</h2>
            <h3 className="text-4xl">I am Subrat</h3>
            <h3 className="text-4xl">A Software Engineer From 🇮🇳</h3>
          </div>
        </div>
      </section>

      <section id="projects" className="h-[90vh] w-[100vw] px-48 pt-4">
        <div className="h-full w-full border-b ">
          <div className="flex pt-2 px-4 justify-between">
            <div className="flex gap-3 items-start">
              <div className="h-6 w-6 bg-red-300 rounded-full"></div>
              <div>
                <h2 className="text-xl">CRWN Clothing</h2>
                <h3 className="capitalize">DESIGNER STORE WEBSITE</h3>
              </div>
            </div>
            <div>
              <h2 className="text-xl">
                An application where users can buy clothing from the latest
                stores
              </h2>
              <div className="gap-10 w-full">
                <Link
                  href={"https://github.com/subrat0796/crwn-clothing"}
                  target="_blank"
                  className="hover:text-blue-300 transform ease-in-out transition-all delay-75"
                >
                  👉 Github Link
                </Link>
                <Link
                  href={"https://delightful-frangollo-a369d4.netlify.app/"}
                  target="_blank"
                  className="ml-10 hover:text-blue-300 transform ease-in-out transition-all delay-75"
                >
                  👉 Website Link
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-full">
            <Image
              className="absolute left-0"
              height={600}
              width={900}
              src={CrwnClothingDesktopImage1}
              alt="Crwn Clothing Desktop Image"
            />
            <Image
              className="absolute -right-10 bottom-20"
              height={300}
              width={300}
              src={CrwnClothingMobileImage1}
              alt="Crwn Clothing Mobile Image"
            />
          </div>
        </div>
      </section>

      <section className="h-[100vh] w-[100vw] px-48 pt-4">
        <div className="h-full w-full border-b ">
          <div className="flex pt-2 px-4 justify-between">
            <div className="flex gap-3 items-start">
              <div className="h-6 w-6 bg-blue-300"></div>
              <div>
                <h2 className="text-xl">LeetCode Extension</h2>
                <h3 className="capitalize">PRACTISING WEBSITE FOR CODERS</h3>
              </div>
            </div>
            <div>
              <h2 className="text-xl">
                An application where users can practice questions just before
                interviews
              </h2>
              <div className="gap-10 w-full">
                <Link
                  href={
                    "https://github.com/subrat0796/LeetCode-Extension-Frontend"
                  }
                  target="_blank"
                  className="hover:text-blue-300 transform ease-in-out transition-all delay-75"
                >
                  👉 Github Frontend Link
                </Link>
                <Link
                  href={
                    "https://github.com/subrat0796/LeetCode-Extension-Backend"
                  }
                  target="_blank"
                  className="hover:text-blue-300 transform ease-in-out transition-all delay-75 ml-10"
                >
                  👉 Github Backend Link
                </Link>
                <Link
                  href={
                    "https://leet-code-extension-frontend-beta.vercel.app/sign-up"
                  }
                  target="_blank"
                  className="ml-10 hover:text-blue-300 transform ease-in-out transition-all delay-75"
                >
                  👉 Website Link
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-full">
            <Image
              className="absolute right-0"
              height={600}
              width={900}
              src={LeetCodeExtensionDesktopImage1}
              alt="LeetCode Extension Desktop Image 1"
            />
            <Image
              className="absolute -left-10 bottom-24"
              height={300}
              width={300}
              src={LeetCodeExtensionDesktopImage2}
              alt="LeetCode Extension Desktop Image 2"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
