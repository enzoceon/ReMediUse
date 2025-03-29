
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";

// Pages
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Donate from "./pages/Donate";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import MedicineDetails from "./pages/MedicineDetails";
import NotificationPreferences from "./pages/NotificationPreferences";
import PrivacySettings from "./pages/PrivacySettings";
import Support from "./pages/Support";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
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
            <Route path="/notifications" element={<NotificationPreferences />} />
            <Route path="/privacy" element={<PrivacySettings />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
