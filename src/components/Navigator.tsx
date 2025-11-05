import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
// import FriendItem from "@/components/FriendItem";
import Status from "@/components/Status";
import { createClient } from "@/utils/supabase/server";

export default async function Navigator() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row justify-between p-3 align-center border-b border-neutral-600 items-center">
        <div className="flex flex-row min-w-0 flex-1 gap-2">
          <Image
            src={user?.user_metadata?.avatar_url || "/images/placeholder.png"}
            alt="Placeholder"
            width={34}
            height={34}
            className="rounded-full shrink-0"
          />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium overflow-hidden text-ellipsis whitespace-nowrap dark:text-white">
              {user?.user_metadata?.full_name || "Unknown"}
            </p>
            <Status />
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
