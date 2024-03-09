import Avatar from "@/components/design/avatar";
import DynamicIsland from "@/components/design/dynamic-island";
import { Headline } from "@/components/design/typography";
import SoupIcon from "@/components/icons/SoupIcon";
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

export default function MenuItemPage() {
  return (
    <div>
      <DynamicIsland>
        <div className="mt-5 flex w-full flex-col items-center">
          <Headline className="mb-1">Today&apos;s Special</Headline>
          <span className="text-gray-600">Host: Jenny | 1 km away</span>
          <SoupIcon width={311} height={215} />
          <p className="text-xl font-bold">Fresh Tomato Soup</p>
          <div className="mt-2 text-sm">
            <p>Contain: Milk, Gluten</p>
            <p>May Contain: Nuts</p>
          </div>
        </div>
      </DynamicIsland>
      <section className="mt-20">
        <div className="my-10 flex flex-1 items-end gap-2 px-2">
          <Avatar />
          <div className="rounded-3xl border border-secondary bg-accent px-2 py-4">
            <p className="p-2 text-sm font-semibold">
              Discover the warmth of my homemade tomato soup, a comforting blend
              of ripe tomatoes, fragrant herbs, and a hint of sweetness!
            </p>
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
              <div className="absolute -top-10 left-12 mx-auto w-fit translate-x-1/2 rounded-3xl bg-accent drop-shadow-md">
                <SoupIcon width={173.14} height={119.7} />
              </div>
              <DialogHeader className="mx-auto mt-20 max-w-xs">
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
