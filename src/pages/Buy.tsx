
import { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import MedicineGrid from "@/components/medicine/MedicineGrid";
import { mockMedicines } from "@/data/mockData";
import { Medicine } from "@/components/medicine/MedicineCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full bg-gray-100">
          <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
          <TabsTrigger value="pharmacy" className="flex-1">Pharmacy</TabsTrigger>
          <TabsTrigger value="nearby" className="flex-1">Nearby</TabsTrigger>
        </TabsList>
      </Tabs>
      
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
