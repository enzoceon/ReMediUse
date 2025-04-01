
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
    isDonation: false
  },
  {
    id: "98",
    name: "Nifedipine 10mg",
    image: getReliableImage(),
    price: 135,
    expiryDate: "2025-07-15",
    location: "Manali, Himachal Pradesh",
    category: "Blood Pressure",
    isDonation: false
  },
  {
    id: "99",
    name: "Thiamine 100mg",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-10-01",
    location: "Dalhousie, Himachal Pradesh",
    category: "Vitamin B1",
    isDonation: true
  },
  {
    id: "100",
    name: "Acyclovir 400mg",
    image: getReliableImage(),
    price: 210,
    expiryDate: "2025-09-05",
    location: "Palampur, Himachal Pradesh",
    category: "Antiviral",
    isDonation: false
  }
];
