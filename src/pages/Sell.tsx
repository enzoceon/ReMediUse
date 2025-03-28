
import MainLayout from "@/components/layout/MainLayout";
import MedicineForm from "@/components/medicine/MedicineForm";
import { toast } from "@/components/ui/use-toast";

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
          <h2 className="text-xl font-bold mb-2">List Your Medicine</h2>
          <p className="text-sm text-gray-500">
            Fill in the details about the medicine you want to sell
          </p>
        </div>
        
        <MedicineForm formType="sell" onSubmit={handleSubmit} />
      </div>
    </MainLayout>
  );
};

export default Sell;
