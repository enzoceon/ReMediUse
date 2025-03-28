
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar,
  Camera, 
  Upload, 
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MedicineFormProps {
  formType: "sell" | "donate";
  onSubmit: (data: any) => void;
}

const MedicineForm = ({ formType, onSubmit }: MedicineFormProps) => {
  const [photo, setPhoto] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  
  const handlePhotoUpload = () => {
    // Simulate photo upload with placeholder
    setPhoto("https://images.unsplash.com/photo-1618160702438-9b02ab6515c9");
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      onSubmit({ });
      // Reset form
      setStep(1);
      setPhoto(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="medicineName">Medicine Name</Label>
              <Input 
                id="medicineName" 
                placeholder="Enter medicine name" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input 
                id="category" 
                placeholder="e.g. Antibiotic, Painkiller" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="expiryDate" 
                  type="date" 
                  className="pl-10" 
                  required 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Enter medicine details" 
                rows={3} 
              />
            </div>
            
            {formType === "sell" && (
              <div className="space-y-2">
                <Label htmlFor="price">Price (₹)</Label>
                <Input 
                  id="price" 
                  type="number" 
                  placeholder="0.00" 
                  min="0" 
                  step="0.01" 
                  required 
                />
              </div>
            )}
            
            <div className="space-y-2">
              <Label>Upload Photo</Label>
              <Card className="bg-gray-50 cursor-pointer hover:bg-gray-100 border-dashed" onClick={handlePhotoUpload}>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  {photo ? (
                    <div className="relative w-full">
                      <img src={photo} alt="Medicine" className="w-full h-48 object-cover rounded-md" />
                      <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
                        <CheckCircle size={16} />
                      </div>
                    </div>
                  ) : (
                    <>
                      <Camera size={48} className="text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">Take a photo or upload image</p>
                      <div className="flex items-center mt-2">
                        <Upload size={16} className="text-remedyblue-500 mr-1" />
                        <span className="text-xs text-remedyblue-500">Upload</span>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-4">
              <h3 className="font-medium text-gray-800">Contact Details</h3>
              <p className="text-sm text-gray-500">
                Add your contact information so interested users can reach you
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Your full name" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" placeholder="Your phone number" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email address" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="Your address" rows={3} required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="idProof">ID Proof (Optional)</Label>
              <Card className="bg-gray-50 cursor-pointer hover:bg-gray-100 border-dashed">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Upload size={24} className="text-gray-400 mb-2" />
                  <p className="text-xs text-gray-500">Upload ID for verification</p>
                </CardContent>
              </Card>
            </div>
          </>
        )}
        
        <Button 
          type="submit" 
          className="w-full bg-remedyblue-600 hover:bg-remedyblue-700"
        >
          {step === 1 
            ? "Continue" 
            : formType === "sell" 
              ? "List for Sale" 
              : "Submit Donation"
          }
        </Button>
      </form>
    </div>
  );
};

export default MedicineForm;
