import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     <h1>hello tis is my first page</h1>
     <Button className="hover:bg-red-500 hover:cursor-pointer">ShadCn button</Button>
    </div>
  );
}
