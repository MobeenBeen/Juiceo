import Image from "next/image";
export default function HeroImage() {
  return (
    <div className=" w-full ">
      <Image
        src="/images/hero.png"
        alt="logo"
        width={2000} 
    height={1000} 
    className="w-full h-auto" 
      />
    </div>
  );
}
