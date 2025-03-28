
import { useState } from "react";
import MedicineCard, { Medicine } from "./MedicineCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface MedicineGridProps {
  medicines: Medicine[];
  title?: string;
}

const MedicineGrid = ({ medicines, title }: MedicineGridProps) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div>
      {title && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={16} />
            <span>Filters</span>
          </Button>
        </div>
      )}
      
      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="justify-start">Category</Button>
            <Button variant="outline" size="sm" className="justify-start">Price</Button>
            <Button variant="outline" size="sm" className="justify-start">Location</Button>
            <Button variant="outline" size="sm" className="justify-start">Expiry Date</Button>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {medicines.map((medicine) => (
          <MedicineCard key={medicine.id} medicine={medicine} />
        ))}
      </div>
      
      {medicines.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No medicines found</p>
        </div>
      )}
    </div>
  );
};

export default MedicineGrid;
