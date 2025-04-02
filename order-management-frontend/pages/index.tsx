import { Geist } from "next/font/google";
import { useEffect, useState } from "react";
import {BRL, getOrders} from '@/lib/utils';
import CardOrder from "@/components/card";
import { Title } from "@/components/utils";
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

export default function Home({settings}:CustomAppConfig) {

  const [list,setList] = useState([]);
  const [dados,setDados] = useState({
    produto:'',
    cliente:'',
    valor:''
  })

  useEffect(()=>{
    let interval = setInterval(()=>{
      getOrders(settings.api_host,setList,(err:any)=>{console.error(err)});
    },5000);
    return ()=>{
      clearInterval(interval);
    }
  },[settings])
  
  return (
    <div className="h-screen w-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex md:flex-row flex-col md:gap-3 h-full">
        <div className="md:w-[320px] w-[95vw] mx-auto md:mx-0 h-full">
          <Title>Criar Ordem</Title>
        </div>
        <div className="flex-auto bg-neutral-100 rounded-xl shadow-xl p-4 md:h-full flex flex-col">
          <div className="border-b-2 border-slate-400">
          <Title>Ordens</Title>
          </div>
          <div className="md:flex-auto relative mt-4">
            <div className="md:absolute inset-0 overflow-y-auto">
              {
                list.map((item:any)=>{
                  return <CardOrder key={item.id} dados={item}/>
                })
              } 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}