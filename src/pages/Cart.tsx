
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Minus, Trash2 } from "lucide-react";
import { mockMedicines } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

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
                <Card key={item.id} className="overflow-hidden animate-fade-in">
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
                            className="h-8 w-8 p-0 text-red-500"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                        <p className="text-remedyblue-600 font-medium mt-1">₹{item.price}</p>
                        
                        <div className="flex items-center mt-3">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => decreaseQuantity(item.id)}
                            disabled={item.quantity <= 1}
                            className="h-8 w-8 p-0"
                          >
                            <Minus size={14} />
                          </Button>
                          <span className="mx-3 min-w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => increaseQuantity(item.id)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus size={14} />
                          </Button>
                          
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
            
            <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-200 p-4">
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
                  className="w-full bg-remedyblue-600 hover:bg-remedyblue-700" 
                  size="lg"
                  onClick={checkout}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="h-24 w-24 mx-auto mb-6 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any medicines to your cart yet</p>
            <Button onClick={() => navigate("/buy")}>
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Cart;
