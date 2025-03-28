
import { Medicine } from "@/components/medicine/MedicineCard";

export const mockMedicines: Medicine[] = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    price: 120,
    expiryDate: "2025-06-30",
    location: "Mumbai, Maharashtra",
    category: "Painkiller",
    isDonation: false
  },
  {
    id: "2",
    name: "Azithromycin 250mg",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    price: 350,
    expiryDate: "2025-03-15",
    location: "Delhi, NCR",
    category: "Antibiotic",
    isDonation: false
  },
  {
    id: "3",
    name: "Vitamin D3 Supplements",
    image: "https://images.unsplash.com/photo-1550572017-67e2deb2bfca",
    price: null,
    expiryDate: "2024-12-10",
    location: "Bangalore, Karnataka",
    category: "Vitamin",
    isDonation: true
  },
  {
    id: "4",
    name: "Insulin Pen",
    image: "https://images.unsplash.com/photo-1631549916768-4119b4220974",
    price: 1200,
    expiryDate: "2025-01-20",
    location: "Chennai, Tamil Nadu",
    category: "Diabetes",
    isDonation: false
  },
  {
    id: "5",
    name: "Multivitamin Tablets",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
    price: null,
    expiryDate: "2025-05-12",
    location: "Hyderabad, Telangana",
    category: "Vitamin",
    isDonation: true
  },
  {
    id: "6",
    name: "Levothyroxine 50mcg",
    image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462",
    price: 280,
    expiryDate: "2024-11-05",
    location: "Pune, Maharashtra",
    category: "Thyroid",
    isDonation: false
  }
];

export const user = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+91 9876543210",
  location: "Mumbai, Maharashtra",
  isLoggedIn: false
};
