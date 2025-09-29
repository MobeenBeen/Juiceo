"use client";
import { Button } from "@/components/ui/button";
import { MapPin, ChevronDown, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AddressModal from "../addresModal/AddresModal";
import { useState } from "react";
import LoginModal from "../loginSignup/LoginModal";
import Cart from "../cart/Cart";

export default function Navbar() {
  const [modal, setModal] = useState(false);
  const [orderType, setOrderType] = useState("");
  const [address, setAddress] = useState("");
const [openCartModal, setOpenCartModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const orderTypesHeading: Record<string, string> = {
    delivery: "Deliver to",
    pickup: "Pickup from",
    dinein: "Dine-in at",
  };
  return (
    <header className="bg-[#8DC540]">
      <nav className="flex items-center justify-between px-4 md:px-10 py-2">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/">
            <Image
              className="h-12 w-12 md:h-20 md:w-20 rounded-[8px]"
              src="/images/logo.png"
              alt="logo"
              width={80}
              height={80}
            />
          </Link>

          {/* Location (hidden on small screens) */}
          <div
            onClick={() => setModal(true)}
            className="hidden sm:flex gap-2 text-white cursor-pointer"
          >
            <span className="mt-1">
              <MapPin />
            </span>
            <div className="leading-6">
              <div className="flex items-center gap-1 hover:underline">
                <span className="text-sm md:text-lg font-bold">
                  {orderTypesHeading[orderType] || "Deliver to"}
                </span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <h5 className="text-xs md:text-sm hover:underline">
                {address || "Select your address"}
              </h5>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <div onClick={()=>{setOpenCartModal(true)}} className="relative text-white cursor-pointer bg-orange-400 p-3 rounded-lg">
            <ShoppingBag className="w-6 h-6" />
            <div className="absolute -top-2 -right-2 bg-orange-500 w-6 h-6 flex items-center justify-center text-xs font-bold rounded-sm">
              0
            </div>
          </div>

          {/* Sign in button */}
          <Button
            size="lg"
            className="hidden sm:inline font-bold text-sm md:text-lg bg-transparent border cursor-pointer hover:bg-transparent"
            onClick={() => setOpenRegisterModal(true)}
          >
            Sign In / Register
          </Button>
        </div>
      </nav>
      <AddressModal
        open={modal}
        onOpenChange={setModal}
        orderType={orderType}
        onOrderTypeChange={setOrderType}
        address={address}
        onAddressChange={setAddress}
        
      />
      <LoginModal open={openRegisterModal} onOpenChange={setOpenRegisterModal}/>
      <Cart open={openCartModal} onOpenChange={setOpenCartModal}/>
    </header>
  );
}
