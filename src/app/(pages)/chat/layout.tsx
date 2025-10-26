import { Metadata } from "next";
import Navigator from "@/components/Navigator";

export const metadata: Metadata = {
  title: {
    default: "Bento",
    template: "%s | Bento",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-dvh dark:bg-neutral-900 flex justify-center">
      <div className="max-w-4xl h-full w-full flex border-neutral-600 border-l border-r">
        <div className="hidden md:block md:w-[30%] border-r border-neutral-600 overflow-y-auto">
          <Navigator />
        </div>

        <div className="md:w-[70%] w-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
