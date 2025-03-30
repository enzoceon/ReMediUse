
import { Medicine } from "@/components/medicine/MedicineCard";
import { getReliableImage } from "./images";

// First batch of medicines (1-10)
export const firstBatchMedicines: Medicine[] = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    image: getReliableImage(),
    price: 120,
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
    expiryDate: "2025-05-30",
    location: "Lucknow, Uttar Pradesh",
    category: "Antibiotic",
    isDonation: false
  }
];

// Second batch of medicines (11-26)
export const secondBatchMedicines: Medicine[] = [
  {
    id: "11",
    name: "Atorvastatin 10mg",
    image: getReliableImage(),
    price: 225,
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
    expiryDate: "2025-06-25",
    location: "Guwahati, Assam",
    category: "Antibiotic",
    isDonation: false
  }
];

// Third batch of medicines (27-46)
export const thirdBatchMedicines: Medicine[] = [
  {
    id: "27",
    name: "Diclofenac Sodium 50mg",
    image: getReliableImage(),
    price: 140,
    expiryDate: "2025-09-10",
    location: "Bhubaneswar, Odisha",
    category: "Painkiller",
    isDonation: false
  },
  {
    id: "28",
    name: "Pantoprazole 40mg",
    image: getReliableImage(),
    price: 220,
    expiryDate: "2025-08-05",
    location: "Surat, Gujarat",
    category: "Antacid",
    isDonation: false
  },
  {
    id: "29",
    name: "Losartan 50mg",
    image: getReliableImage(),
    price: 185,
    expiryDate: "2025-07-15",
    location: "Varanasi, Uttar Pradesh",
    category: "Blood Pressure",
    isDonation: false
  },
  {
    id: "30",
    name: "Escitalopram 10mg",
    image: getReliableImage(),
    price: 230,
    expiryDate: "2025-05-25",
    location: "Amritsar, Punjab",
    category: "Antidepressant",
    isDonation: false
  },
  {
    id: "31",
    name: "Pregabalin 75mg",
    image: getReliableImage(),
    price: 320,
    expiryDate: "2025-06-18",
    location: "Mangalore, Karnataka",
    category: "Nerve Pain",
    isDonation: false
  },
  {
    id: "32",
    name: "Ciprofloxacin 500mg",
    image: getReliableImage(),
    price: 270,
    expiryDate: "2025-04-30",
    location: "Jodhpur, Rajasthan",
    category: "Antibiotic",
    isDonation: false
  },
  {
    id: "33",
    name: "Magnesium Supplement",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-08-22",
    location: "Shimla, Himachal Pradesh",
    category: "Supplement",
    isDonation: true
  },
  {
    id: "34",
    name: "Propranolol 40mg",
    image: getReliableImage(),
    price: 155,
    expiryDate: "2025-07-12",
    location: "Jalandhar, Punjab",
    category: "Beta Blocker",
    isDonation: false
  },
  {
    id: "35",
    name: "Ranitidine 150mg",
    image: getReliableImage(),
    price: 130,
    expiryDate: "2025-05-15",
    location: "Agra, Uttar Pradesh",
    category: "Antacid",
    isDonation: false
  },
  {
    id: "36",
    name: "Gabapentin 300mg",
    image: getReliableImage(),
    price: 310,
    expiryDate: "2025-09-20",
    location: "Trivandrum, Kerala",
    category: "Anticonvulsant",
    isDonation: false
  },
  {
    id: "37",
    name: "Vitamin C Tablets",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-07-30",
    location: "Gangtok, Sikkim",
    category: "Vitamin",
    isDonation: true
  },
  {
    id: "38",
    name: "Levofloxacin 500mg",
    image: getReliableImage(),
    price: 295,
    expiryDate: "2025-06-05",
    location: "Vijayawada, Andhra Pradesh",
    category: "Antibiotic",
    isDonation: false
  },
  {
    id: "39",
    name: "Clobetasol Cream",
    image: getReliableImage(),
    price: 210,
    expiryDate: "2025-08-12",
    location: "Ludhiana, Punjab",
    category: "Steroid",
    isDonation: false
  },
  {
    id: "40",
    name: "Sertraline 50mg",
    image: getReliableImage(),
    price: 245,
    expiryDate: "2025-07-25",
    location: "Kanpur, Uttar Pradesh",
    category: "Antidepressant",
    isDonation: false
  },
  {
    id: "41",
    name: "Collagen Peptides",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-09-30",
    location: "Shillong, Meghalaya",
    category: "Supplement",
    isDonation: true
  },
  {
    id: "42",
    name: "Doxycycline 100mg",
    image: getReliableImage(),
    price: 235,
    expiryDate: "2025-05-20",
    location: "Madurai, Tamil Nadu",
    category: "Antibiotic",
    isDonation: false
  },
  {
    id: "43",
    name: "Furosemide 40mg",
    image: getReliableImage(),
    price: 125,
    expiryDate: "2025-06-15",
    location: "Siliguri, West Bengal",
    category: "Diuretic",
    isDonation: false
  },
  {
    id: "44",
    name: "Zinc Oxide Ointment",
    image: getReliableImage(),
    price: 95,
    expiryDate: "2025-08-28",
    location: "Goa",
    category: "Topical",
    isDonation: false
  },
  {
    id: "45",
    name: "Tramadol 50mg",
    image: getReliableImage(),
    price: 275,
    expiryDate: "2025-07-10",
    location: "Srinagar, Jammu & Kashmir",
    category: "Pain Relief",
    isDonation: false
  },
  {
    id: "46",
    name: "Biotin Supplements",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-09-15",
    location: "Bhopal, Madhya Pradesh",
    category: "Vitamin",
    isDonation: true
  }
];
