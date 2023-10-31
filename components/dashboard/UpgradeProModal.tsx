"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  
} from "@/components/ui/dialog";
import SubcriptionButton from "../SubcriptionButton";
import { useProStore } from "@/store/pro-store";
import { Button } from "../ui/button";

interface UpgradeProModalProps {
  isProPlan?: boolean;
}

const UpgradeProModal = ({ isProPlan }: UpgradeProModalProps) => {
  const { isOpen, handleCloseProModal, handleOpenOrCloseProModal } =
    useProStore();

  return (
    <div>
      <Dialog open={isOpen}>
        <DialogContent showOverlay onClose={handleCloseProModal}>
          <SubcriptionButton isPro={isProPlan} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpgradeProModal;
