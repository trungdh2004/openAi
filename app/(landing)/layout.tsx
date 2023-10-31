import Footer from "@/components/landing/Footer";
import Topbar from "@/components/landing/Topbar";
import React from "react";

const LangdingLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Topbar />
      <main className="max-w-5xl mx-auto">{props.children}</main>
      <Footer />
    </div>
  );
};

export default LangdingLayout;
