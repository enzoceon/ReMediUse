
import { Medicine } from "@/components/medicine/MedicineCard";
import { getReliableImage } from "../images";

// First batch of medicines (1-10)
export const firstBatchMedicines: Medicine[] = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    image: getReliableImage(),
    price: 120,
    description: "Pain reliever and fever reducer for mild to moderate pain.",
    expiryDate: "2025-06-30",
    location: "Mumbai, Maharashtra",
    category: "Painkiller",
    isDonation: false
  },
  {
    id: "2",
    name: "Azithromycin 250mg",
    image: getReliableImage(),
    price: 350,
    description: "Antibiotic used to treat a variety of bacterial infections.",
    expiryDate: "2025-03-15",
    location: "Delhi, NCR",
    category: "Antibiotic",
    isDonation: false
  },
  {
    id: "3",
    name: "Vitamin D3 Supplements",
    image: getReliableImage(),
    price: null,
    description: "Vitamin D3 supplement to support bone health and immune function.",
    expiryDate: "2024-12-10",
    location: "Bangalore, Karnataka",
    category: "Vitamin",
    isDonation: true
  },
  {
    id: "4",
    name: "Insulin Pen",
    image: getReliableImage(),
    price: 1200,
    description: "Insulin delivery device for diabetes management.",
    expiryDate: "2025-01-20",
    location: "Chennai, Tamil Nadu",
    category: "Diabetes",
    isDonation: false
  },
  {
    id: "5",
    name: "Multivitamin Tablets",
    image: getReliableImage(),
    price: null,
    description: "Comprehensive multivitamin supplement with essential nutrients.",
    expiryDate: "2025-05-12",
    location: "Hyderabad, Telangana",
    category: "Vitamin",
    isDonation: true
  },
  {
    id: "6",
    name: "Levothyroxine 50mcg",
    image: getReliableImage(),
    price: 280,
    description: "Thyroid hormone replacement therapy for hypothyroidism.",
    expiryDate: "2024-11-05",
    location: "Pune, Maharashtra",
    category: "Thyroid",
    isDonation: false
  },
  {
    id: "7",
    name: "Omeprazole 20mg",
    image: getReliableImage(),
    price: 175,
    description: "Proton pump inhibitor used to reduce stomach acid production.",
    expiryDate: "2025-08-15",
    location: "Kolkata, West Bengal",
    category: "Antacid",
    isDonation: false
  },
  {
    id: "8",
    name: "Metformin 500mg",
    image: getReliableImage(),
    price: 145,
    description: "Oral diabetes medication that helps control blood sugar levels.",
    expiryDate: "2025-04-22",
    location: "Ahmedabad, Gujarat",
    category: "Diabetes",
    isDonation: false
  },
  {
    id: "9",
    name: "Folic Acid Tablets",
    image: getReliableImage(),
    price: null,
    description: "B vitamin supplement important for cell growth and metabolism.",
    expiryDate: "2025-02-18",
    location: "Jaipur, Rajasthan",
    category: "Vitamin",
    isDonation: true
  },
  {
    id: "10",
    name: "Amoxicillin 250mg",
    image: getReliableImage(),
    price: 320,
    description: "Broad-spectrum antibiotic used to treat a range of bacterial infections.",
    expiryDate: "2025-05-30",
    location: "Lucknow, Uttar Pradesh",
    category: "Antibiotic",
    isDonation: false
  }
];
