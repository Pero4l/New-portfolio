import Image from "next/image";
import Hero from "./hero/page";
import Navbar from "./components/layout/navbar";
import Portfolio from "./components/portfolio";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Hero/>
      <Portfolio/>
    </div>
  );
}
