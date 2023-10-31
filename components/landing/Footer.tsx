import { cn } from "@/lib/utils";
import React from "react";
import Logo from "../Logo";

const Footer = () => {
  return (
    <div className="border-t w-full p-4">
      <div
        className={cn(
          "max-w-5xl mx-auto w-full flex flex-col items-center justify-between",
          "lg:flex-row"
        )}
      >
        <Logo />
        <div className={cn("text-sm mt-4", "lg:mt-0")}>
          Copy right 2023 , Broadfast
        </div>
      </div>
    </div>
  );
};

export default Footer;
