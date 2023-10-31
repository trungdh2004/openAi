"use client";

import { NAVIGATIONS } from "@/constants";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebar-store";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const { isMinimal, handleClose } = useSidebarStore();
  const pathname = usePathname();

  return (
    <div className="px-4 ">
      {NAVIGATIONS.map(({ title, url, icon, slug }, index) => (
        <div key={index} className="mb-2">
          <Link href={url} onClick={handleClose}>
            <div
              className={cn(
                "flex items-center opacity-70 py-1 rounded-lg px-5 hover:opacity-100",
                isMinimal && "px-1",
                pathname.includes(url) &&
                  "transition-colors bg-gradient-to-l from-slate-800 to-slate-900 shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)] opacity-100"
              )}
            >
              <div className="flex items-center p-2">
                <div>
                  <Image src={icon} alt={title} width={24} height={24} />
                </div>

                {!isMinimal && <span className="ml-4 text-sm">{title}</span>}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
