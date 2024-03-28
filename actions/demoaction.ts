'use server';
export const demoAction = ()=>{
    const num = Number(process.env.MY_NUMBER);
    console.log("The number from env is ---> ",num);
    return num;
}