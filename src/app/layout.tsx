import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subrat Sahoo",
  description: "About The Journey of Subrat Sahoo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
