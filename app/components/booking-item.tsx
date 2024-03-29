import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";


const BookingItem = () => {
  return (
    <Card>
      <CardContent className=" py-0 flex justify-between p-0">

        <div className="flex flex-col gap-2 py-3 px-5">
          <Badge className="bg-[#221C30] text-primary hover:bg-[#221C30] w-fit">Confirmado</Badge>
          <h2 className="font-bold">Corte de Cabelo</h2>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"/>
                <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <h3 className="text-sm">Vintage Barber</h3>
        </div>
        </div>
       
        <div className="flex  items-center justify-center flex-col border-l border-solid border-secondary px-5">
            <p className="text-sm">Fevereiro</p>
            <p className="3xl">26</p>
            <p className="text-sm">09:45</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
