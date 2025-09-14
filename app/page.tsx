import Image from "next/image";
import Hero from "./hero/page";
import Portfolio from "./components/portfolio";
import Aboutme from "./components/aboutme";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Hero/>
      <Aboutme/>
      <Portfolio/>

    </div>
  );
}
