import Avatar from "@/components/design/avatar";
import { Smile, X, Image, ChevronRight } from "lucide-react";
import DynamicIsland from "@/components/design/dynamic-island";
import { Button } from "@/components/ui/button";

export default function ChatPage() {
  return (
    <div className="mx-auto max-w-sm space-y-10">
      <DynamicIsland className=" flex flex-col">
        {/* Avatar heading section */}
        <section className=" mt-7 flex items-center justify-end gap-52">
          <Avatar />
          <X className="h-6 w-6 rounded-full bg-secondary" />
        </section>

        {/* Chat heading section */}
        <section className=" mt-10 flex flex-col items-start justify-start gap-1">
          <h1 className=" text-3xl font-bold">Chat with Jenny</h1>
          <p className="text-black-400 h-12 w-72 text-sm font-medium">
            A live chat interface that allows for seamless, natural
            communication and connection.
          </p>
        </section>
      </DynamicIsland>

      {/* Chat section */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-end">
            <p className="bg-black-200 rounded-md rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] bg-primary p-3">
              Hello Jenny. I'll be there in 5 minutes.
            </p>
          </div>

          <div className="flex items-center justify-start">
            <h1 className="text-lg font-bold ">Jenny</h1>
          </div>
          <div>
            <p className="bg-black-100 rounded-md rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px]  bg-amber-200 p-3 px-[15px] py-2.5 ">
              Perfect! did you bring your own container?
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-end">
            <div className="flex w-[91px] items-start justify-end gap-2 rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] bg-primary px-[15px] py-2.5">
              <div className="w-[63px] text-gray-900">Yes, I did.</div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <p className="bg-black-200 rounded-md rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] bg-primary p-3">
              Thanks for making the food btw!
            </p>
          </div>
        </div>

        <div className="flex  items-start justify-start gap-[5px] ">
          <h1 className="text-lg font-bold ">Jenny</h1>
        </div>
        <div className="inline-flex h-[35px] w-[91px] items-start justify-start gap-2 rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px] bg-amber-200 px-[15px] py-2.5">
          <div className="h-[15px] w-[15px] rounded-full bg-amber-300" />
          <div className="h-[15px] w-[15px] rounded-full bg-amber-300" />
          <div className="h-[15px] w-[15px] rounded-full bg-amber-300" />
        </div>
      </section>

      {/* Input section */}
      <section className="flex items-center justify-center px-4">
        <div className="flex w-full max-w-2xl items-center justify-between py-2 pl-4 pr-2 ">
          <Smile className="relative  h-6 w-6" />
          <input
            type="text"
            placeholder="Reply..."
            className="w-full max-w-xl rounded-full px-6 py-3  focus:outline-none focus:ring-2 "
          />
          <Image className="relative h-6 w-6 opacity-40" />
          <Button className=" mx-3 rounded-full bg-primary p-2">
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>
        </div>
      </section>
    </div>
  );
}
