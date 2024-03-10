"use client";

import Avatar from "@/components/design/avatar";
import { Smile, X, Image, ChevronRight } from "lucide-react";
import DynamicIsland from "@/components/design/dynamic-island";
import { Button } from "@/components/ui/button";

export default function ChatPage() {
  // have a sendMessage in a array of messages
  const senderMessages = [
    {
      sender: "Sophia",
      message: "Hello, Jenny. I'll be there in 5 minutes!",
    },
    {
      sender: "Sophia",
      message: "Yes I did.",
    },
    {
      sender: "Sophia",
      message: "Thanks for making the food btw!",
    },
  ];

  const receiverMessages = [
    {
      sender: "Jenny",
      message: "Perfect! did you bring your own container?",
    },
    {
      sender: "Jenny",
      message: "....",
    },
  ];

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
            {/* // map through senderMessages */}
            {senderMessages.map((message, index) => (
              <div
                key={message.sender}
                className="flex items-end justify-start"
              >
                <div className="max-w-xs break-words rounded-[20px] rounded-tl-none bg-amber-200 p-3 md:max-w-md lg:max-w-lg">
                  {message.message}
                </div>
              </div>
            ))}
          </div>

          {/* // map through receiverMessages */}
          {receiverMessages.map((message) => (
            <div key={message.sender}>
              <h1 className="text-lg font-bold">{message.sender}</h1>
              <div className="flex w-[91px] items-start justify-start gap-2 rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px] bg-amber-200 p-3 px-[15px] py-2.5 ">
                {message.message}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Input section */}
      <section className="flex items-center justify-center px-4">
        <div className="flex w-full max-w-2xl items-center justify-between py-2 pl-4 pr-2 ">
          <Smile className="relative mx-3 h-8 w-8" />
          <input
            type="text"
            placeholder="Reply..."
            className="w-full max-w-xl rounded-full px-6 py-3  focus:outline-none focus:ring-2 "
          />
          <Image className="relative mx-3 h-8 w-8 opacity-40" />
          <Button className=" mx-3 rounded-full bg-primary p-2">
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>
        </div>
      </section>
    </div>
  );
}

{
  /* <div className="flex  items-start justify-start gap-[5px] ">
          <h1 className="text-lg font-bold ">Jenny</h1>
        </div>
        <div className="inline-flex h-[35px] w-[91px] items-start justify-start gap-2 rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px] bg-amber-200 px-[15px] py-2.5">
          <div className="h-[15px] w-[15px] rounded-full bg-amber-300" />
          <div className="h-[15px] w-[15px] rounded-full bg-amber-300" />
          <div className="h-[15px] w-[15px] rounded-full bg-amber-300" />
        </div>
      </section> */
}
