'use client'
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {useEffect, useState} from "react";
import {categoriesList} from "../categories/Categories";
export default function SearchBar() {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (index === categoriesList.length) setIndex(0);

        const timeout = setTimeout(()=>{
            setSubIndex((prev)=> deleting ? prev -1: prev + 1);

            if(!deleting && subIndex === categoriesList[index].name.length){
                setTimeout(()=>  setDeleting(true),1000);
            }
            else if(deleting && subIndex === 0){
                setDeleting(false);
                 setIndex((prev) => (prev + 1) % categoriesList.length);
            }
        }, deleting ? 50 : 150);
        return ()=> clearTimeout(timeout);
    },[subIndex, index, deleting])
  return (
    <div className="group ml-15 mr-10  ">
      <div className="flex gap-3 p-2 m-3 mx-auto">
        <Search />
        <input className="flex-1 outline-none text-lg" type="text" placeholder={`Search for ${categoriesList[index].name.substring(0, subIndex)}`} />
      </div>
      <Separator
        className="
          h-[2px]  bg-gray-400
          transition-all duration-200 ease-in-out
          group-hover:!h-[3px] group-hover:bg-black
          group-focus-within:!h-[3px] group-focus-within:!bg-green-600"
      />
    </div>
  );
}
