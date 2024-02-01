"use client";
import { Button } from "@/app/components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeft, MapPin, MenuIcon, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface BarbershopInfoProp {
    barbershop : Barbershop
}

const  BarbershopInfo = ({barbershop}:BarbershopInfoProp) => {

    const router = useRouter()

    const handleBackClick= ()=> {
        router.back()
        
    }
    return ( 
        <>
        <div className="h-[250px] w-full relative">
        <Button size="icon" className="absolute left-3 top-3 z-50" onClick={handleBackClick}>
            <ChevronLeft/>
        </Button>
        <Button size="icon"  className="absolute right-3 top-3 z-50">
            <MenuIcon/>
        </Button>
        <Image src={barbershop.imageUrl} fill alt={barbershop.name} style={{objectFit:"cover"}}/>
    </div>
    <div className=" mt-2 p-2 gap-2 border-b-2 border-secondary ">
        <h1 >{barbershop.name}</h1>
        
        <div className="flex gap-2 items-center mt-2">
            <MapPin className="text-primary"/>
            <p>{barbershop.address}</p>
        </div>
        <div className="flex gap-2 mt-2 mb-2 ">
            <Star className="text-primary"/>
            <p>5,0 (899 avaliações)</p>
        </div>
    </div >
    </>
     );
}
 
export default BarbershopInfo ;