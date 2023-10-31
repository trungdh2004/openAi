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
  const { user } = useUser();

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
        <div className="mb-4 p-3 rounded-lg bg-gray-900 ">
          <div className="mb-4 flex items-center">
            <UserButton afterSignOutUrl="/" />

            {!isMinimal && (
              <span className="text-sm ml-4">
                {user?.emailAddresses?.[0]?.emailAddress}
              </span>
            )}
          </div>

          {!isMinimal && (
            <div className="border-t border-t-gray-950 pt-2">
              {!isProPlan && (
                <div className="mb-4">
                  <div className="text-center mb-2 text-muted-foreground">
                    {`${userLimitCount} / ${MAX_FREE_COUNT}`} Free generations
                  </div>
                  <Progress
                    value={(userLimitCount / MAX_FREE_COUNT) * 100}
                    className=" bg-gray-950 h-3"
                    indicatorClassName="gradient-btn"
                  />
                </div>
              )}

              <SubcriptionButton isPro={isProPlan} />
            </div>
          )}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
