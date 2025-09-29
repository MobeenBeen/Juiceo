import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
type SignupModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLoginChange: (open: boolean) => void;
};
export default function SignupModal({ open, onOpenChange, onLoginChange }: SignupModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
    <h1 className="text-2xl font-bold text-center">Register</h1>
        <DialogHeader className="flex flex-col gap-6 p-6">
        <DialogTitle>Full Name</DialogTitle>
        <input
          className="border border-gray-400 p-2 rounded-md"
          type="text"
          placeholder="Enter your full name"
        />
          <DialogTitle>Enter your email address</DialogTitle>
          <input
            className="border border-gray-400 p-2 rounded-md"
            type="email"
            placeholder="Enter your email address"
          />
          <DialogTitle>Enter your password</DialogTitle>
          <input
            className="border border-gray-400 p-2 rounded-md"
            type="password"
            placeholder="Enter your password"
          />
          <Button className="bg-orange-400 text-white cursor-pointer hover:bg-orange-500">
            Register
          </Button>
           <span className="text-orange-400 cursor-pointer" onClick={()=>{
       onOpenChange(false);
       onLoginChange(true);
      }}>Already have an account? Sign in</span>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
