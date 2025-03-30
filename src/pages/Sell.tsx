
import MainLayout from "@/components/layout/MainLayout";
import MedicineForm from "@/components/medicine/MedicineForm";
import { toast } from "@/components/ui/use-toast";
import { PlusCircle, ArrowRight, CheckCircle, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Sell = () => {
  const handleSubmit = (data: any) => {
    console.log("Sell form submitted:", data);
    toast({
      title: "Medicine listed for sale",
      description: "Your medicine has been listed for sale successfully!",
    });
  };
  
  return (
    <MainLayout title="Sell Medicine">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <PlusCircle size={24} className="text-remedyblue-600" />
            <h2 className="text-xl font-bold">List Your Medicine</h2>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Fill in the details about the medicine you want to sell
          </p>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-8 h-8 rounded-full bg-remedyblue-600 text-white flex items-center justify-center">
              1
            </div>
            <div className="flex-1">
              <p className="font-medium">Take photo and enter details</p>
              <p className="text-xs text-gray-500">Capture clear images of medicine and packaging</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <ArrowRight size={16} className="ml-3 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-8 h-8 rounded-full bg-remedyblue-600 text-white flex items-center justify-center">
              2
            </div>
            <div className="flex-1">
              <p className="font-medium">AI suggests the best price</p>
              <p className="text-xs text-gray-500">Smart pricing based on medicine condition and demand</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <ArrowRight size={16} className="ml-3 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-remedyblue-600 text-white flex items-center justify-center">
              3
            </div>
            <div className="flex-1">
              <p className="font-medium">Get offers from interested buyers</p>
              <p className="text-xs text-gray-500">Connect with verified buyers in your area</p>
            </div>
          </div>
        </div>
        
        <Card className="mb-6 border-remedyblue-100 bg-remedyblue-50 dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-4 flex items-start gap-3">
            <CheckCircle size={20} className="text-remedyblue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-remedyblue-700 dark:text-remedyblue-400">AI Price Suggestion</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our AI calculates the optimal price based on manufacturing date, expiry date and market demand.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <MedicineForm formType="sell" onSubmit={handleSubmit} />
      </div>
    </MainLayout>
  );
};

export default Sell;
