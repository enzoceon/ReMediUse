
import { useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { mockMedicines } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, ShoppingCart, AlertCircle, Info, Package, User } from "lucide-react";

const MedicineDetails = () => {
  const { id } = useParams();
  const medicine = mockMedicines.find(m => m.id === id);
  
  if (!medicine) {
    return (
      <MainLayout title="Medicine Not Found">
        <div className="flex flex-col items-center justify-center py-12">
          <AlertCircle size={48} className="text-red-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Medicine Not Found</h2>
          <p className="text-gray-500 dark:text-gray-400">The medicine you are looking for does not exist or has been removed.</p>
          <Button className="mt-6" onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </MainLayout>
    );
  }
  
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
  
  // Don't show expired medicines
  if (expiryStatus.label === "Expired") {
    return (
      <MainLayout title="Medicine Expired">
        <div className="flex flex-col items-center justify-center py-12">
          <AlertCircle size={48} className="text-red-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Medicine Expired</h2>
          <p className="text-gray-500 dark:text-gray-400">This medicine has expired and is no longer available.</p>
          <Button className="mt-6" onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={medicine.name}>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
            <img 
              src={medicine.image} 
              alt={medicine.name}
              className="w-full h-64 md:h-80 object-cover" 
            />
          </div>
          
          {/* Product Info */}
          <div className="space-y-4">
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                {medicine.isDonation ? (
                  <Badge className="bg-remedygreen-500">Donation</Badge>
                ) : (
                  <Badge className="bg-remedyblue-500">For Sale</Badge>
                )}
                <Badge className={expiryStatus.color}>{expiryStatus.label}</Badge>
                <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800">
                  {medicine.category}
                </Badge>
              </div>
              
              <h1 className="text-2xl font-bold">{medicine.name}</h1>
              
              {medicine.price !== null ? (
                <p className="text-2xl font-bold text-remedyblue-600 dark:text-remedyblue-400 mt-2">
                  ₹{medicine.price.toFixed(2)}
                </p>
              ) : (
                <p className="text-2xl font-bold text-remedygreen-600 dark:text-remedygreen-400 mt-2">
                  Free (Donation)
                </p>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CalendarDays size={16} className="mr-2 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Manufacturing Date</p>
                  <p>{medicine.purchaseDate || "Not specified"}</p>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CalendarDays size={16} className="mr-2 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Expiry Date</p>
                  <p>{new Date(medicine.expiryDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <Package size={16} className="mr-2 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Quantity</p>
                  <p>{medicine.quantity || "1 pack"}</p>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <Info size={16} className="mr-2 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Condition</p>
                  <p>{medicine.condition || "Unopened"}</p>
                </div>
              </div>
            </div>
            
            {!medicine.isDonation && (
              <Button className="w-full h-12 text-base bg-remedyblue-600 hover:bg-remedyblue-700 dark:bg-remedyblue-500 dark:hover:bg-remedyblue-600">
                <ShoppingCart size={18} className="mr-2" />
                Buy Now
              </Button>
            )}
            
            {medicine.isDonation && (
              <Button className="w-full h-12 text-base bg-remedygreen-600 hover:bg-remedygreen-700 dark:bg-remedygreen-500 dark:hover:bg-remedygreen-600">
                Request Donation
              </Button>
            )}
            
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <User size={18} className="text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Seller</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Contact Seller
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-8">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="dosage">Dosage</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="p-4 bg-white dark:bg-gray-800 rounded-b-lg min-h-[200px]">
              <p className="text-gray-700 dark:text-gray-300">
                {medicine.description || "Paracetamol is used to relieve mild to moderate pain from headaches, muscle aches, menstrual periods, colds and sore throats, toothaches, backaches, and reactions to vaccinations."}
              </p>
            </TabsContent>
            
            <TabsContent value="dosage" className="p-4 bg-white dark:bg-gray-800 rounded-b-lg min-h-[200px]">
              <p className="text-gray-700 dark:text-gray-300">
                {medicine.dosage || "Adults and children 12 years and over: Take 1-2 tablets every 4-6 hours as needed. Do not take more than 8 tablets in 24 hours."}
              </p>
            </TabsContent>
            
            <TabsContent value="safety" className="p-4 bg-white dark:bg-gray-800 rounded-b-lg min-h-[200px]">
              <p className="text-gray-700 dark:text-gray-300">
                {medicine.safety || "Do not use if you are allergic to paracetamol or any of the inactive ingredients. Do not use with other medicines containing paracetamol. Consult a doctor if symptoms persist."}
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default MedicineDetails;
