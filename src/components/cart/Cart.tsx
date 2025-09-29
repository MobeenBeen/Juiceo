import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { Trash2 } from "lucide-react";
type CartProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};
export default function Cart({ open, onOpenChange }: CartProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="bg-white flex flex-col h-full">
        <SheetHeader>
          <div className="flex justify-between font-bold items-center mt-5 text-xl">
            <span>Your Cart</span>
            <span className="underline text-green-600 ">Clear Cart</span>
          </div>
          <Separator />
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
        <div className="flex place-content-around gap-6  ">
          <img src="images/logo.png" alt="" className="w-20 h-20" />
          <div className="flex flex-col">
            <span className="font-bold text-xl">Item name</span>
            <span className="flex gap-3 mt-6">
              <Plus className="cursor-pointer bg-orange-500 text-white rounded-md hover:bg-green-600" />{" "}
              <input
                type="number"
                value="1"
                className="w-12 border bg-white border-gray-300 rounded-md text-center"
              />{" "}
              <Minus className="cursor-pointer bg-orange-500 text-white rounded-md hover:bg-green-600" />
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xl">Rs. 123.00</span>
            <span className="cursor-pointer mt-6">
              <Trash2 />
            </span>
          </div>

        </div>
          <div className="m-4 ">
                <h1 className="text-xl font-bold">Popular Items</h1>
                <Separator className="my-4" />
                </div>

        </div>
        <div className="border-t p-4">
          <div className="text-xl" >
            <div className="flex place-content-between mb-2">
              <span>Subtotal</span> <span>Rs. 2231.00</span>
            </div>
            <div className="flex place-content-between mb-2">
              <span>Delivery Charges</span> <span>Rs. 0.00</span>
            </div>
            <div className="flex place-content-between mb-2">
              <span>Tax(15%)</span> <span></span>Rs. 333.00
            </div>
            <div className="flex place-content-between mb-2">
              <span>Grand total (Incl. Tax)</span>
              <span>Rs. 2343.00</span>
            </div>
          </div>
          <div className="text-center border-2 my-2 rounded-md">Great! you saved Rs. 226.00.</div>
          <Button className="w-full cursor-pointer bg-orange-500 text-white text-xl hover:bg-green-600">Proceed to checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
