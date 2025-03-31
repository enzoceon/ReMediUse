
import { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import MedicineGrid from "@/components/medicine/MedicineGrid";
import { mockMedicines } from "@/data/mockData";
import { Medicine } from "@/components/medicine/MedicineCard";

const Buy = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    // Filter medicines based on search term and only show items for sale (not donations)
    const forSaleMedicines = mockMedicines.filter(med => !med.isDonation);
    
    if (searchTerm) {
      const filtered = forSaleMedicines.filter(med => 
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setMedicines(filtered);
    } else {
      setMedicines(forSaleMedicines);
    }
  }, [searchTerm]);
  
  return (
    <MainLayout 
      title="Buy Medicines"
      showSearch={true}
      onSearch={setSearchTerm}
    >
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">Find Quality Medicines</h1>
        <p className="text-gray-600 dark:text-gray-400">Browse verified medicines at great prices</p>
      </div>
      
      <MedicineGrid 
        medicines={medicines} 
        title="Available For Sale" 
        showDonations={false} 
      />
    </MainLayout>
  );
};

export default Buy;
