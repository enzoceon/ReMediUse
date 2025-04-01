
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { getReliableImage } from "@/data/images";
import { useCart } from "@/context/CartContext";

export interface Medicine {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  manufacturer?: string;
  isDonation?: boolean;
  dosage?: string;
  sideEffects?: string[];
  usage?: string;
  manufactureDate?: string;
  expiryDate?: string;
  batchNumber?: string;
  ratings?: number;
  reviews?: number;
}

interface MedicineCardProps {
  medicine: Medicine;
  style?: "compact" | "detailed";
}

const MedicineCard = ({ medicine, style = "detailed" }: MedicineCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(medicine);
  };

  if (style === "compact") {
    return (
      <Card className="overflow-hidden h-full hover:shadow-md transition-all duration-300">
        <Link to={`/medicine/${medicine.id}`} className="h-full flex flex-col">
          <div className="relative h-40 bg-gray-100">
            <img 
              src={medicine.image} 
              alt={medicine.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = getReliableImage();
              }}
            />
            {medicine.isDonation && (
              <Badge className="absolute top-2 right-2 bg-emerald-500 hover:bg-emerald-600">
                Free
              </Badge>
            )}
          </div>
          <CardContent className="p-3 flex-1 flex flex-col">
            <h3 className="font-medium text-sm mb-1 line-clamp-1">{medicine.name}</h3>
            <div className="flex items-center justify-between mt-auto">
              <div className="text-remedyblue-600 font-bold">
                {medicine.isDonation ? 'Donated' : `₹${medicine.price}`}
              </div>
              <Button 
                size="sm" 
                variant="outline" 
                className="h-8 w-8 p-0 rounded-full"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={14} />
              </Button>
            </div>
          </CardContent>
        </Link>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-300 animate-fade-in">
      <Link to={`/medicine/${medicine.id}`}>
        <div className="flex items-stretch">
          <div className="h-28 w-28 bg-gray-100 flex-shrink-0">
            <img 
              src={medicine.image} 
              alt={medicine.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = getReliableImage();
              }}
            />
          </div>
          <CardContent className="p-3 flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium text-sm mb-1 line-clamp-1">{medicine.name}</h3>
                <p className="text-xs text-gray-500 mb-1">{medicine.category}</p>
                <p className="text-xs line-clamp-2 text-gray-600 mb-2">{medicine.description}</p>
              </div>
              {medicine.isDonation && (
                <Badge className="bg-emerald-500 hover:bg-emerald-600 h-6">
                  Free
                </Badge>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="text-remedyblue-600 font-bold">
                {medicine.isDonation ? 'Donated' : `₹${medicine.price}`}
              </div>
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="h-8 w-8 p-0"
                >
                  <Heart size={16} className="text-gray-400" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="h-8"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={16} className="mr-1" />
                  Add
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
};

export default MedicineCard;
