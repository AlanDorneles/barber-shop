import { Header } from "../components/ui/header";
import {format} from 'date-fns'
import { ptBR } from "date-fns/locale";


export default function Home() {
  return (
    <div>
      <Header/>
      <div className="px-5 pt-5">
      <h2 className="text-xl font-bold">Olá, Alan</h2>
      <p className="capitalize text-sm">{format(new Date(), "EEEE' ,' d 'de ' MMM", {
        locale:ptBR,
      })}</p>
      </div>
    </div>
  );
}
