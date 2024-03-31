'use server';
export const demoAction = ()=>{
    console.log(process.env.MY_NUMBER);
    const num = Number(process.env.MY_NUMBER);
    console.log("The number from env is ---> ",num);
    return num;
}