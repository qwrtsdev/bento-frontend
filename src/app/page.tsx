"use client";

import { Send } from "lucide-react";

export default function Chat() {
  return (
    <div className="h-full flex flex-col relative">
      {/* Chat messages area with padding bottom to prevent overlap */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* placeholder for chat messages */}
        <div className="p-4">{/* Your chat messages will go here */}</div>
      </div>

      {/* Fixed input area */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-row gap-2">
        <input
          type="text"
          placeholder="พิมพ์ข้อความที่นี่..."
          className="outline-1 outline-neutral-600 rounded-full py-2 px-3 text-sm w-full"
        />
        <button className="rounded-full w-8 h-8 flex items-center justify-center border-neutral-600 border">
          <Send size={16} color="#525252" className="" />
        </button>
      </div>
    </div>
  );
}
