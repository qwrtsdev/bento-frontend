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
        className="rounded-full group cursor-pointer"
        onClick={() => setTheme("light")}
      >
        <Moon size={18} color="#a3a3a3" className="" />
      </span>
    );

  if (resolvedTheme === "light")
    return (
      <span
        className="rounded-full group cursor-pointer"
        onClick={() => setTheme("dark")}
      >
        <Sun size={18} color="#a3a3a3" className="" />
      </span>
    );
}
