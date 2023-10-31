"use client";
import React from "react";
import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet";
import Sidebar from "./index";
import { useSidebarStore } from "@/store/sidebar-store";

interface MobileSideBarProps {
  isProPlan?: boolean;
  userLimitCount: number;
}

const MobileSideBar = ({ isProPlan, userLimitCount }: MobileSideBarProps) => {
  const { isOpen } = useSidebarStore();
  return (
    <div>
      <Sheet open={isOpen}>
        <SheetContent
          side="left"
          btnClose="none"
          className="w-80 border-none bg-black p-0 pt-8"
        >
          <Sidebar isProPlan={isProPlan} userLimitCount={userLimitCount} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideBar;
