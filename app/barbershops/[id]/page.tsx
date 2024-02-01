"use-client"
import { db } from "@/app/_lib/prisma"
import BarbershopInfo from "./_components/barbershop-info";

interface BarbershopDetailsProps{
    params:{
        id?:string;
    }
}

const BarbershopDetails = async ( {params}:BarbershopDetailsProps) => {
    

    const barbershop = await db.barbershop.findUnique({
        where:{
            id:params.id

        }})

    if(!params.id || !barbershop){
            //TODO : REDIRECIONAR O USUÁRIO
            return null
        }
        
    return (  
        <BarbershopInfo barbershop={barbershop}/>
    );
}
 
export default BarbershopDetails;