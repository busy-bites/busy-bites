"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { FoodButton, SelectableFoodButton } from "./food";

import { Allergy } from "@/data/data";
import { Dispatch, SetStateAction, useState } from "react";

export default function AddButton({
  allergiesData,
  setAllergiesData,
}: {
  allergiesData: Allergy[];
  setAllergiesData: Dispatch<SetStateAction<Allergy[]>>;
}) {
  const [allergies, setAllergies] = useState(allergiesData);

  const handleSave = () => {
    setAllergiesData(allergies);
  };
  const handleSelectAllergy = (food: string) => {
    setAllergies((prev) =>
      prev.map((allergy) =>
        allergy.food === food
          ? { ...allergy, selected: !allergy.selected }
          : allergy,
      ),
    );
  };
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
              <SelectableFoodButton
                selected={allergy.selected}
                onClick={() => handleSelectAllergy(allergy.food)}
              >
                {allergy.icon}
              </SelectableFoodButton>
              <span>{allergy.food}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-2">
            <OtherAddButton />
            <span>Other</span>
          </div>
        </div>
        <DialogFooter className="mt-8 sm:justify-center">
          <DialogClose asChild>
            <Button
              className="bg-white hover:bg-gray-100"
              type="submit"
              onClick={handleSave}
            >
              Save
            </Button>
          </DialogClose>
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
