"use client";

import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full flex flex-col dark:bg-neutral-950 dark:text-neutral-100">
      <div className="h-screen overflow-y-hidden scrollbar-hide flex justify-center">
        <div className="max-w-4xl w-full">
          <div className="uppercase">
            <h1>connect people</h1>
            <p>in the way you want</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center border-t border-neutral-800">
        <div className="w-full max-w-4xl">
          <div className="text-center flex flex-row justify-between 4xl:px-0 px-6 py-6 vertical-align items-center select-none">
            <div className="items-baseline text-left">
              <p className="text-xs">
                made with &#10084;&#65039; by{" "}
                <a
                  href="https://github.com/qwrtsdev"
                  target="_blank"
                  className="hover:underline hover:cursor-pointer font-bold"
                >
                  qwrtsdev
                </a>
              </p>

              <p className="text-xs">
                powered by{" "}
                <a
                  href="http://pavichcloud.thddns.net"
                  target="_blank"
                  className="hover:underline hover:cursor-pointer font-bold"
                >
                  PavichCloud
                </a>
              </p>
            </div>
            <div className="self-baseline">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
