"use client";

import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Status({ status }: { status: string }) {
  const [userStatus, setUserStatus] = useState(status);

  useEffect(() => {
    setUserStatus("Online");
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <p className="text-xs text-neutral-500 hover:underline hover:cursor-pointer select-none">
          {userStatus}
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuRadioGroup value={status} onValueChange={setUserStatus}>
          <DropdownMenuRadioItem value="Online">Online</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Idle">Idle</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Offline">Offline</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
