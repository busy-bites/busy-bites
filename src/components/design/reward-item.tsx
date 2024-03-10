import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CoinIcon from "../icons/CoinIcon";
import { Button } from "../ui/button";

type Reward = {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
};

export default function RewardItem({ reward }: { reward: Reward }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full cursor-pointer rounded-3xl bg-accent drop-shadow-md">
          {reward.icon}
          <div className="flex items-end justify-center gap-2 pb-2">
            <CoinIcon width={30} height={30} />
            <span>5</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="border-0 bg-secondary sm:max-w-[425px]">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-10 w-fit rounded-3xl bg-accent drop-shadow-md">
            {reward.icon}
          </div>
          <DialogTitle className="text-center">{reward.title}</DialogTitle>
          <p className="pt-4">{reward.description}</p>
          <p>Thank you for your great culinary skills!</p>
        </DialogHeader>
        <DialogFooter className="pt-10 sm:justify-center">
          <Button type="submit" className="w-full bg-white drop-shadow-md">
            Redeem
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
