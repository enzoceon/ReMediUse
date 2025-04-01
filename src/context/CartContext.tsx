
import React, { createContext, useContext, useState, useEffect } from "react";
import { Medicine } from "@/components/medicine/MedicineCard";
import { mockMedicines } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

export interface CartItem extends Omit<Medicine, 'quantity'> {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Medicine) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Initialize with some items from mock data
    { ...mockMedicines[0], quantity: 1 },
    { ...mockMedicines[2], quantity: 2 }
  ]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Calculate total items in cart
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(total);
  }, [cartItems]);

  const addToCart = (item: Medicine) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        // Increase quantity if item already in cart
        return prevItems.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        // Add new item to cart with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart"
    });
  };

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

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      increaseQuantity, 
      decreaseQuantity, 
      clearCart,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
