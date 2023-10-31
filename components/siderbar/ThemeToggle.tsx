import { THEME_MODES } from "@/constants";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebar-store";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const { isMinimal } = useSidebarStore();

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "p-2 rounded-lg flex items-center bg-gray-900 cursor-pointer",
        isMinimal && "w-14 h-14 justify-center"
      )}
    >
      {isMinimal ? (
        <span>{theme === "dark" ? <Moon /> : <Sun />}</span>
      ) : (
        THEME_MODES.map(({ lable, value }) => (
          <span
            key={value}
            className={cn(
              "flex items-center p-2 rounded-lg px-7 w-full justify-center cursor-pointer text-muted-foreground",
              theme === value && "bg-gray-950 shadow text-white"
            )}
          >
            {value === "dark" ? <Moon /> : <Sun />}
            <span className="ml-2">{lable}</span>
          </span>
        ))
      )}
    </div>
  );
};

export default ThemeToggle;
