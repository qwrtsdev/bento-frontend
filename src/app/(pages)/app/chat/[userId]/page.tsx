"use client";

import { ImagePlay, Smile, Send } from "lucide-react";
import { useTheme } from "next-themes";
import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
// import WebSocket from "ws";
// import { cookies } from "next/headers";

export default function Chat() {
  const params = useParams<{ userId: string }>();
  const [mounted, setMounted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { resolvedTheme } = useTheme();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // const cookie = cookies();

  // const ws = new WebSocket(`ws://localhost/msg/${params.userId}:4000`);

  useEffect(() => {
    setMounted(true);

    // ws.onopen = () => {
    //   console.log("WebSocket connected");
    // };
  }, []);

  function handleSendMessage() {
    if (inputValue.trim() !== "") {
      console.log("Sending message:", inputValue.trim());
      setInputValue("");

      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  }

  return (
    <div className="h-full flex flex-col relative">
      {/* Chat messages area with padding bottom to prevent overlap */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* placeholder for chat messages */}
        <div className="p-4">{/* Your chat messages will go here */}</div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-row gap-2 border-t border-neutral-600 bg-neutral dark:bg-neutral-900">
        {!mounted ? (
          <>
            {/* Skeleton for buttons */}
            <div className="flex flex-row gap-2">
              <div className="rounded-full min-w-9 w-9 h-9 bg-neutral-700 dark:bg-neutral-700 animate-pulse" />
              <div className="rounded-full min-w-9 w-9 h-9 bg-neutral-700 dark:bg-neutral-700 animate-pulse" />
            </div>
            {/* Skeleton for textarea */}
            <div className="rounded-lg h-9 w-full bg-neutral-700 dark:bg-neutral-700 animate-pulse" />
            {/* Skeleton for send button */}
            <div className="rounded-full min-w-9 w-9 h-9 bg-neutral-700 dark:bg-neutral-700 animate-pulse" />
          </>
        ) : (
          <>
            <button className="rounded-full min-w-9 w-9 h-9 flex items-center justify-center self-end hover:cursor-pointer dark:hover:bg-neutral-600/30 hover:bg-neutral-900/30">
              <ImagePlay
                size={14}
                className="text-neutral-900 dark:text-neutral-300 -translate-x-px translate-y-[0.5px] scale-120 group-hover:opacity-100"
              />
            </button>
            <button className="rounded-full min-w-9 w-9 h-9 flex items-center justify-center self-end hover:cursor-pointer dark:hover:bg-neutral-600/30 hover:bg-neutral-900/30">
              <Smile
                size={14}
                className="text-neutral-900 dark:text-neutral-300 scale-120 group-hover:opacity-100"
              />
            </button>
            <textarea
              ref={textareaRef}
              placeholder="พิมพ์ข้อความที่นี่..."
              className="outline-none rounded-lg py-2 px-3 text-sm w-full resize-none min-h-9 max-h-18 overflow-y-auto scrollbar-hide bg-neutral-950 text-neutral-300 dark:bg-neutral-600"
              rows={1}
              value={inputValue}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = `${Math.min(target.scrollHeight, 72)}px`;
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="rounded-full min-w-9 w-9 h-9 flex items-center justify-center self-end hover:cursor-pointer dark:hover:bg-neutral-600/30 hover:bg-neutral-900/30"
              onClick={handleSendMessage}
              type="button"
              aria-label="Send message"
            >
              <Send
                size={14}
                className="text-neutral-900 dark:text-neutral-300 -translate-x-[1.5px] translate-y-[1.5px] scale-120"
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
