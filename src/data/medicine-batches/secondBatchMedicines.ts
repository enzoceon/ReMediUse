import { Medicine } from "@/components/medicine/MedicineCard";
import { getReliableImage } from "../images";

// Second batch of medicines (11-26)
export const secondBatchMedicines: Medicine[] = [
  {
    id: "11",
    name: "Atorvastatin 10mg",
    image: getReliableImage(),
    price: 225,
    description: "Cholesterol-lowering medication that reduces risk of heart disease.",
    expiryDate: "2025-07-19",
    location: "Bhopal, Madhya Pradesh",
    category: "Cholesterol",
    isDonation: false
  },
  {
    id: "12",
    name: "Calcium Supplements",
    image: getReliableImage(),
    price: 190,
    description: "Dietary supplement to support bone health and prevent calcium deficiency.",
    expiryDate: "2025-03-25",
    location: "Chandigarh, Punjab",
    category: "Vitamin",
    isDonation: false
  },
  {
    id: "13",
    name: "Omega-3 Fish Oil",
    image: getReliableImage(),
    price: null,
    description: "Supplement to support heart, brain and overall health.",
    expiryDate: "2025-06-10",
    location: "Kochi, Kerala",
    category: "Supplement",
    isDonation: true
  },
  {
    id: "14",
    name: "Cetirizine 10mg",
    image: getReliableImage(),
    price: 85,
    description: "Antihistamine used to relieve allergy symptoms.",
    expiryDate: "2025-09-05",
    location: "Nagpur, Maharashtra",
    category: "Antihistamine",
    isDonation: false
  },
  {
    id: "15",
    name: "Ibuprofen 400mg",
    image: getReliableImage(),
    price: 135,
    description: "Non-steroidal anti-inflammatory drug for pain relief.",
    expiryDate: "2025-04-15",
    location: "Patna, Bihar",
    category: "Painkiller",
    isDonation: false
  },
  {
    id: "16",
    name: "Loratadine 10mg",
    image: getReliableImage(),
    price: 95,
    description: "Antihistamine used to relieve allergy symptoms.",
    expiryDate: "2025-05-08",
    location: "Indore, Madhya Pradesh",
    category: "Antihistamine",
    isDonation: false
  },
  {
    id: "17",
    name: "B-Complex Vitamins",
    image: getReliableImage(),
    price: null,
    description: "Supplement containing essential B vitamins for overall health.",
    expiryDate: "2025-07-22",
    location: "Vadodara, Gujarat",
    category: "Vitamin",
    isDonation: true
  },
  {
    id: "18",
    name: "Metoprolol 25mg",
    image: getReliableImage(),
    price: 165,
    description: "Beta-blocker used to treat high blood pressure and heart conditions.",
    expiryDate: "2025-08-30",
    location: "Coimbatore, Tamil Nadu",
    category: "Blood Pressure",
    isDonation: false
  },
  {
    id: "19",
    name: "Aspirin 75mg",
    image: getReliableImage(),
    price: 75,
    description: "Antiplatelet medication used to prevent blood clots.",
    expiryDate: "2025-02-25",
    location: "Visakhapatnam, Andhra Pradesh",
    category: "Blood Thinner",
    isDonation: false
  },
  {
    id: "20",
    name: "Iron Supplements",
    image: getReliableImage(),
    price: null,
    description: "Supplement to prevent and treat iron deficiency anemia.",
    expiryDate: "2025-06-15",
    location: "Mysore, Karnataka",
    category: "Supplement",
    isDonation: true
  },
  {
    id: "21",
    name: "Amlodipine 5mg",
    image: getReliableImage(),
    price: 110,
    description: "Calcium channel blocker used to treat high blood pressure and chest pain.",
    expiryDate: "2025-05-10",
    location: "Nashik, Maharashtra",
    category: "Blood Pressure",
    isDonation: false
  },
  {
    id: "22",
    name: "Montelukast 10mg",
    image: getReliableImage(),
    price: 280,
    description: "Leukotriene receptor antagonist used to treat asthma and allergies.",
    expiryDate: "2025-07-05",
    location: "Ranchi, Jharkhand",
    category: "Asthma",
    isDonation: false
  },
  {
    id: "23",
    name: "Zinc Supplements",
    image: getReliableImage(),
    price: 125,
    description: "Dietary supplement to support immune function and wound healing.",
    expiryDate: "2025-04-20",
    location: "Raipur, Chhattisgarh",
    category: "Supplement",
    isDonation: false
  },
  {
    id: "24",
    name: "Fluconazole 150mg",
    image: getReliableImage(),
    price: 195,
    description: "Antifungal medication used to treat yeast infections.",
    expiryDate: "2025-03-10",
    location: "Thiruvananthapuram, Kerala",
    category: "Antifungal",
    isDonation: false
  },
  {
    id: "25",
    name: "Cough Syrup",
    image: getReliableImage(),
    price: null,
    description: "Medication used to relieve coughing and associated symptoms.",
    expiryDate: "2025-01-30",
    location: "Dehradun, Uttarakhand",
    category: "Cough & Cold",
    isDonation: true
  },
  {
    id: "26",
    name: "Metronidazole 400mg",
    image: getReliableImage(),
    price: 180,
    description: "Antibiotic and antiprotozoal medication used to treat various infections.",
    expiryDate: "2025-06-25",
    location: "Guwahati, Assam",
    category: "Antibiotic",
    isDonation: false
  }
];
