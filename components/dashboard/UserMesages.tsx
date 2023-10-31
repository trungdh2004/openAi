import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserMesagesProps {
  children: React.ReactNode;
}

const UserMesages = ({ children }: UserMesagesProps) => {
  return (
    <div className="border mb-10 p-2 rounded-lg mr-20 relative">
      {children}
      <div className="bg-secondary w-8 h-8 rounded-lg flex justify-center absolute -right-12 bottom-2">
        <Avatar>
          <AvatarFallback>BF</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default UserMesages;
