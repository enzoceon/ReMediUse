
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export interface Medicine {
  id: string;
  name: string;
  image: string;
  price: number | null;
  expiryDate: string;
  location: string;
  category: string;
  isDonation: boolean;
}

interface MedicineCardProps {
  medicine: Medicine;
}

const MedicineCard = ({ medicine }: MedicineCardProps) => {
  return (
    <Card className="medicine-card">
      <div className="relative">
        <img 
          src={medicine.image} 
          alt={medicine.name}
          className="w-full h-48 object-cover" 
        />
        {medicine.isDonation ? (
          <Badge className="absolute top-2 right-2 bg-remedygreen-500">Donation</Badge>
        ) : (
          <Badge className="absolute top-2 right-2 bg-remedyblue-500">For Sale</Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{medicine.name}</h3>
        <div className="flex justify-between items-center mb-2">
          {medicine.price !== null ? (
            <p className="text-lg font-bold text-remedyblue-600">
              ₹{medicine.price.toFixed(2)}
            </p>
          ) : (
            <p className="text-lg font-medium text-remedygreen-600">Free</p>
          )}
          <Badge variant="outline" className="bg-gray-100">
            {medicine.category}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <CalendarDays size={14} className="mr-1" />
          <span>Expires: {medicine.expiryDate}</span>
        </div>
      </CardContent>
      <CardFooter className="px-4 py-2 bg-gray-50 border-t flex items-center text-sm text-gray-500">
        <MapPin size={14} className="mr-1" />
        <span>{medicine.location}</span>
      </CardFooter>
    </Card>
  );
};

export default MedicineCard;
