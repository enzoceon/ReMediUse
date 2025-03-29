
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Eye, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export interface Medicine {
  id: string;
  name: string;
  image: string;
  price: number | null;
  expiryDate: string;
  location: string;
  category: string;
  isDonation: boolean;
  purchaseDate?: string;
  quantity?: number;
  condition?: string;
  description?: string;
  dosage?: string;
  safety?: string;
}

interface MedicineCardProps {
  medicine: Medicine;
}

const MedicineCard = ({ medicine }: MedicineCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();
  
  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };
  
  const handleViewDetails = () => {
    navigate(`/medicine/${medicine.id}`);
  };
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add to cart functionality would go here
    console.log("Added to cart:", medicine.name);
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
  
  // Don't render expired medicines
  if (expiryStatus.label === "Expired") {
    return null;
  }

  return (
    <Card className="medicine-card group relative overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="overflow-hidden relative">
        <img 
          src={medicine.image} 
          alt={medicine.name}
          className="w-full h-32 sm:h-36 object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <button 
          className={`absolute top-2 right-2 p-1.5 rounded-full ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-700'} transition-colors`}
          onClick={toggleWishlist}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={isWishlisted ? "white" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
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
        <div className="flex justify-between mt-3">
          <Button 
            size="sm" 
            variant="outline" 
            className="flex items-center gap-1 text-xs h-8 px-2"
            onClick={handleViewDetails}
          >
            <Eye size={14} /> View Details
          </Button>
          
          {!medicine.isDonation && (
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={16} />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicineCard;
