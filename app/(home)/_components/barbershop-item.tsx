"use client";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {

  const router = useRouter();
  const handleBookPick = () => {
    router.push(`/barbershops/${barbershop.id}`)

  }
  return (

    <Card className="min-w-[200px] max-w-[167px] rounded-2xl">
      <CardContent className="px-0 py-0">

        <div className="px-1 h-[159px] w-full relative ">
            <div className="absolute top-2 left-2 z-50 ">
            <Badge variant="secondary" className="opacity-90 flex gap-2 items-center top-3 left-3">
                <StarIcon size={12} className="fill-primary text-primary"/>
                <span className="text-xs">5,0</span>
            </Badge>
            </div>
        <Image
          src={barbershop.imageUrl}
          height={0}
          width={0}
          sizes="100vm"
          alt={barbershop.name}
          className=" rounded-t-xl"
          style={{
            objectFit:"cover",
          }}
          fill
          
        />
        </div>
        <div className="px-2 pb-3 mt-2">
            <h2 className="font-bold overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
            <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
            <Button variant='secondary' className="w-full mt-3" onClick={handleBookPick}>Reservar</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
