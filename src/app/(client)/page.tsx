"use client"
import { useAppContext } from "@/lib/context/AppProvider";

export default function Home() {

  const {toggleTheme} = useAppContext();

  return (
    <>      
      <button type="button" onClick={toggleTheme}>toggle</button>
      Scan In Home
    </>
  );
}
