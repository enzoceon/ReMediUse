
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Heart, Eye } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };
  
  const calculateExpiryStatus = () => {
    const today = new Date();
    const expiry = new Date(medicine.expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { label: "Expired", color: "bg-red-500" };
    if (diffDays < 30) return { label: "Expiring Soon", color: "bg-amber-500" };
    if (diffDays < 90) return { label: "Good Condition", color: "bg-green-500" };
    return { label: "Long Expiry", color: "bg-emerald-500" };
  };
  
  const expiryStatus = calculateExpiryStatus();

  return (
    <Card className="medicine-card group relative overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="overflow-hidden relative">
        <img 
          src={medicine.image} 
          alt={medicine.name}
          className="w-full h-32 sm:h-36 object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
          <Button size="sm" variant="ghost" className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <Eye size={16} className="mr-1" /> Quick View
          </Button>
        </div>
        <button 
          className={`absolute top-2 right-2 p-1.5 rounded-full ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-700'} transition-colors`}
          onClick={toggleWishlist}
        >
          <Heart size={16} className={isWishlisted ? 'fill-white' : ''} />
        </button>
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {medicine.isDonation ? (
            <Badge className="bg-remedygreen-500">Donation</Badge>
          ) : (
            <Badge className="bg-remedyblue-500">For Sale</Badge>
          )}
          <Badge className={expiryStatus.color}>{expiryStatus.label}</Badge>
        </div>
      </div>
      <CardContent className="p-2.5">
        <h3 className="font-medium text-sm leading-tight line-clamp-2 h-10">{medicine.name}</h3>
        <div className="flex justify-between items-center mt-1">
          {medicine.price !== null ? (
            <p className="text-base font-bold text-remedyblue-600 dark:text-remedyblue-400">
              ₹{medicine.price.toFixed(2)}
            </p>
          ) : (
            <p className="text-base font-medium text-remedygreen-600 dark:text-remedygreen-400">Free</p>
          )}
          <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800 text-xs px-1.5 py-0.5">
            {medicine.category}
          </Badge>
        </div>
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1.5">
          <CalendarDays size={12} className="mr-1" />
          <span>Exp: {new Date(medicine.expiryDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
        </div>
      </CardContent>
      <CardFooter className="px-2.5 py-1.5 bg-gray-50 dark:bg-gray-800 border-t flex items-center text-xs text-gray-500 dark:text-gray-400">
        <MapPin size={12} className="mr-1" />
        <span className="truncate">{medicine.location}</span>
      </CardFooter>
    </Card>
  );
};

export default MedicineCard;
