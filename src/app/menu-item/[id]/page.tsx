import Avatar from "@/components/design/avatar";
import DynamicIsland from "@/components/design/dynamic-island";
import { Headline } from "@/components/design/typography";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { menu } from "@/data/data";
import { notFound } from "next/navigation";

export default function MenuItemPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const special = menu.find((item) => item.id === id);
  if (!special) return notFound();
  return (
    <div>
      <DynamicIsland>
        <div className="mt-5 flex w-full flex-col items-center">
          <Headline className="mb-1">Today&apos;s Special</Headline>
          <span className="text-gray-600">Host: Jenny | 1 km away</span>
          {special.icon}
          <p className="text-xl font-bold">{special.food}</p>
          <div className="mt-2 text-sm">
            <p>Contain: {special.contains.join(", ")}</p>
            <p>May Contain: {special.mayContain.join(", ")}</p>
          </div>
        </div>
      </DynamicIsland>
      <section className="mt-20">
        <div className="my-10 flex flex-1 items-end gap-2 px-2">
          <Avatar />
          <div className="rounded-3xl border border-secondary bg-accent px-2 py-4">
            <p className="p-2 text-sm font-semibold">{special.description}</p>
          </div>
        </div>
        <div className="mt-20 px-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="w-full">
                Reserve
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md border-0 bg-secondary">
              <DialogHeader className="mx-auto max-w-xs">
                <div className=" mx-auto w-fit rounded-3xl bg-accent drop-shadow-md">
                  {special.reserveIcon}
                </div>
                <div className="py-5">
                  <DialogTitle className="text-center text-xl font-bold">
                    You have successfully reserved your meal!
                  </DialogTitle>
                  <DialogDescription className="text-md text-center text-gray-600">
                    Estimate Pick Up Time is
                    <span className="font-bold text-gray-800"> 3:30 pm</span>
                  </DialogDescription>
                </div>
              </DialogHeader>
              <DialogFooter className="sm:justify-center">
                <Button className="bg-accent">Check My Meal</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  );
}
