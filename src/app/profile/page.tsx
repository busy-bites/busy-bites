import AccentCard from "@/components/design/accent-card";
import AddButton from "@/components/design/add-button";
import Avatar from "@/components/design/avatar";
import { Coinbar } from "@/components/design/coinbar";
import MenuItem from "@/components/design/menu-item";
import { Headline } from "@/components/design/typography";
import EggIcon from "@/components/icons/EggIcon";
import GlutenIcon from "@/components/icons/GlutenIcon";
import MilkIcon from "@/components/icons/MilkIcon";
import ThumbsUpIcon from "@/components/icons/ThumbsUpIcon";

export default function ProfilePage() {
  const allergies = [
    { food: "Milk", icon: <MilkIcon /> },
    { food: "Egg", icon: <EggIcon /> },
    { food: "Gluten", icon: <GlutenIcon /> },
  ];

  return (
    <div className="relative mx-auto mt-14 max-w-sm space-y-10">
      <div className=" absolute -top-40 right-1/2 -z-10 h-[272.36px] w-[496px] translate-x-1/2 overflow-hidden rounded-[50%] bg-secondary"></div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-col">
          <Headline className="mb-1">Sofia H.</Headline>
          <p className="text-sm font-medium text-accent">UID #A00000001</p>
        </div>
        <Avatar />
      </div>
      <div>
        <div className="mb-6 mt-20 flex items-center justify-between">
          <div className="inline-flex h-6 w-[215px] items-center justify-start">
            <h1 className="h-6 text-xl font-bold text-black">My Allergies</h1>
          </div>
          <div>
            <p className="text-right text-[13px] font-medium leading-7 text-gray-400 underline">
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
          <div className="flex flex-col items-center gap-2">
            <AddButton />
            <p>Add More</p>
          </div>
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
            <p className=" text-right text-[13px] font-medium leading-7 text-gray-400 underline">
              Reward Details
            </p>
          </div>
        </section>

        <div className="mt-5">
          <p>
            You Have <span className="text-xl font-bold">3</span> coins
            available!
          </p>
        </div>

        {/* coin bar section */}
        <section className="mt-5">
          <Coinbar />
        </section>
      </div>
    </div>
  );
}
