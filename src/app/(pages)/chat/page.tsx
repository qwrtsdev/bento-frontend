"use client";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";
import { useTheme } from "next-themes";

export default function Chat() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="h-full flex flex-col relative *:select-none">
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <UserRound color={resolvedTheme === "dark" ? "white" : "black"} />
          </EmptyMedia>
          <EmptyTitle className="font-bold dark:text-white">
            ส่งข้อความ
          </EmptyTitle>
          <EmptyDescription>
            เลือกรายชื่อเพื่อน เพื่อเริ่มต้นส่งข้อความ
            <br />
            หรือ
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button className="dark:bg-white dark:hover:bg-neutral-400 dark:text-neutral-900">
              เพื่มเพื่อน
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
