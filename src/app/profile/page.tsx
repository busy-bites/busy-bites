import AddButton from "@/components/design/add-button";
import Avatar from "@/components/design/avatar";
import { FoodItem } from "@/components/design/food";
import { Headline } from "@/components/design/typography";
import MilkIcon from "@/components/icons/MilkIcon";
import Image from "next/image";

export default function ProfilePage() {
  const allergies = [{}];

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
        <div className="flex items-center justify-between space-y-5">
          <FoodItem>
            <MilkIcon className="transition-opacity group-hover:opacity-30" />
          </FoodItem>
          <FoodItem>
            <MilkIcon />
          </FoodItem>
          <FoodItem>
            <MilkIcon />
          </FoodItem>
          <AddButton />
        </div>

        <div className="flex items-center justify-between ">
          <div className="inline-flex h-6 w-[215px] items-center justify-start">
            <h1 className="h-6 text-xl font-bold text-black">Foodie Power</h1>
          </div>
          <div>
            <p className=" text-right text-[13px] font-medium leading-7 text-gray-400 underline">
              How This Works
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
