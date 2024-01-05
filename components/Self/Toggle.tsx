"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Toggle() {
  // const { setTheme } = useTheme();
  const [darkMode, setDarkMode] = React.useState(() => {
    if (localStorage.getItem("theme") === null)
      localStorage.setItem("theme", "dark");
    const theme = localStorage.getItem("theme");
    // Set default to dark if theme is not found or localStorage is empty
    return theme === "light" ? false : true;
  });
  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else if (theme === "light") {
      setDarkMode(false);
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, []);
  ``;
  React.useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [darkMode]);

  return (
    <Button
      variant="outline"
      size="icon"
      className=" border-none shadow-none bg-backgroundMain-50 hover:bg-backgroundMain-100 "
      onClick={() => setDarkMode((value) => !value)}
    >
      {darkMode ? (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
