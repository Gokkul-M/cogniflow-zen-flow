
import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarItemProps {
  name: string;
  image?: string;
  size?: "sm" | "md" | "lg";
  gradient?: boolean;
  className?: string;
}

export function AvatarItem({ 
  name, 
  image, 
  size = "md", 
  gradient = true,
  className 
}: AvatarItemProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-16 w-16 text-xl"
  };

  return (
    <Avatar className={cn(
      sizeClasses[size],
      gradient ? "bg-gradient-to-r from-indigo-400 to-purple-400" : "bg-muted",
      className
    )}>
      {image && <AvatarImage src={image} alt={name} />}
      <AvatarFallback className={gradient ? "text-white" : ""}>{initials}</AvatarFallback>
    </Avatar>
  );
}
