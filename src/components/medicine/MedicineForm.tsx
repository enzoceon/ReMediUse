import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Camera, 
  Upload, 
  CheckCircle,
  Video,
  Info,
  AlertTriangle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface MedicineFormProps {
  formType: "sell" | "donate";
  onSubmit: (data: any) => void;
}

const MedicineForm = ({ formType, onSubmit }: MedicineFormProps) => {
  const [photo, setPhoto] = useState<string | null>(null);
  const [video, setVideo] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [medicineName, setMedicineName] = useState("");
  const [category, setCategory] = useState("");
  const [manufacturingDate, setManufacturingDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [price, setPrice] = useState<number | null>(null);
  
  const calculateSuggestedPrice = () => {
    // This is a simple AI price suggestion algorithm
    // In a real app, this would be more sophisticated and use external data
    if (!manufacturingDate || !expiryDate || formType !== "sell") return null;
    
    const today = new Date();
    const manufacture = new Date(manufacturingDate);
    const expiry = new Date(expiryDate);
    
    // Base price (hypothetical market price)
    const basePrice = 100; // In a real app, this would come from a database or API
    
    // Calculate time elapsed since manufacturing as a percentage of total shelf life
    const totalShelfLife = expiry.getTime() - manufacture.getTime();
    const timeElapsed = today.getTime() - manufacture.getTime();
    const percentageUsed = timeElapsed / totalShelfLife;
    
    // Apply discount based on how much time has elapsed
    let discount = 0.25; // minimum 25% discount for reselling
    
    // Additional discount based on how close to expiry
    if (percentageUsed > 0.5) {
      discount = 0.25 + (percentageUsed - 0.5) * 0.5; // Up to 50% additional discount
    }
    
    // Ensure discount is between 25% and 75%
    discount = Math.min(0.75, Math.max(0.25, discount));
    
    // Calculate and round the suggested price
    const suggestedPrice = Math.round(basePrice * (1 - discount));
    
    return suggestedPrice;
  };
  
  const handlePhotoUpload = () => {
    // Simulate photo upload with placeholder
    setPhoto("https://images.unsplash.com/photo-1618160702438-9b02ab6515c9");
    toast({
      title: "Photo uploaded",
      description: "AI is analyzing your medicine image..."
    });
    
    // Simulate AI recognition
    setTimeout(() => {
      setMedicineName("Paracetamol 500mg");
      setCategory("Pain Relief");
      toast({
        title: "Medicine recognized",
        description: "AI has identified your medicine. Please verify the details.",
      });
    }, 1500);
  };
  
  const handleVideoUpload = () => {
    // Simulate video upload with placeholder
    setVideo("video-uploaded");
    toast({
      title: "Video uploaded",
      description: "Your video has been uploaded successfully"
    });
  };
  
  const updatePriceCalculation = () => {
    if (formType === "sell" && manufacturingDate && expiryDate) {
      const calculatedPrice = calculateSuggestedPrice();
      if (calculatedPrice) {
        setPrice(calculatedPrice);
        toast({
          title: "Price calculated",
          description: `AI suggested price: ₹${calculatedPrice}`,
        });
      }
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      updatePriceCalculation();
      setStep(2);
    } else {
      onSubmit({ 
        medicineName, 
        category, 
        manufacturingDate, 
        expiryDate,
        price,
        photo,
        video
      });
      // Reset form
      setStep(1);
      setPhoto(null);
      setVideo(null);
      setMedicineName("");
      setCategory("");
      setManufacturingDate("");
      setExpiryDate("");
      setPrice(null);
    }
  };

  return (
    <div className="animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="medicineName">Medicine Name</Label>
              <Input 
                id="medicineName" 
                placeholder="Enter medicine name" 
                required 
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
                className="hover:border-remedyblue-300 focus:border-remedyblue-500"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="manufacturingDate">Manufacturing Date</Label>
              <Input 
                id="manufacturingDate" 
                placeholder="DD/MM/YYYY" 
                required 
                value={manufacturingDate}
                onChange={(e) => {
                  setManufacturingDate(e.target.value);
                }}
                className="hover:border-remedyblue-300 focus:border-remedyblue-500"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input 
                id="expiryDate" 
                placeholder="DD/MM/YYYY" 
                required 
                value={expiryDate}
                onChange={(e) => {
                  setExpiryDate(e.target.value);
                }}
                className="hover:border-remedyblue-300 focus:border-remedyblue-500"
              />
            </div>
            
            <Alert variant="default" className="bg-blue-50 border-blue-200 text-blue-800">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Put all the details carefully, we are gonna verify all of them.
              </AlertDescription>
            </Alert>
            
            {formType === "sell" && manufacturingDate && expiryDate && (
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 animate-fade-in hover:shadow-md transition-all duration-300">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">AI Price Suggestion</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Based on manufacturing & expiry dates</span>
                  <span className="text-xl font-bold text-remedyblue-600 dark:text-remedyblue-400">
                    ₹{calculateSuggestedPrice() || "--"}
                  </span>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Upload Photo</Label>
                <Card className="bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 border-dashed hover:shadow-md transition-all duration-300" onClick={handlePhotoUpload}>
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
              
              <div className="space-y-2">
                <Label>Upload Video</Label>
                <Card className="bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 border-dashed hover:shadow-md transition-all duration-300" onClick={handleVideoUpload}>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    {video ? (
                      <div className="relative w-full flex justify-center items-center h-48">
                        <Video size={48} className="text-green-500" />
                        <p className="text-sm text-gray-700 mt-2">Video uploaded successfully</p>
                        <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
                          <CheckCircle size={16} />
                        </div>
                      </div>
                    ) : (
                      <>
                        <Video size={48} className="text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Add a short video of the medicine</p>
                        <div className="flex items-center mt-2">
                          <Upload size={16} className="text-remedyblue-500 mr-1" />
                          <span className="text-xs text-remedyblue-500">Upload</span>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Alert variant="default" className="bg-amber-50 border-amber-200 text-amber-800">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Verification & Safety: All medicines will be verified for authenticity and compliance.
              </AlertDescription>
            </Alert>
          </>
        ) : (
          <>
            <div className="text-center mb-4">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">Contact Details</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
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
              <Label htmlFor="pickupAddress">Pickup Address</Label>
              <Input id="pickupAddress" placeholder="Where to collect the medicine" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="homeAddress">Home Address</Label>
              <Input id="homeAddress" placeholder="Your home address" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="paymentDetails">Payment Details</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Button type="button" variant="outline" className="justify-start">Add UPI ID</Button>
                <Button type="button" variant="outline" className="justify-start">Add Bank Account</Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="idProof">ID Proof (Optional)</Label>
              <Card className="bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 border-dashed">
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
          className="w-full bg-remedyblue-600 hover:bg-remedyblue-700 dark:bg-remedyblue-500 dark:hover:bg-remedyblue-600 transition-all duration-300 hover:shadow-lg h-12"
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
