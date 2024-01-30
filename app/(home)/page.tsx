import { Header } from "../components/ui/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../components/booking-item";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

export default async function Home() {
  const barbershop = await db.barbershop.findMany({})
  return (
    <div>
      <Header />
      <div className="p-5">
        <div className="pt-5">
          <h2 className="text-xl font-bold">Olá, Alan</h2>
          <p className="capitalize text-sm">
            {format(new Date(), "EEEE' ,' d 'de ' MMM", {
              locale: ptBR,
            })}
          </p>
        </div>
        <Search/>
        <div className="mt-5">
          <h2 className='text-sm mb-3 uppercase text-gray-400 font-bold'>Agendamentos</h2>
          <BookingItem />
        </div>
        <div className="mt-5">
          <h2 className='text-sm mb-3 uppercase text-gray-400 font-bold'>Recomendados</h2>
          <div  className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershop.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop}/>

            ))}
            <h1>{barbershop.name}</h1>

          </div>

        </div>
        
      </div>
    </div>
  );
}
