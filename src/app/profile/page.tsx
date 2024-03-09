import AddButton from "@/components/design/add-button";
import Avatar from "@/components/design/avatar";
import { FoodItem } from "@/components/design/food";
import MenuItem from "@/components/design/menu-item";
import { Headline } from "@/components/design/typography";
import EggIcon from "@/components/icons/EggIcon";
import GlutenIcon from "@/components/icons/GlutenIcon";
import MilkIcon from "@/components/icons/MilkIcon";
import Image from "next/image";

export default function ProfilePage() {
  const allergies = [
    { food: "Milk", icon: <MilkIcon /> },
    { food: "Egg", icon: <EggIcon /> },
    { food: "Gluten", icon: <GlutenIcon /> },
    { food: "Add More", icon: <AddButton /> },
  ];

  return (
    <div className="mx-auto max-w-sm space-y-10">
      <div className="mt-4 flex items-center justify-between space-y-5">
        <div className="">
          <Headline>Sofia H.</Headline>
          <p className="text-[13px] font-medium leading-7">UID #A00000001</p>
        </div>
        <Avatar />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="inline-flex h-6 w-[215px] items-center justify-start">
            <h1 className="h-6 text-xl font-bold text-black">My Allergies</h1>
          </div>
          <div>
            <p className=" text-right text-[13px] font-medium leading-7 text-gray-400 underline">
              You need to Know
            </p>
          </div>
        </div>

        <section className=" flex gap-6">
          {allergies.map((allergy) => (
            <MenuItem
              key={allergy.food}
              food={allergy.food}
              icon={allergy.icon}
            />
          ))}
        </section>

        <section className="mt-14 flex items-center justify-between">
          <div className="flex h-6 w-[215px] items-center justify-start">
            <h1 className="h-6 text-xl font-bold text-black">Foodie Power</h1>
          </div>
          <div>
            <p className=" text-right text-[13px] font-medium leading-7 text-gray-400 underline">
              How This Works
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
