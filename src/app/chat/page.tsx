"use client";

import Avatar from "@/components/design/avatar";
import { Smile, X, Image, ChevronRight } from "lucide-react";
import DynamicIsland from "@/components/design/dynamic-island";
import { Button } from "@/components/ui/button";
import { FormEvent, useEffect, useState } from "react";

type ChatMessage = {
  sender: string;
  message: string;
};

const chatMessages: ChatMessage[] = [
  {
    sender: "Sophia",
    message: "Hello, Jenny. I'll be there in 5 minutes!",
  },
  {
    sender: "Jenny",
    message: "Perfect! did you bring your own container?",
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

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(chatMessages);
  const isSender = (sender: string) => sender === "Sophia";
  useEffect(() => {
    const chatSection = document.getElementById("chat-section");
    chatSection?.scrollTo({
      top: chatSection.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        sender: "Sophia",
        message: message,
      },
    ]);
    setMessage("");
  };

  return (
    <div className="space-y-10">
      <DynamicIsland className=" flex flex-col">
        {/* Avatar heading section */}
        <section className=" mt-7 flex items-center justify-end gap-52">
          <Avatar />
          {/* <X className="h-6 w-6 rounded-full bg-secondary" /> */}
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
      <section
        className="flex h-96 flex-col gap-4 overflow-auto px-2"
        id="chat-section"
      >
        <div className="flex flex-col gap-2">
          {messages.map((message) =>
            isSender(message.sender) ? (
              <SenderChatMessage key={message.message} message={message} />
            ) : (
              <ReceiverChatMessage key={message.message} message={message} />
            ),
          )}
        </div>
      </section>

      {/* Input section */}
      <section className="flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center justify-between py-2 pl-4 pr-2 "
        >
          <Smile className="relative mx-3 h-8 w-8" />
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Reply..."
            className="w-full max-w-xl rounded-full px-6 py-3  focus:outline-none focus:ring-2 "
          />
          <Image className="relative mx-3 h-8 w-8 opacity-40" />
          <Button className=" mx-3 rounded-full bg-primary p-2">
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>
        </form>
      </section>
    </div>
  );
}

function SenderChatMessage({ message }: { message: ChatMessage }) {
  return (
    <div className="flex items-end justify-end">
      <div className="w-fit max-w-xs break-words rounded-3xl rounded-tr-none bg-secondary p-3">
        {message.message}
      </div>
    </div>
  );
}

function ReceiverChatMessage({ message }: { message: ChatMessage }) {
  return (
    <div>
      <h1 className="text-lg font-bold">{message.sender}</h1>
      <div className="flex w-fit max-w-xs items-start justify-start gap-2 rounded-3xl rounded-tl-none bg-[#FFD78A] p-3 px-[15px] py-2.5">
        {message.message}
      </div>
    </div>
  );
}
