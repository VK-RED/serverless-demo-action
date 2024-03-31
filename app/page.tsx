'use client'
import { demoAction } from "@/actions/demoaction";
import { useEffect, useState } from "react";

export default function Home() {
  const[num,setNum] = useState(11111111);
  useEffect(()=>{
    getData();
  },[])

  async function getData(){
    const n = demoAction();
    setNum((p)=>n);
    console.log(num);
  }
  
  return (
    <>
      The num from DemoAction is {num}
    </>
  );
}
