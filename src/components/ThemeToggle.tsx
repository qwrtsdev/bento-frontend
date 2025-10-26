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

  if (resolvedTheme === "dark")
    return (
      <span
        className="rounded-full group cursor-pointer hover:bg-neutral-500/30 p-2"
        onClick={() => setTheme("light")}
      >
        <Moon size={18} color="#d4d4d4" />
      </span>
    );

  if (resolvedTheme === "light")
    return (
      <span
        className="rounded-full group cursor-pointer hover:bg-neutral-500/30 p-2"
        onClick={() => setTheme("dark")}
      >
        <Sun size={18} color="#0a0a0a" />
      </span>
    );
}
