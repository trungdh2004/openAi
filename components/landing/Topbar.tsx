import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { Button } from "../ui/button";

const Topbar = () => {
  return (
    <div className="border-b w-full p-4">
      <div className="max-w-5xl mx-auto w-full items-center justify-between flex">
        <Logo />
        <div>
          <Link href="/dashboard">
            <Button className="gradient-btn">
              <span className="mr-2">Get started</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
