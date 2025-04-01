
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

// Pages
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Donate from "./pages/Donate";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import MedicineDetails from "./pages/MedicineDetails";
import Notifications from "./pages/Notifications";
import PrivacySettings from "./pages/PrivacySettings";
import Support from "./pages/Support";
import About from "./pages/About";
import Wallet from "./pages/Wallet";
import Cart from "./pages/Cart";
import ScanMedicine from "./pages/ScanMedicine";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/medicine/:id" element={<MedicineDetails />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/privacy" element={<PrivacySettings />} />
              <Route path="/support" element={<Support />} />
              <Route path="/about" element={<About />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/scan" element={<ScanMedicine />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
