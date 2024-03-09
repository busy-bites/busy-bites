import Avatar from "@/components/design/avatar";
import { X } from "lucide-react";

export default function ChatPage() {
  return (
    <div className="mx-auto max-w-sm space-y-10">
      {/* Avatar heading section */}
      <section className=" mx-auto mt-7 flex items-center justify-between">
        <Avatar />
        <X className="rounded-full" />
      </section>

      {/* Chat heading section */}
      <section className=" flex flex-col items-start justify-start gap-1">
        <h1 className=" text-3xl font-bold">Chat with Jenny</h1>
        <p className="text-black-400 h-12 w-72 text-sm font-medium">
          A live chat interface that allows for seamless, natural communication
          and connection.
        </p>
      </section>

      {/* Chat section */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-start">
            <h1 className="text-lg font-bold ">Jenny</h1>
          </div>
          <div>
            <p className="bg-black-100 rounded-md p-3">
              Perfect! did you bring your own container?
            </p>
          </div>
          <div className="flex items-center justify-end">
            <p className="bg-black-200 rounded-md p-3">
              I'm good, what about you?
            </p>
            <Avatar />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-start">
            <Avatar />
            <p className="bg-black-100 rounded-md p-3">
              Hey Jenny, How are you?
            </p>
          </div>
          <div className="flex items-center justify-end">
            <p className="bg-black-200 rounded-md p-3">
              I'm good, what about you?
            </p>
            <Avatar />
          </div>
        </div>
      </section>

      {/* Input section */}
      <section>
        <input
          type="text"
          placeholder="Reply..."
          className="bg-black-100 w-full rounded-3xl p-3"
        />
      </section>
    </div>
  );
}
