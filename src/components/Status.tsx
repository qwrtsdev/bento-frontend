"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Status() {
  const [userStatus, setUserStatus] = useState("Online");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <p className="text-xs text-neutral-500 hover:underline hover:cursor-pointer select-none">
          {userStatus}
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuRadioGroup
          value={userStatus}
          onValueChange={setUserStatus}
        >
          <DropdownMenuRadioItem value="Online">Online</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Idle">Idle</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Offline">Offline</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
