import { TOOLS } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";
import ToolItem from "./ToolItem";

interface ToolsNavigationProps {
  title?: string ;
}

const ToolsNavigation = ({ title }: ToolsNavigationProps) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full items-center grow px-10 py-10 overflow-y-auto scroll-smooth scrollbar-none",
        " lg:px-4 lg:pt-0 lg:pb-6",
        "2xl:py-10"
      )}
    >
      <div className="text-center mb-10">
        <h3>{title}</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Chat with the smartest AI - Express the power of AI with us
        </p>
      </div>

      <div className="w-full max-w-[30,75rem] mx-auto ">
        {TOOLS.map((tool, index) => (
          <ToolItem key={index} {...tool}></ToolItem>
        ))}
      </div>
    </div>
  );
};

export default ToolsNavigation;
