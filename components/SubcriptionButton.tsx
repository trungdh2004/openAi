"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import axios from "axios";
import { useToast } from "./ui/use-toast";

interface SubcriptionButtonProps {
  className?: string;
  isPro?: boolean;
}

const SubcriptionButton = ({ className, isPro }: SubcriptionButtonProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubcribe = async () => {
    // todo something
    try {
      setLoading(true);
      const { data } = await axios.get("/api/stripe");

      location.href = data?.url;
      // todo something after get data from stripe
    } catch (error) {
      toast({
        description: "Something went wrong, Please try again",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      <Button
        variant="outline"
        size="lg"
        disabled={loading}
        onClick={handleSubcribe}
        className={cn(
          "text-white w-full font-semibold border-none gradient-btn",
          "hover:text-white"
        )}
      >
        <span>{isPro ? "Manage Subcription" : "Upgrade to Pro"}</span>
        <Sparkles />
      </Button>
    </div>
  );
};

export default SubcriptionButton;
