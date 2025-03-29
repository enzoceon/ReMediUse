
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Minus, Trash2, ShoppingCart } from "lucide-react";
import { mockMedicines } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Initialize with some items from mock data
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { ...mockMedicines[0], quantity: 1 },
    { ...mockMedicines[2], quantity: 2 }
  ]);

  const increaseQuantity = (id: string) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart"
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const checkout = () => {
    toast({
      title: "Order placed successfully!",
      description: `Total amount: ₹${getTotalPrice()} has been deducted from your wallet.`
    });
    setCartItems([]);
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <MainLayout title="Shopping Cart">
      <div className="max-w-2xl mx-auto pb-20">
        <Button 
          variant="ghost" 
          className="mb-4 pl-0"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>

        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden animate-fade-in hover:shadow-md transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex p-4">
                      <div className="h-24 w-24 rounded-md overflow-hidden bg-gray-100">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.name}</h3>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => removeItem(item.id)} 
                            className="h-8 w-8 p-0 text-red-500 hover:bg-red-50"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                        <p className="text-remedyblue-600 font-medium mt-1">₹{item.price}</p>
                        
                        <div className="flex items-center mt-3">
                          <div className="flex items-center border border-gray-200 rounded-md">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => decreaseQuantity(item.id)}
                              disabled={item.quantity <= 1}
                              className="h-8 w-8 p-0 rounded-none"
                            >
                              <Minus size={14} />
                            </Button>
                            <span className="mx-3 min-w-8 text-center">{item.quantity}</span>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => increaseQuantity(item.id)}
                              className="h-8 w-8 p-0 rounded-none"
                            >
                              <Plus size={14} />
                            </Button>
                          </div>
                          
                          <div className="ml-auto font-medium">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mb-6 overflow-hidden animate-fade-in">
              <CardContent className="p-4">
                <h3 className="font-medium mb-3">You might also like</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {mockMedicines.slice(6, 9).map(medicine => (
                    <div 
                      key={medicine.id} 
                      className="bg-gray-50 rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => navigate(`/medicine/${medicine.id}`)}
                    >
                      <div className="h-20 w-full overflow-hidden rounded-md mb-2">
                        <img src={medicine.image} alt={medicine.name} className="h-full w-full object-cover" />
                      </div>
                      <p className="text-xs line-clamp-1 font-medium">{medicine.name}</p>
                      <div className="flex justify-between items-center mt-1">
                        {medicine.price !== null ? (
                          <p className="text-xs font-medium text-remedyblue-600">₹{medicine.price}</p>
                        ) : (
                          <Badge variant="outline" className="text-xs px-1 py-0 h-4 bg-remedygreen-50 text-remedygreen-600 border-remedygreen-200">
                            Free
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg animate-slide-up">
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold mb-4">
                  <span>Total</span>
                  <span className="text-remedyblue-600">₹{getTotalPrice().toFixed(2)}</span>
                </div>
                <Button 
                  className="w-full bg-remedyblue-600 hover:bg-remedyblue-700 h-12 text-lg" 
                  size="lg"
                  onClick={checkout}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16 animate-fade-in">
            <div className="h-24 w-24 mx-auto mb-6 text-gray-300">
              <ShoppingCart size={96} className="text-gray-200" />
            </div>
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any medicines to your cart yet</p>
            <Button onClick={() => navigate("/buy")} className="bg-remedyblue-600 hover:bg-remedyblue-700">
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Cart;
