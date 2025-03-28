
import { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import MedicineGrid from "@/components/medicine/MedicineGrid";
import { mockMedicines } from "@/data/mockData";
import { Medicine } from "@/components/medicine/MedicineCard";

const Buy = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    // Filter medicines based on search term
    if (searchTerm) {
      const filtered = mockMedicines.filter(med => 
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setMedicines(filtered);
    } else {
      setMedicines(mockMedicines);
    }
  }, [searchTerm]);
  
  return (
    <MainLayout 
      title="Buy Medicines"
      showSearch={true}
      onSearch={setSearchTerm}
    >
      <MedicineGrid medicines={medicines} title="Available Medicines" />
    </MainLayout>
  );
};

export default Buy;
