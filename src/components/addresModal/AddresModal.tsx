'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useEffect, useState } from "react";
import { LocateFixed } from "lucide-react";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
type AddressModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  orderType: string;
  onOrderTypeChange: (orderType: string) => void;
  address: string;
  onAddressChange: (address: string) => void;
};

export default function AddressModal({
  open,
  onOpenChange,
  orderType,
  onOrderTypeChange,
  address,
  onAddressChange,
}: AddressModalProps) {
  const [localOrderType, setLocalOrderType] = useState(orderType);
  const [localAddress, setLocalAddress] = useState(address);

  useEffect(() => {
    if (open) {
      setLocalAddress(address);
      setLocalOrderType(orderType);
    }
  }, [open, address, orderType]);

  const orderTypesHeading: Record<string, string> = {
    delivery: "Please select your location",
    pickup: "Which outlet would you like to pick-up from?",
    dinein: "Which outlet would you like to dine-in at?",
  };

  const frameworks = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "mango", label: "Mango" },
  ];

  const [selectAreaOpen, setSelectAreaOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white  ">
        <DialogHeader className="!text-center ">
          <DialogTitle>
            <img
              src="/images/logo.png"
              className="h-12 w-auto mx-auto sm:h-24"
            />
          </DialogTitle>
          <h3 className="text-xl font-bold mb-3">Select your order type</h3>
          <div className="flex justify-center mb-3 ">
            <ToggleGroup
              type="single"
              value={localOrderType}
              onValueChange={setLocalOrderType}
              className="gap-6"
            >
              <ToggleGroupItem
                value="delivery"
                aria-label="Delivery"
                className={`text-lg font-semibold cursor-pointer  ${
                  localOrderType === "delivery"
                    ? "!bg-green-500 !text-white"
                    : ""
                } `}
              >
                Delivery
              </ToggleGroupItem>
              <ToggleGroupItem
                value="pickup"
                aria-label="Pick-Up"
                className={`text-lg font-semibold cursor-pointer  ${
                  localOrderType === "pickup" ? "!bg-green-500 !text-white" : ""
                }`}
              >
                Pick-Up
              </ToggleGroupItem>
              <ToggleGroupItem
                value="dinein"
                aria-label="Dine-In"
                className={`text-lg font-semibold cursor-pointer   ${
                  localOrderType === "dinein" ? "!bg-green-500 !text-white" : ""
                }`}
              >
                Dine-In
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <h3 className="text-xl font-bold">
            {orderTypesHeading[localOrderType] || "Please choose an option"}
          </h3>
          <div className="inline-block">
            <Button className="bg-gray-300 text-gray-700 rounded-full w-auto px-4 min-w-0 hover:bg-orange-500 hover:text-white cursor-pointer">
              <LocateFixed /> Use Current Location
            </Button>
          </div>

          <input
            className="mt-7 p-2 text-lg border-2 text-gray-600"
            value="ISLAMABAD"
            readOnly
            type="text"
            placeholder="Enter your City"
          />

          {/* <Popover open={selectAreaOpen} onOpenChange={setSelectAreaOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={selectAreaOpen}
                className="w-full justify-between"
              >
                {value
                  ? frameworks.find((f) => f.value === value)?.label
                  : "Select fruit..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search fruit..." />
                <CommandEmpty>No fruit found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((f) => (
                    <CommandItem
                      key={f.value}
                      value={f.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setSelectAreaOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === f.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {f.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover> */}
          {/* <Popover>
            <PopoverTrigger>Open</PopoverTrigger>
            <PopoverContent>
              <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search Emoji</CommandItem>
                    <CommandItem>Calculator</CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>Profile</CommandItem>
                    <CommandItem>Billing</CommandItem>
                    <CommandItem>Settings</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover> */}
          <input
            className="pt-2 p-2 text-lg border-2 text-gray-600"
            type="text"
            placeholder="Select Area"
            value={localAddress}
            onChange={(e) => setLocalAddress(e.target.value)}
          />
          <Button
            className="bg-orange-400 font-bold text-md cursor-pointer hover:bg-orange-500"
            onClick={() => {
              onAddressChange(localAddress);
              onOrderTypeChange(localOrderType);
              onOpenChange(false);
            }}
          >
            Select
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
