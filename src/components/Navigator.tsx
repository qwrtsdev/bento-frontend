import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import FriendItem from "@/components/FriendItem";
import Status from "@/components/Status";

export default async function Navigator({
  username,
  userStatus,
}: {
  username: string;
  userStatus: "ออนไลน์" | "ออฟไลน์" | "ไม่อยู่";
}) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row justify-between p-3 align-center border-b border-neutral-600 items-center">
        <div className="flex flex-row min-w-0 flex-1 gap-2">
          <Image
            src={"/images/placeholder.png"}
            alt="Placeholder"
            width={34}
            height={34}
            className="rounded-full shrink-0"
          />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium overflow-hidden text-ellipsis whitespace-nowrap dark:text-white">
              {username}
            </p>
            <Status status={userStatus} />
          </div>
        </div>
        <ThemeToggle />
      </div>

      <div className="flex flex-col overflow-y-auto flex-1 scrollbar-hide">
        {/*{data
          ? data.map((friend) => (
              <FriendItem
                key={friend.id}
                userId={friend.id}
                name={friend.name}
                online={friend.online}
              />
            ))
          : null}*/}
      </div>
    </div>
  );
}
