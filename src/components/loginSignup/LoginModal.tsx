
'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { useState } from "react";
import SignupModal from "./SignupModal";

type loginModalProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
export default function LoginModal({open, onOpenChange}: loginModalProps){

    const [onOpenRegisterModal, setOnOpenRegisterModal] = useState(false);
    return <Dialog open={open} onOpenChange={onOpenChange}>
  <DialogContent>
    <h1 className="text-2xl font-bold text-center">Login</h1>
    <DialogHeader className="flex flex-col gap-6 p-6">
       <DialogTitle>Enter your email address</DialogTitle>
      <input className="border border-gray-400 p-2 rounded-md" type="email" placeholder="Enter your email address"/>
      <DialogTitle>Enter your password</DialogTitle>
      <input className="border border-gray-400 p-2 rounded-md" type="password" placeholder="Enter your password"/>
      <Button className="bg-orange-400 text-white cursor-pointer hover:bg-orange-500">Login</Button>
      <span className="text-sm">Don&apos;t have an account? <span className="text-orange-400 cursor-pointer" onClick={()=>{
       onOpenChange(false);
       setOnOpenRegisterModal(true);
      }}>Sign up</span></span>
    </DialogHeader>
  </DialogContent>
  <SignupModal open={onOpenRegisterModal} onOpenChange={setOnOpenRegisterModal} onLoginChange={onOpenChange}/>
</Dialog>
}