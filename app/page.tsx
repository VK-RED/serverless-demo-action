'use client'
import { demoAction } from "@/actions/demoaction";
import { useEffect, useState } from "react";

export default function Home() {
  const[num,setNum] = useState(11111111);
  useEffect(()=>{
    getData();
  },[])

  useEffect(()=>{
    console.log(`num has been changed and it is ${num}`);
  },[num])

  async function getData(){
    const n = await demoAction();
    console.log(n);
    setNum((p)=>n);
    console.log(num);
  }
  
  return (
    <>
      The num from DemoAction is {num}
    </>
  );
}
