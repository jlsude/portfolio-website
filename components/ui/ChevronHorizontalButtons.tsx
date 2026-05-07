"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ChevronHorizontalButtons({
  onLeftClick,
  onRightClick,
}: {
  onLeftClick: () => void;
  onRightClick: () => void;
}) {
  return (
    <div className="my-4 flex flex-row justify-end space-x-4">
      <Button
        aria-label="scroll left"
        className={"rounded-full bg-transparent hover:bg-black/20"}
        onClick={onLeftClick}
      >
        <ChevronLeft className="text-accent" />
      </Button>
      <Button
        aria-label="scroll right"
        className={"rounded-full bg-transparent hover:bg-black/20"}
        onClick={onRightClick}
      >
        <ChevronRight className="text-accent" />
      </Button>
    </div>
  );
}
