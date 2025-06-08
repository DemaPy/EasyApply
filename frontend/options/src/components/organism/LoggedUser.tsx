import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoginCard } from "./LoginCard";
import { Button } from "../ui/button";
import { useState } from "react";

export const LoggedUser = ({ open }: { open?: boolean }) => {
  const [isOpen, setIsOpen] = useState(open ?? false);

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogTrigger asChild>
        {!open && (
          <Button variant={"outline"} className="w-full cursor-pointer">
            Sign in
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="py-6 px-0">
        <DialogTitle className="px-6">Enter email and password</DialogTitle>
        <DialogHeader>
          <LoginCard />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
