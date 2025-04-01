
import { Medicine } from "@/components/medicine/MedicineCard";
import { getReliableImage } from "../images";

// Fifth batch of medicines (97-100) - Additional medicines
export const fifthBatchMedicines: Medicine[] = [
  {
    id: "97",
    name: "Gabapentin 100mg",
    image: getReliableImage(),
    price: 185,
    expiryDate: "2025-08-20",
    location: "Kullu, Himachal Pradesh",
    category: "Nerve Pain",
    isDonation: false,
    description: "Effective for treating nerve pain and certain types of seizures. May cause dizziness or drowsiness.",
    purchaseDate: "2023-08-15",
    quantity: 30,
    condition: "Sealed package",
    safety: "Do not stop taking this medication suddenly without consulting your doctor."
  },
  {
    id: "98",
    name: "Nifedipine 10mg",
    image: getReliableImage(),
    price: 135,
    expiryDate: "2025-07-15",
    location: "Manali, Himachal Pradesh",
    category: "Blood Pressure",
    isDonation: false,
    description: "Used to treat high blood pressure and manage certain types of angina. Helps relax blood vessels for better blood flow.",
    purchaseDate: "2023-06-10",
    quantity: 28,
    condition: "Unopened",
    safety: "May cause dizziness or light-headedness, especially when standing up quickly."
  },
  {
    id: "99",
    name: "Thiamine 100mg",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-10-01",
    location: "Dalhousie, Himachal Pradesh",
    category: "Vitamin B1",
    isDonation: true,
    description: "Essential vitamin for energy metabolism and nervous system function. Supports cardiovascular health.",
    purchaseDate: "2023-09-05",
    quantity: 60,
    condition: "New, sealed bottle",
    safety: "Generally well-tolerated. Take with food to reduce possibility of upset stomach."
  },
  {
    id: "100",
    name: "Acyclovir 400mg",
    image: getReliableImage(),
    price: 210,
    expiryDate: "2025-09-05",
    location: "Palampur, Himachal Pradesh",
    category: "Antiviral",
    isDonation: false,
    description: "Antiviral medication effective against herpes viruses. Helps reduce severity and frequency of outbreaks.",
    purchaseDate: "2023-07-20",
    quantity: 25,
    condition: "Sealed package",
    safety: "Maintain adequate hydration while taking this medication. May cause headache or nausea."
  }
];
