"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import MilkIcon from "../icons/MilkIcon";
import EggIcon from "../icons/EggIcon";
import GlutenIcon from "../icons/GlutenIcon";
import FishIcon from "../icons/FishIcon";
import PeanutIcon from "../icons/PeanutIcon";
import NutsIcon from "../icons/NutsIcon";
import PeachIcon from "../icons/PeachIcon";
import CaffineIcon from "../icons/CaffineIcon";
import { FoodButton } from "./food";

export default function AddButton() {
  const allergies = [
    { food: "Milk", icon: <MilkIcon /> },
    { food: "Egg", icon: <EggIcon /> },
    { food: "Fish", icon: <FishIcon /> },
    { food: "Gluten", icon: <GlutenIcon /> },
    { food: "Peanuts", icon: <PeanutIcon /> },
    { food: "Nuts", icon: <NutsIcon /> },
    { food: "Peach", icon: <PeachIcon /> },
    { food: "Caffine", icon: <CaffineIcon /> },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group flex h-[74px] w-[74px] items-center justify-center rounded-full bg-primary">
          <Plus className="stroke-accent" />
        </button>
      </DialogTrigger>
      <DialogContent className="border-none bg-[#FFD78A] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-8 py-4">
          {allergies.map((allergy) => (
            <div
              key={allergy.food}
              className="flex flex-col items-center gap-2"
            >
              <FoodButton variant="outline">{allergy.icon}</FoodButton>
              <span>{allergy.food}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-2">
            <OtherAddButton />
            <span>Other</span>
          </div>
        </div>
        <DialogFooter className="mt-8 sm:justify-center">
          <Button className="bg-white hover:bg-gray-100" type="submit">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function OtherAddButton() {
  return (
    <button
      className={cn(
        "group flex h-[74px] w-[74px] items-center justify-center rounded-full bg-accent",
      )}
    >
      <Plus className="stroke-primary" />
    </button>
  );
}
