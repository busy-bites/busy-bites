"use client";

import AccentCard from "@/components/design/accent-card";
import AddButton from "@/components/design/add-button";
import Avatar from "@/components/design/avatar";
import { Coinbar } from "@/components/design/coinbar";
import DynamicIsland from "@/components/design/dynamic-island";
import MenuItem from "@/components/design/menu-item";
import RewardItem from "@/components/design/reward-item";
import { Headline } from "@/components/design/typography";

import ThumbsUpIcon from "@/components/icons/ThumbsUpIcon";
import { rewards, allergies as allergiesData } from "@/data/data";
import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {
  const [allergies, setAllergies] = useState(allergiesData);
  return (
    <div className="space-y-10">
      <DynamicIsland>
        <div className="flex flex-col">
          <Headline className="mb-1">Sofia H.</Headline>
          <p className="text-sm font-medium text-accent">ID #A00000001</p>
        </div>
        <Avatar />
      </DynamicIsland>
      <div className="px-4">
        <div className="mb-6 flex items-center justify-between">
          <div className="inline-flex h-6 w-[215px] items-center justify-start">
            <h1 className="h-6 text-xl font-bold text-black">My Allergies</h1>
          </div>
          <div>
            <Link
              href="#"
              className="text-right text-[13px] font-medium leading-7 text-gray-400 underline hover:text-gray-600"
            >
              You need to Know
            </Link>
          </div>
        </div>

        <section className=" flex flex-wrap gap-6">
          {allergies.map(
            (allergy) =>
              allergy.selected && (
                <MenuItem
                  key={allergy.food}
                  food={allergy.food}
                  icon={allergy.icon}
                />
              ),
          )}
          <div className="flex flex-col items-center gap-2">
            <AddButton
              allergiesData={allergies}
              setAllergiesData={setAllergies}
            />
            <p>Add More</p>
          </div>
        </section>

        <section className="mt-14 flex items-center justify-between">
          <div className="flex h-6 w-[215px] items-center justify-start">
            <h1 className="h-6 text-xl font-bold text-black">Foodie Power</h1>
          </div>
          <div>
            <Link
              href="#"
              className=" text-right text-[13px] font-medium leading-7 text-gray-400 underline hover:text-gray-600"
            >
              How This Works
            </Link>
          </div>
        </section>

        {/* AccentCard Section */}
        <section className="mt-10">
          <AccentCard
            image={<ThumbsUpIcon width={147.8} height={101.63} />}
            title="Send Thanks to Chief"
            description="Recent Meal by Jenny"
          />
        </section>

        {/* Chef level section */}

        <section className="mt-14 flex items-center justify-between">
          <div className="flex h-6 w-[215px] items-center justify-start">
            <h1 className="h-6 text-xl font-bold text-black">Chef Level</h1>
          </div>
          <div>
            <Link
              href="#"
              className=" text-right text-[13px] font-medium leading-7 text-gray-400 underline hover:text-gray-600"
            >
              Reward Details
            </Link>
          </div>
        </section>

        <div className="mt-5">
          <p>
            You Have <span className="text-xl font-bold">3</span> coins
            available!
          </p>
        </div>

        {/* coin bar section */}
        <section className="mb-32 mt-5">
          <Coinbar />
          {/* Reward section */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            <RewardItem reward={rewards[0]} />
            <RewardItem reward={rewards[1]} />
          </div>
        </section>
      </div>
    </div>
  );
}
