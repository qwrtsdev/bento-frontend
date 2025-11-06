import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Settings | Bento",
};

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-dvh dark:bg-neutral-900 flex justify-center">
      <div className="max-w-4xl h-full w-full flex border-neutral-600 border-l border-r">
        <div className="hidden sm:block md:w-[30%] border-r border-neutral-600 overflow-y-auto">
          <Link
            href="/app/chat"
            className="block p-4 text-sm font-medium text-neutral-950 hover:bg-neutral-100"
          >
            <ChevronLeft className="mr-2 inline" /> กลับสู่แชท
          </Link>
        </div>

        <div className="md:w-[70%] w-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
