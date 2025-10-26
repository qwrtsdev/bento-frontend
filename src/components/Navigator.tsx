import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import FriendItem from "@/components/FriendItem";

export default function Navigator({
  username,
  status,
}: {
  username: string;
  status: "ออนไลน์" | "ออฟไลน์" | "ไม่อยู่";
}) {
  return (
    <div className="flex flex-col h-screen">
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
            <p className="text-sm font-medium overflow-hidden text-ellipsis whitespace-nowrap w-full max-w-28 dark:text-white">
              {username}
            </p>
            <p className="text-xs text-neutral-500 hover:underline hover:cursor-pointer">
              {status}
            </p>
          </div>
        </div>
        <ThemeToggle />
      </div>

      <div className="flex flex-col overflow-y-auto flex-1 scrollbar-hide">
        <FriendItem userId="abc123" name="Mike Hawk" online={true} />
        <FriendItem userId="def456" name="John Doe" online={true} />
        <FriendItem userId="ghi789" name="Jane Smith" online={false} />
        <FriendItem userId="jkl012" name="Alice Johnson" online={true} />
        <FriendItem userId="mno345" name="Alice Johnson" online={true} />
        <FriendItem userId="pqr678" name="Alice Johnson" online={true} />
        <FriendItem userId="stu901" name="Alice Johnson" online={true} />
        <FriendItem userId="vwx234" name="Alice Johnson" online={true} />
        <FriendItem userId="yz1234" name="Alice Johnson" online={true} />
        <FriendItem userId="abc567" name="Alice Johnson" online={true} />
        <FriendItem userId="def890" name="Alice Johnson" online={true} />
        <FriendItem userId="ghi123" name="Alice Johnson" online={true} />
        <FriendItem userId="jkl012" name="Alice Johnson" online={true} />
        <FriendItem userId="mno345" name="Alice Johnson" online={true} />
        <FriendItem userId="pqr678" name="Alice Johnson" online={true} />
      </div>
    </div>
  );
}
