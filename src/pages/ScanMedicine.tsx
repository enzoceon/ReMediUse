
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScanLine, Camera, Upload, ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface ScanResult {
  name: string;
  manufacturer: string;
  expiryDate: string;
  dosage: string;
  price: string;
  description: string;
}

const ScanMedicine = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [scanning, setScanning] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  
  // Simulate scanning process
  const handleScan = () => {
    setScanning(true);
    
    // Simulate AI processing with a timeout
    setTimeout(() => {
      setScanning(false);
      setScanResult({
        name: "Paracetamol 500mg",
        manufacturer: "ABC Pharmaceuticals",
        expiryDate: "2025-06-30",
        dosage: "1-2 tablets every 4-6 hours",
        price: "120",
        description: "For relief of mild to moderate pain and fever"
      });
      
      toast({
        title: "Scan complete",
        description: "Medicine details have been extracted successfully"
      });
    }, 2000);
  };
  
  // Simulate upload process
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploading(true);
      
      // Simulate AI processing with a timeout
      setTimeout(() => {
        setUploading(false);
        setScanResult({
          name: "Azithromycin 250mg",
          manufacturer: "XYZ Healthcare",
          expiryDate: "2025-03-15",
          dosage: "1 tablet daily for 3-5 days",
          price: "350",
          description: "Antibiotic used to treat bacterial infections"
        });
        
        toast({
          title: "Image processed",
          description: "Medicine details have been extracted successfully"
        });
      }, 2000);
    }
  };
  
  const handleContinue = () => {
    toast({
      title: "Details saved",
      description: "Medicine details have been saved and are ready for listing"
    });
    navigate("/sell");
  };
  
  return (
    <MainLayout title="Scan Medicine">
      <div className="max-w-2xl mx-auto pb-20">
        <Button 
          variant="ghost" 
          className="mb-4 pl-0 flex items-center"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>
        
        <h1 className="text-2xl font-bold mb-2">Medicine Scanner</h1>
        <p className="text-gray-600 mb-6">Scan your medicine or upload a photo to automatically extract all details</p>
        
        {!scanResult ? (
          <Tabs defaultValue="scan" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="scan">Scan Medicine</TabsTrigger>
              <TabsTrigger value="upload">Upload Image</TabsTrigger>
            </TabsList>
            
            <TabsContent value="scan" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video bg-gray-100 rounded-lg flex flex-col items-center justify-center mb-6 border-2 border-dashed border-gray-300">
                    {scanning ? (
                      <div className="text-center">
                        <div className="w-16 h-16 border-t-4 border-remedyblue-500 border-solid rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-500">Scanning medicine...</p>
                      </div>
                    ) : (
                      <>
                        <ScanLine size={64} className="text-gray-400 mb-4" />
                        <p className="text-gray-500 text-center">Position the medicine box in frame</p>
                      </>
                    )}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      onClick={handleScan} 
                      disabled={scanning} 
                      className="flex-1 h-12"
                    >
                      <Camera className="mr-2 h-5 w-5" />
                      {scanning ? "Scanning..." : "Start Scanning"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="upload" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div 
                    className="aspect-video bg-gray-100 rounded-lg flex flex-col items-center justify-center mb-6 border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => document.getElementById('medicine-image')?.click()}
                  >
                    {uploading ? (
                      <div className="text-center">
                        <div className="w-16 h-16 border-t-4 border-remedyblue-500 border-solid rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-500">Processing image...</p>
                      </div>
                    ) : (
                      <>
                        <Upload size={64} className="text-gray-400 mb-4" />
                        <p className="text-gray-500 text-center">Click to upload an image of the medicine</p>
                        <p className="text-xs text-gray-400 mt-2">Supports JPG, PNG, HEIC</p>
                      </>
                    )}
                  </div>
                  
                  <Input 
                    id="medicine-image" 
                    type="file" 
                    className="hidden" 
                    accept="image/*" 
                    onChange={handleUpload}
                    disabled={uploading}
                  />
                  
                  <Button 
                    onClick={() => document.getElementById('medicine-image')?.click()} 
                    className="w-full h-12"
                    disabled={uploading}
                  >
                    <Upload className="mr-2 h-5 w-5" />
                    {uploading ? "Processing..." : "Upload Image"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        ) : (
          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Detected Medicine Details</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Medicine Name</Label>
                  <Input id="name" value={scanResult.name} className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="manufacturer">Manufacturer</Label>
                  <Input id="manufacturer" value={scanResult.manufacturer} className="mt-1" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" type="date" value={scanResult.expiryDate} className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="price">Price (₹)</Label>
                    <Input id="price" type="number" value={scanResult.price} className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="dosage">Dosage</Label>
                  <Input id="dosage" value={scanResult.dosage} className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" value={scanResult.description} className="mt-1" />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    className="flex-1" 
                    onClick={() => setScanResult(null)}
                  >
                    Scan Again
                  </Button>
                  
                  <Button
                    className="flex-1 bg-remedyblue-600"
                    onClick={handleContinue}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </MainLayout>
  );
};

export default ScanMedicine;
