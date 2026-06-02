import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-20 flex items-center justify-center px-4">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-primary text-2xl font-extrabold">AAVORide</div>
        <div className="lg:flex items-center text-sm font-semibold gap-8 hidden ">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
        </div>
        <Button className="shadow-md shadow-primary/20 hidden lg:block">
          Join as a AAVORide Partner
        </Button>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu />
        </Button>
      </div>
    </header>
  );
};
