
import MainLayout from "@/components/layout/MainLayout";
import MedicineForm from "@/components/medicine/MedicineForm";
import { toast } from "@/components/ui/use-toast";

const Donate = () => {
  const handleSubmit = (data: any) => {
    console.log("Donation form submitted:", data);
    toast({
      title: "Medicine donation submitted",
      description: "Thank you for your donation! It will help someone in need.",
    });
  };
  
  return (
    <MainLayout title="Donate Medicine">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Donate Your Medicine</h2>
          <p className="text-sm text-gray-500">
            Your unused medicines can help those who need them but can't afford them
          </p>
        </div>
        
        <MedicineForm formType="donate" onSubmit={handleSubmit} />
      </div>
    </MainLayout>
  );
};

export default Donate;
