import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { createClient } from "@/utils/supabase/server";
import { logout } from "@/utils/supabase/actions";
import { Suspense } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

function NavigatorSkeleton() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row justify-between p-3 align-center border-b border-neutral-600 items-center">
        <div className="flex flex-row min-w-0 flex-1 gap-2">
          {/* avatar skeleton */}
          <div className="w-[34px] h-[34px] rounded-full bg-neutral-700 dark:bg-neutral-700 animate-pulse shrink-0" />
          <div className="min-w-0 flex-1 flex flex-col gap-1">
            {/* name skeleton */}
            <div className="h-4 w-32 bg-neutral-700 dark:bg-neutral-700 animate-pulse rounded" />
            {/* handle skeleton */}
            <div className="h-3 w-20 bg-neutral-700 dark:bg-neutral-700 animate-pulse rounded" />
          </div>
        </div>
        <div className="w-9 h-9" />
      </div>

      <div className="flex flex-col overflow-y-auto flex-1 scrollbar-hide">
        {/* friends list skeleton */}
      </div>
    </div>
  );
}

async function NavigatorContent() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("characters")
    .select("name")
    .eq("user_id", user?.id);

  const userHandle = user?.id.split("-")[0];

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row justify-between p-3 align-center border-b border-neutral-600 items-center">
        <div className="flex flex-row min-w-0 flex-1 gap-2 select-none">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={
                  user?.user_metadata?.avatar_url || "/images/placeholder.png"
                }
                alt="Placeholder"
                width={34}
                height={34}
                className="rounded-full shrink-0"
                priority
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/app/settings">การตั้งค่า</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout} variant="destructive">
                ออกจากระบบ
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium overflow-hidden text-ellipsis whitespace-nowrap dark:text-white">
              {user?.user_metadata?.full_name || "Unknown"}
            </p>
            <p
              className="text-xs text-neutral-500 hover:underline hover:cursor-pointer select-none"
              // onClick={() => navigator.clipboard.writeText(`${userHandle}`)}
            >
              @{userHandle || "unknown"}
            </p>
          </div>
        </div>
        <ThemeToggle />
      </div>

      <div className="flex flex-col overflow-y-auto flex-1 scrollbar-hide">
        {/* placeholder for friends list */}
      </div>
    </div>
  );
}

// Main component with Suspense
export default function Navigator() {
  return (
    <Suspense fallback={<NavigatorSkeleton />}>
      <NavigatorContent />
    </Suspense>
  );
}
