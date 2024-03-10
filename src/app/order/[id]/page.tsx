"use client";

import DynamicIsland from "@/components/design/dynamic-island";
import { Headline } from "@/components/design/typography";
import ClockIcon from "@/components/icons/ClockIcon";
import ThumbsUpRIcon from "@/components/icons/ThumbsUpRIcon";
import TomatoIcon from "@/components/icons/TomatoIcon";

import { Button } from "@/components/ui/button";

import { menu } from "@/data/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const orders = [
  {
    id: 1,
    food: "soup",
  },
  {
    id: 2,
    food: "sandwich",
  },
  {
    id: 3,
    food: "ramen",
  },
  {
    id: 4,
    food: "sushi",
  },
  {
    id: 5,
    food: "salad",
  },
];

export default function OrderPage({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams: { status: "confirmed" | "preparing" | "ready" };
}) {
  const { status } = searchParams;
  const { replace } = useRouter();

  if (!status) {
    notFound();
  }
  if (!["confirmed", "preparing", "ready"].includes(status)) {
    notFound();
  }

  useEffect(() => {
    let timeoutId: any;
    if (status === "confirmed") {
      timeoutId = setTimeout(() => {
        replace(`/order/${id}?status=preparing`);
      }, 3000);
    }
    if (status === "preparing") {
      timeoutId = setTimeout(() => {
        replace(`/order/${id}?status=ready`);
      }, 3000);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [status, replace, id]);

  const order = orders.find((order) => order.id === +id);
  if (!order) return notFound();

  const menuItem = menu.find((item) => item.id === order.id);
  if (!menuItem) return notFound();

  return (
    <div className="pb-[100px]">
      <DynamicIsland variant={status === "ready" ? "default" : "gradient"}>
        <div className="mt-5 flex w-full flex-col items-center">
          <Headline className="mb-1">
            {status === "confirmed"
              ? "Order Confimed!"
              : status === "preparing"
                ? "Preparing your food"
                : "Ready for Pick Up!"}
          </Headline>
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
          <div
            className={cn(
              "flex h-[111px] w-[111px] flex-col items-center justify-center rounded-full",
              {
                "bg-[#FFE1A7]": status === "confirmed",
                "bg-secondary": status !== "confirmed",
              },
            )}
          >
            <TomatoIcon width={46} height={46} />
            <span>Preparing</span>
          </div>
          <div
            className={cn(
              "flex h-[111px] w-[111px] flex-col items-center justify-center rounded-full",
              {
                "bg-secondary": status === "ready",
                "bg-[#FFE1A7]": status !== "ready",
              },
            )}
          >
            <ClockIcon width={46} height={46} />
            <span>Confimed</span>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-2 px-2">
          <Link href="/map">
            <Button variant="outline" className="w-full">
              Pick Up Location
            </Button>
          </Link>
          <Link href="/chat">
            <Button variant="outline" className="w-full">
              Chat with Host
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
