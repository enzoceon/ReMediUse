
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { mockMedicines, featuredMedicines } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, ShoppingCart, AlertCircle, Info, Package, User, ArrowLeft, Plus, Minus, Eye } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const MedicineDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const medicine = mockMedicines.find(m => m.id === id);
  const [quantity, setQuantity] = useState(1);
  
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

  // Similar products (just display a few random products from the same category)
  const similarProducts = mockMedicines
    .filter(m => m.category === medicine.category && m.id !== medicine.id)
    .slice(0, 6);
    
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
          <div className="rounded-lg overflow-hidden bg-white shadow-sm">
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
                <Badge variant="outline" className="bg-gray-50">
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
            
            {!medicine.isDonation && (
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="mr-3">Quantity:</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="h-8 w-8 p-0"
                  >
                    <Minus size={14} />
                  </Button>
                  <span className="mx-3 min-w-8 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={increaseQuantity}
                    className="h-8 w-8 p-0"
                  >
                    <Plus size={14} />
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button className="w-full h-12 text-base" onClick={handleAddToCart}>
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </Button>
                  
                  <Button className="w-full h-12 text-base bg-remedyblue-600 hover:bg-remedyblue-700" onClick={handleBuyNow}>
                    Buy Now
                  </Button>
                </div>
              </div>
            )}
            
            {medicine.isDonation && (
              <Button className="w-full h-12 text-base bg-remedygreen-600 hover:bg-remedygreen-700">
                Request Donation
              </Button>
            )}
          </div>
        </div>
        
        <div className="mt-8">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="dosage">Dosage</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="p-4 bg-white rounded-b-lg min-h-[200px]">
              <h3 className="font-semibold mb-3">Medicine Overview</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Relieves mild to moderate pain and reduces fever</li>
                <li>Effective for headaches, toothaches, backaches, menstrual cramps</li>
                <li>Helps with cold and flu symptoms</li>
                <li>Non-drowsy formula</li>
                <li>Gentle on the stomach when taken as directed</li>
                {medicine.description && <li>{medicine.description}</li>}
              </ul>
              
              <h3 className="font-semibold mt-6 mb-3">Key Benefits</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Fast-acting relief, usually within 30 minutes</li>
                <li>Lasts for up to 6 hours</li>
                <li>Suitable for adults and children over 12 years</li>
                <li>Clinically proven effectiveness</li>
                <li>Widely recommended by healthcare professionals</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="dosage" className="p-4 bg-white rounded-b-lg min-h-[200px]">
              <h3 className="font-semibold mb-3">Recommended Dosage</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Adults and children 12 years and over: Take 1-2 tablets every 4-6 hours</li>
                <li>Do not take more than 8 tablets in 24 hours</li>
                <li>Children under 12: Consult a doctor</li>
                <li>Best taken with water</li>
                <li>Can be taken with or without food</li>
                {medicine.dosage && <li>{medicine.dosage}</li>}
              </ul>
              
              <h3 className="font-semibold mt-6 mb-3">Special Instructions</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>For short-term use only (less than 10 days)</li>
                <li>If symptoms persist, consult a healthcare professional</li>
                <li>Avoid alcohol while taking this medication</li>
                <li>Take lowest effective dose for the shortest duration</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="safety" className="p-4 bg-white rounded-b-lg min-h-[200px]">
              <h3 className="font-semibold mb-3">Important Safety Information</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Do not use if allergic to any ingredients</li>
                <li>Do not use with other medicines containing the same active ingredient</li>
                <li>Consult a doctor if symptoms persist for more than 3 days</li>
                <li>Keep out of reach of children</li>
                <li>Store at room temperature away from moisture</li>
                {medicine.safety && <li>{medicine.safety}</li>}
              </ul>
              
              <h3 className="font-semibold mt-6 mb-3">Warnings & Precautions</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Not recommended for pregnant women in the third trimester</li>
                <li>Use caution if you have liver or kidney disease</li>
                <li>May cause drowsiness in some individuals</li>
                <li>Seek immediate medical attention if you experience any severe side effects</li>
                <li>Check with your doctor if you're taking any other medications</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Featured Products Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map(product => (
              <Card key={product.id} className="overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="h-32 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
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
                      className="h-7 w-7 p-0"
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
        
        {/* Similar Products Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Similar Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {similarProducts.map(product => (
              <Card key={product.id} className="overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="h-32 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-3">
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
                      className="h-7 w-7 p-0"
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
