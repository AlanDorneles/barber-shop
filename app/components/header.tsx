"use client"
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
//import { MenuIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";

export const Header = () => {
  const {data} = useSession()
  
  const handleLoginClick = async () => {
    await signIn();
    console.log(data)
  }
  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex">
        <Image src="/logo.png" alt="barber=shop" height={22} width={120}></Image>
        {data?.user ? <h1>{data.user.name}</h1> :<Button onClick={handleLoginClick}>Login</Button>}
        {/*<Button variant='outline' size='icon' onClick={handleLoginClick}>
            <MenuIcon size={18} />
  </Button>*/}
      </CardContent>
    </Card>
  );
};
