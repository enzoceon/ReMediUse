
import { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import MedicineGrid from "@/components/medicine/MedicineGrid";
import { mockMedicines } from "@/data/mockData";
import { Medicine } from "@/components/medicine/MedicineCard";
import { useAuth } from "@/context/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginButton from "@/components/auth/LoginButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  const { isAuthenticated, login } = useAuth();
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
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
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-remedyblue-600 mb-2">ReMediUse</h1>
            <p className="text-gray-600">Buy, sell, or donate unused medicines</p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-center">Welcome</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-6 text-center">
                Please sign in to continue to the application
              </p>
              <LoginButton onLogin={login} />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  
  return (
    <MainLayout 
      title="ReMediUse"
      showSearch={true}
      onSearch={setSearchTerm}
    >
      <Tabs 
        defaultValue="all" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="w-full mb-4 bg-gray-100">
          <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
          <TabsTrigger value="sale" className="flex-1">For Sale</TabsTrigger>
          <TabsTrigger value="donation" className="flex-1">Donations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-2">Available Medicines</h1>
            <p className="text-gray-600 dark:text-gray-400">Browse all medicines in our marketplace</p>
          </div>
          <MedicineGrid medicines={medicines} title="All Medicines" />
        </TabsContent>
        
        <TabsContent value="sale">
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-2">Medicines For Sale</h1>
            <p className="text-gray-600 dark:text-gray-400">Browse verified medicines at great prices</p>
          </div>
          <MedicineGrid 
            medicines={medicines.filter(med => !med.isDonation)} 
            title="Available For Sale" 
            showDonations={false}
          />
        </TabsContent>
        
        <TabsContent value="donation">
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-2">Donated Medicines</h1>
            <p className="text-gray-600 dark:text-gray-400">Browse medicines available for donation</p>
          </div>
          <MedicineGrid 
            medicines={medicines.filter(med => med.isDonation)} 
            title="Available Donations" 
          />
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Home;
