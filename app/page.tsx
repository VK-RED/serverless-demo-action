import { demoAction } from "@/actions/demoaction";

export default function Home() {
  const num = demoAction();
  return (
    <>
      The num from DemoAction is `{num}`
    </>
  );
}
