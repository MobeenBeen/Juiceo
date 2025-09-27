import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function ProductCard() {
  return (
    <Card className="bg-white mx-4 my-6 w-full max-w-md flex flex-col sm:flex-row cursor-pointer">
  <div className="relative w-full sm:w-72 h-48">
    <Badge className="absolute top-2 left-2 bg-red-500 text-white z-[50]">
      10% OFF
    </Badge>
    <Image
      src="/images/logo.png"
      alt="Hero Image"
      fill
      className="object-cover rounded-md"
    />
    <Badge className="absolute bottom-2 right-2 bg-[#8DC540] text-white z-[50]">
      New
    </Badge>
  </div>

  <CardContent className="flex flex-col justify-between p-4 w-full">
    <h1 className="font-bold text-lg">PRODUCT NAME</h1>
    <p className="text-gray-500">
      Two line descript for the product so user can know what it is
    </p>

    <div className="flex flex-col mt-6">
      <Badge className="bg-orange-400 text-white text-md mb-4">
        Price
      </Badge>

      <div className="flex flex-row justify-between items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                aria-label="Add to cart"
                className="cursor-pointer bg-[#8DC540]  text-white"
              >
                Add To Cart
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to cart</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Add to wishlist"
                className="rounded-full hover:bg-pink-100 cursor-pointer"
              >
                <Heart className="w-5 h-5 text-gray-500" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to wishlist</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  </CardContent>
</Card>

  );
}
