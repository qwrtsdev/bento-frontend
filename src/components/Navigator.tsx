import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navigator() {
  return (
    <div>
      <div className="flex flex-row justify-between p-3 align-center border-b border-neutral-600 items-center">
        <div className="flex flex-row">
          <Image
            src={"/images/placeholder.png"}
            alt="Placeholder"
            width={34}
            height={34}
            className="rounded-full"
          />
          <div className="ml-2">
            <p className="text-sm font-medium overflow-hidden text-ellipsis whitespace-nowrap w-full max-w-28">
              blondedlnwza
            </p>
            <p className="text-xs text-neutral-500 hover:underline hover:cursor-pointer">
              ออนไลน์
            </p>
          </div>
        </div>
        <ThemeToggle />
      </div>

      <div></div>
    </div>
  );
}
