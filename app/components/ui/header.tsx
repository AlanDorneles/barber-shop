import Image from "next/image";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { MenuIcon } from "lucide-react";

export const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex">
        <Image src="/logo.png" alt="barber=shop" height={22} width={120}></Image>
        <Button variant='outline' size='icon'>
            <MenuIcon size={18} />
        </Button>
      </CardContent>
    </Card>
  );
};
