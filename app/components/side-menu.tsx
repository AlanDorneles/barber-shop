"use client"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { LogOutIcon, UserIcon, LogInIcon, HomeIcon, CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";


const SideMenu = () => {

    const { data} = useSession();

  const handleLoginClick = async () => {
    await signIn("google");
  };

  const handleLogoutClick = () => signOut();

    return ( 
<>

            <SheetHeader className="text-left">
              <SheetTitle>
                <h1>Menu</h1>
              </SheetTitle>
            </SheetHeader>

            {data?.user ? (
              <div className="flex items-center px-5 py-6 justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={data.user?.image ?? ""}
                      className="rounded-full"
                      width={48}
                      height={48}
                    />
                  </Avatar>
                  <h2>{data.user.name}</h2>
                </div>
                <Button variant="secondary" size="icon" >
                  <LogOutIcon onClick={handleLogoutClick} size={12} />
                </Button>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-3 px-5 py-6">
                  <div className="flex items-center gap-3 px-5 py-4">
                    <UserIcon size={32} />
                    <h2 className="font-bold"> Olá, faça seu login</h2>
                  </div>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="w-full justify-start"
                    onClick={handleLoginClick}
                  >
                    <LogInIcon
                      className="mr-2 "
                      size={18}
                      onClick={handleLoginClick}
                    />
                    Fazer login
                  </Button>
                </div>
              </>
            )}

            <div className="flex flex-col gap-3 px-5">
              <Button variant="outline" className="justify-start" asChild>
                <Link href="/">
                  <HomeIcon size={18} className="mr-2" />
                  Início
                </Link>
              </Button>

              {data?.user && (
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/agendar">
                    <CalendarIcon size={18} className="mr-2" />
                    Agendamentos
                  </Link>
                </Button>
              )}
            </div>
          </>
     );
}
 
export default SideMenu;