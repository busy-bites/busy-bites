import DynamicIsland from "@/components/design/dynamic-island";
import { Headline } from "@/components/design/typography";
import ClockIcon from "@/components/icons/ClockIcon";
import ThumbsUpRIcon from "@/components/icons/ThumbsUpRIcon";
import TomatoIcon from "@/components/icons/TomatoIcon";

import { Button } from "@/components/ui/button";

import { menu } from "@/data/data";
import { notFound } from "next/navigation";

const orders = [
  {
    id: 1,
    food: "soup",
  },
];

export default function OrderPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const order = orders.find((order) => order.id === +id);
  if (!order) return notFound();

  const menuItem = menu.find((item) => item.id === order.food);
  if (!menuItem) return notFound();

  return (
    <div>
      <DynamicIsland variant="gradient">
        <div className="mt-5 flex w-full flex-col items-center">
          <Headline className="mb-1">Order Confimed!</Headline>
          <span className="text-gray-600">
            Estimated Pick up time is <span className="font-bold">3:30 pm</span>
          </span>
          {menuItem.icon}
          <p className="text-xl font-bold">{menuItem.food}</p>
          <div className="mt-2 text-sm">
            <p>Contain: {menuItem.contains.join(", ")}</p>
            <p>May Contain: {menuItem.mayContain.join(", ")}</p>
          </div>
        </div>
      </DynamicIsland>
      <section className="mt-20 px-2">
        <div className="relative my-10 flex flex-1 justify-between gap-2">
          <div className="absolute top-1/2 -z-10 h-1 w-full translate-y-1/2 bg-[#FFE1A7]"></div>
          <div className=" flex h-[111px] w-[111px] flex-col items-center justify-center rounded-full bg-secondary">
            <ThumbsUpRIcon width={46} height={46} />
            <span>Confirmed</span>
          </div>
          <div className="flex h-[111px] w-[111px] flex-col items-center justify-center rounded-full bg-[#FFE1A7]">
            <TomatoIcon width={46} height={46} />
            <span>Preparing</span>
          </div>
          <div className="flex h-[111px] w-[111px] flex-col items-center justify-center rounded-full bg-[#FFE1A7]">
            <ClockIcon width={46} height={46} />
            <span>Confimed</span>
          </div>
        </div>
        <div className="mt-20 flex gap-2 px-2">
          <Button variant="outline" className="w-full">
            Pick Up Location
          </Button>
          <Button variant="outline" className="w-full">
            Chat with Host
          </Button>
        </div>
      </section>
    </div>
  );
}
