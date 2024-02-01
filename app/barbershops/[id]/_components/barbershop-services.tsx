import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Service } from "@prisma/client";
import Image from "next/image";

interface ServiceItemProp {
  service: Service;
}

const ServiceItem = ({ service }: ServiceItemProp) => {
  return (
    <div>
      <Card>
        <CardContent className="p-3 w-full mt-2 ">
          <div className="flex  items-center gap-4 w-full">
            <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
              <Image
                src={service.imageUrl}
                alt={service.name}
                className="rounded-lg"
                style={{ objectFit: "cover" }}
                fill
              />
            </div>
            <div className="flex flex-col w-full">
              <h3 className="font-bold ">{service.name}</h3>
              <p className="text-sm text-gray-400 ">{service.description}</p>
              <div className="flex justify-between items-center mt-8">
                <p className="text-primary font-bold text-sm">{Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(service.price))}</p>
                <Button variant={"secondary"}>Reservar</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceItem;
