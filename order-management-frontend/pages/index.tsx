import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
interface CustomAppConfig{
  settings:{
    api_host: string
    title: string
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home({settings}:CustomAppConfig) {
  
  return (
    <div className="h-screen w-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex md:flex-row flex-col md:gap-3">
        <div className="md:w-[320px] w-[95vw] mx-auto md:mx-0">
          <h2 className="">Criar Ordem</h2>
        </div>
        <div className="flex-auto bg-neutral-100 rounded-xl shadow-xl p-4 md:h-full relative flex flex-col">
          <div>
            <h2 className="">Ordens</h2>
          </div>
          <div className="md:flex-auto inset-0 overflow-y-auto md:absolute">
            
          </div>
        </div>
      </div>
    </div>
  );
}