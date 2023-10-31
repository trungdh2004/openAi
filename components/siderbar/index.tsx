"use client";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebar-store";
import React from "react";
import Logo from "../Logo";
import SideBarToggle from "./sidebar-toggle";
import { UserButton, useUser } from "@clerk/nextjs";
import { MAX_FREE_COUNT } from "@/constants";
import { Progress } from "../ui/progress";
import Navbar from "./Navbar";
import SubcriptionButton from "../SubcriptionButton";
import ThemeToggle from "./ThemeToggle";

interface SidebarProps {
  className?: string;
  isProPlan?: boolean;
  userLimitCount: number;
}

const Sidebar = ({ className, isProPlan, userLimitCount }: SidebarProps) => {
  const { isMinimal } = useSidebarStore();

  return (
    <div className={cn("text-white ", className)}>
      <div className="h-20 pl-7 pr-6">
        <div className="flex items-center justify-between w-full">
          {!isMinimal && <Logo />}
          <SideBarToggle />
        </div>
      </div>
      <div className="grow overflow-y-auto scroll-smooth scrollbar-none">
        <Navbar />
      </div>

      <div
        className={cn(
          "fixed bottom-8 left-4 ",
          "lg:left-5 lg:right-auto ",
          isMinimal && "lg:left-3"
        )}
      >
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
