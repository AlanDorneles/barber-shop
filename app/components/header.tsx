"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  MenuIcon,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import SideMenu from "./side-menu";

export const Header = () => {
  
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image
          src="/logo.png"
          alt="barber=shop"
          height={22}
          width={120}
        ></Image>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SideMenu/>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};
