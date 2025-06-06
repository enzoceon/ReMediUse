
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { mockMedicines, featuredMedicines } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CalendarDays, 
  ShoppingCart, 
  AlertCircle, 
  Info, 
  Package, 
  User, 
  ArrowLeft, 
  Plus, 
  Minus, 
  Eye, 
  Shield,
  Check,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Interface for product key points
interface KeyPoint {
  text: string;
  type: "positive" | "neutral" | "warning";
}

// Product Key Points Component with improved styling
const ProductKeyPoints = ({ 
  title, 
  points, 
  className = "" 
}: { 
  title: string; 
  points: KeyPoint[];
  className?: string;
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <ul className="space-y-2.5">
        {points.map((point, index) => {
          // Color variants based on type
          const colors = {
            positive: "text-emerald-700 bg-emerald-50 border-emerald-200",
            neutral: "text-blue-700 bg-blue-50 border-blue-200",
            warning: "text-amber-700 bg-amber-50 border-amber-200"
          };
          
          return (
            <li 
              key={index}
              className={`flex items-start pl-2 pr-3 py-1.5 rounded-md border ${colors[point.type]}`}
            >
              <span className="flex-shrink-0 mt-1 mr-2 text-current">•</span>
              <span className="text-sm">{point.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Medicine verification badge component
const VerificationBadge = () => (
  <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
    <div className="flex items-center gap-2 mb-2">
      <Shield className="h-5 w-5 text-remedyblue-600" />
      <h4 className="font-medium">Verification & Safety</h4>
    </div>
    <p className="text-gray-700 text-sm ml-7">
      This medicine has been verified for authenticity and compliance.
    </p>
    <div className="flex items-center gap-2 text-green-600 mt-2 ml-7">
      <Check className="h-4 w-4" />
      <span className="text-sm">Quality verified</span>
    </div>
  </div>
);

const MedicineDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const medicine = mockMedicines.find(m => m.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity > 1 ? 'items' : 'item'} has been added to your cart`
    });
  };
  
  const handleBuyNow = () => {
    toast({
      title: "Proceeding to checkout",
      description: "Redirecting to payment page"
    });
    setTimeout(() => navigate("/cart"), 1500);
  };
  
  if (!medicine) {
    return (
      <MainLayout title="Medicine Not Found">
        <div className="flex flex-col items-center justify-center py-12">
          <AlertCircle size={48} className="text-red-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Medicine Not Found</h2>
          <p className="text-gray-500">The medicine you are looking for does not exist or has been removed.</p>
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
          <p className="text-gray-500">This medicine has expired and is no longer available.</p>
          <Button className="mt-6" onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </MainLayout>
    );
  }

  // Featured products
  const featuredProducts = mockMedicines
    .filter(m => featuredMedicines.includes(m.id))
    .slice(0, 4);

  return (
    <MainLayout title={medicine.name}>
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-4 pl-0 flex items-center"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
            <img 
              src={medicine.image} 
              alt={medicine.name}
              className="w-full h-64 md:h-80 object-cover" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80";
              }}
            />
          </div>
          
          {/* Product Info */}
          <div className="space-y-4">
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                {medicine.isDonation ? (
                  <Badge className="bg-remedygreen-500 hover:bg-remedygreen-600">Donation</Badge>
                ) : (
                  <Badge className="bg-remedyblue-500 hover:bg-remedyblue-600">For Sale</Badge>
                )}
                <Badge className={`${expiryStatus.color} hover:opacity-90`}>{expiryStatus.label}</Badge>
                <Badge variant="outline" className="bg-gray-50 hover:bg-gray-100">
                  {medicine.category}
                </Badge>
              </div>
              
              <h1 className="text-2xl font-bold">{medicine.name}</h1>
              
              {medicine.price !== null ? (
                <p className="text-2xl font-bold text-remedyblue-600 mt-2">
                  ₹{medicine.price.toFixed(2)}
                </p>
              ) : (
                <p className="text-2xl font-bold text-remedygreen-600 mt-2">
                  Free (Donation)
                </p>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-sm text-gray-600">
                <CalendarDays size={16} className="mr-2 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500">Manufacturing Date</p>
                  <p>{medicine.purchaseDate || "Not specified"}</p>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <CalendarDays size={16} className="mr-2 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500">Expiry Date</p>
                  <p>{new Date(medicine.expiryDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <Package size={16} className="mr-2 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500">Quantity</p>
                  <p>{medicine.quantity || "1 pack"}</p>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <Info size={16} className="mr-2 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500">Condition</p>
                  <p>{medicine.condition || "Unopened"}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm pt-1">
              <Shield size={16} className="text-remedyblue-500" />
              <span className="text-remedyblue-700">Verified by ReMediUse</span>
            </div>
            
            {!medicine.isDonation && (
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="mr-3">Quantity:</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                  >
                    <Minus size={14} />
                  </Button>
                  <span className="mx-3 min-w-8 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={increaseQuantity}
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                  >
                    <Plus size={14} />
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button className="w-full h-12 text-base hover:shadow-md transition-all" onClick={handleAddToCart}>
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </Button>
                  
                  <Button className="w-full h-12 text-base bg-remedyblue-600 hover:bg-remedyblue-700 hover:shadow-md transition-all" onClick={handleBuyNow}>
                    Buy Now
                  </Button>
                </div>
              </div>
            )}
            
            {medicine.isDonation && (
              <Button className="w-full h-12 text-base bg-remedygreen-600 hover:bg-remedygreen-700 hover:shadow-md transition-all">
                Request Donation
              </Button>
            )}
          </div>
        </div>
        
        <div className="mt-8">
          <Tabs defaultValue="description" className="w-full" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="dosage">Dosage</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="p-4 bg-white rounded-b-lg min-h-[200px] animate-fade-in">
              <ProductKeyPoints 
                title="Medicine Overview" 
                points={[
                  { text: "Relieves mild to moderate pain and reduces fever", type: "positive" },
                  { text: "Effective for headaches, toothaches, backaches, menstrual cramps", type: "positive" },
                  { text: "Helps with cold and flu symptoms", type: "positive" },
                  { text: "Non-drowsy formula", type: "neutral" },
                  { text: "Gentle on the stomach when taken as directed", type: "positive" },
                  ...(medicine.description ? [{ text: medicine.description, type: "neutral" as "neutral" }] : [])
                ]}
              />
              
              <ProductKeyPoints 
                title="Key Benefits" 
                className="mt-6"
                points={[
                  { text: "Fast-acting relief, usually within 30 minutes", type: "positive" },
                  { text: "Lasts for up to 6 hours", type: "positive" },
                  { text: "Suitable for adults and children over 12 years", type: "neutral" },
                  { text: "Clinically proven effectiveness", type: "positive" },
                  { text: "Widely recommended by healthcare professionals", type: "positive" }
                ]}
              />
            </TabsContent>
            
            <TabsContent value="dosage" className="p-4 bg-white rounded-b-lg min-h-[200px] animate-fade-in">
              <ProductKeyPoints 
                title="Recommended Dosage" 
                points={[
                  { text: "Adults and children 12 years and over: Take 1-2 tablets every 4-6 hours", type: "neutral" },
                  { text: "Do not take more than 8 tablets in 24 hours", type: "warning" },
                  { text: "Children under 12: Consult a doctor", type: "warning" },
                  { text: "Best taken with water", type: "neutral" },
                  { text: "Can be taken with or without food", type: "neutral" },
                  ...(medicine.dosage ? [{ text: medicine.dosage, type: "neutral" as "neutral" }] : [])
                ]}
              />
              
              <Alert className="mt-4 bg-blue-50 border-blue-200 text-blue-800">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Always follow your doctor's instructions for the correct dosage.
                </AlertDescription>
              </Alert>
              
              <ProductKeyPoints 
                title="Special Instructions" 
                className="mt-6"
                points={[
                  { text: "For short-term use only (less than 10 days)", type: "warning" },
                  { text: "If symptoms persist, consult a healthcare professional", type: "warning" },
                  { text: "Avoid alcohol while taking this medication", type: "warning" },
                  { text: "Take lowest effective dose for the shortest duration", type: "neutral" },
                  { text: "Keep track of all medications you are taking to avoid overdose", type: "warning" }
                ]}
              />
            </TabsContent>
            
            <TabsContent value="safety" className="p-4 bg-white rounded-b-lg min-h-[200px] animate-fade-in">
              {/* Verification badge moved to the top of Safety tab */}
              <VerificationBadge />
              
              <ProductKeyPoints 
                title="Important Safety Information" 
                className="mt-6"
                points={[
                  { text: "Do not use if allergic to any ingredients", type: "warning" },
                  { text: "Do not use with other medicines containing the same active ingredient", type: "warning" },
                  { text: "Consult a doctor if symptoms persist for more than 3 days", type: "warning" },
                  { text: "Keep out of reach of children", type: "warning" },
                  { text: "Store at room temperature away from moisture", type: "neutral" },
                  ...(medicine.safety ? [{ text: medicine.safety, type: "warning" as "warning" }] : [])
                ]}
              />
              
              <ProductKeyPoints 
                title="Warnings & Precautions" 
                className="mt-6"
                points={[
                  { text: "Not recommended for pregnant women in the third trimester", type: "warning" },
                  { text: "Use caution if you have liver or kidney disease", type: "warning" },
                  { text: "May cause drowsiness in some individuals", type: "warning" },
                  { text: "Seek immediate medical attention if you experience any severe side effects", type: "warning" },
                  { text: "Check with your doctor if you're taking any other medications", type: "warning" }
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Featured Products Section */}
        <div className="mt-12 mb-10">
          <h2 className="text-xl font-bold mb-4">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map(product => (
              <Card key={product.id} className="overflow-hidden hover:shadow-md transition-all duration-300 group">
                <div className="h-32 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80";
                    }}
                  />
                </div>
                <CardContent className="p-3">
                  <Badge className="mb-2 bg-yellow-500">Featured</Badge>
                  <h3 className="font-medium text-sm line-clamp-1">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    {product.price !== null ? (
                      <p className="text-sm font-bold text-remedyblue-600">₹{product.price.toFixed(2)}</p>
                    ) : (
                      <p className="text-sm font-medium text-remedygreen-600">Free</p>
                    )}
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="h-7 w-7 p-0 hover:bg-gray-100"
                      onClick={() => navigate(`/medicine/${product.id}`)}
                    >
                      <Eye size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MedicineDetails;
