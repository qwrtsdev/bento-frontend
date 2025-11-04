"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="rounded-full p-2 w-[34px] h-[34px]" />;
  }

  if (resolvedTheme === "dark")
    return (
      <div
        className="rounded-full group cursor-pointer hover:bg-neutral-500/30 p-2"
        onClick={() => setTheme("light")}
      >
        <Moon size={18} className="text-neutral-900 dark:text-neutral-300" />
      </div>
    );

  if (resolvedTheme === "light")
    return (
      <div
        className="rounded-full group cursor-pointer hover:bg-neutral-500/30 p-2"
        onClick={() => setTheme("dark")}
      >
        <Sun size={18} className="text-neutral-900 dark:text-neutral-300" />
      </div>
    );
}
