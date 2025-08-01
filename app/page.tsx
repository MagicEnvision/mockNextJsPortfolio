import Image from "next/image";
import '../app/globals.css';
import Hero from "./components/Hero";

export default function Home() {
  return (
   <main className="bg-black text-white flex justify-center
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <Hero />
    </div>
   </main>
  );
}
