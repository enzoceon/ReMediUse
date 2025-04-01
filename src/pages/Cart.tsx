
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Minus, Trash2, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();
  
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const checkout = () => {
    toast({
      title: "Order placed successfully!",
      description: `Total amount: ₹${getTotalPrice()} has been deducted from your wallet.`
    });
    clearCart();
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <MainLayout title="Shopping Cart">
      <div className="max-w-md mx-auto pb-20">
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
            <div className="space-y-3 mb-20">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden animate-fade-in hover:shadow-sm transition-all duration-300">
                  <CardContent className="p-3">
                    <div className="flex">
                      <div className="h-20 w-20 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="h-full w-full object-cover" 
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80";
                          }} 
                        />
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-sm line-clamp-1">{item.name}</h3>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => removeFromCart(item.id)} 
                            className="h-6 w-6 p-0 text-red-500 hover:bg-red-50"
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                        <p className="text-remedyblue-600 font-medium mt-1 text-sm">₹{item.price}</p>
                        
                        <div className="flex items-center mt-2">
                          <div className="flex items-center border border-gray-200 rounded-md">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => decreaseQuantity(item.id)}
                              disabled={item.quantity <= 1}
                              className="h-6 w-6 p-0 rounded-none"
                            >
                              <Minus size={12} />
                            </Button>
                            <span className="mx-2 min-w-6 text-center text-sm">{item.quantity}</span>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => increaseQuantity(item.id)}
                              className="h-6 w-6 p-0 rounded-none"
                            >
                              <Plus size={12} />
                            </Button>
                          </div>
                          
                          <div className="ml-auto font-medium text-sm">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-md animate-slide-up">
              <div className="max-w-md mx-auto">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 text-sm">Subtotal</span>
                  <span className="font-medium">₹{getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 text-sm">Delivery</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between text-base font-bold mb-3">
                  <span>Total</span>
                  <span className="text-remedyblue-600">₹{getTotalPrice().toFixed(2)}</span>
                </div>
                <Button 
                  className="w-full bg-remedyblue-600 hover:bg-remedyblue-700 h-12" 
                  onClick={checkout}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12 animate-fade-in">
            <div className="h-20 w-20 mx-auto mb-4 text-gray-300">
              <ShoppingCart size={80} className="text-gray-200" />
            </div>
            <h2 className="text-lg font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-5 text-sm">Looks like you haven't added any medicines to your cart yet</p>
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
