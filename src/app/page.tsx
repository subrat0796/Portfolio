"use client";
import HomePage from "@/app/home/page";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <HomePage />;
}
