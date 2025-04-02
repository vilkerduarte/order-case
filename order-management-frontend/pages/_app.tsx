import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";



export default function App({ Component, pageProps }: AppProps) {
  const [settings,setSettings] = useState(null);
  useEffect(()=>{
    fetch('/app.json').then(async(response)=>{
      try {
        let config = await response.json();
        
        setSettings(config);
      } catch (error) {
        console.error(error);
      }
    })
  },[])
  pageProps.settings = settings;
  return <Component {...pageProps} />;
}
