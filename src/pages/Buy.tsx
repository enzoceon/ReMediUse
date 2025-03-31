
import { useState, useEffect, useRef } from "react";
import MainLayout from "@/components/layout/MainLayout";
import MedicineGrid from "@/components/medicine/MedicineGrid";
import { mockMedicines } from "@/data/mockData";
import { Medicine } from "@/components/medicine/MedicineCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Buy = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [tabsTop, setTabsTop] = useState(0);
  
  // Get initial position of tabs
  useEffect(() => {
    if (tabsRef.current) {
      setTabsTop(tabsRef.current.offsetTop);
    }
  }, []);
  
  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > tabsTop) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabsTop]);
  
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
      
      <div className={isScrolled ? "pt-16" : ""}>
        <div 
          ref={tabsRef} 
          className={`${isScrolled ? "fixed top-0 left-0 right-0 z-10 bg-white shadow-md px-4 py-1 transition-all duration-300 animate-slide-in-bottom" : ""}`}
        >
          <Tabs defaultValue="all">
            <TabsList className="w-full mb-4 bg-gray-100">
              <TabsTrigger value="all" className="flex-1">All Medicines</TabsTrigger>
              <TabsTrigger value="prescribed" className="flex-1">Prescribed</TabsTrigger>
              <TabsTrigger value="otc" className="flex-1">Over the Counter</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <Tabs defaultValue="all">
          <div className={`${!isScrolled ? "block" : "hidden"}`}>
            <TabsList className="w-full mb-4 bg-gray-100">
              <TabsTrigger value="all" className="flex-1">All Medicines</TabsTrigger>
              <TabsTrigger value="prescribed" className="flex-1">Prescribed</TabsTrigger>
              <TabsTrigger value="otc" className="flex-1">Over the Counter</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all">
            <MedicineGrid 
              medicines={medicines} 
              title="Available For Sale" 
              showDonations={false} 
            />
          </TabsContent>
          
          <TabsContent value="prescribed">
            <MedicineGrid 
              medicines={medicines.filter(med => med.category.includes("Pain") || med.category.includes("Antibiotic"))} 
              title="Prescription Medicines" 
              showDonations={false} 
            />
          </TabsContent>
          
          <TabsContent value="otc">
            <MedicineGrid 
              medicines={medicines.filter(med => med.category.includes("Vitamin") || med.category.includes("Supplement"))} 
              title="OTC Medicines" 
              showDonations={false} 
            />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Buy;
