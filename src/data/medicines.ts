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

// Fourth batch of medicines (47-96) - Adding 50 more products
export const fourthBatchMedicines: Medicine[] = [
  {
    id: "47",
    name: "Amlodipine 10mg",
    image: getReliableImage(),
    price: 195,
    expiryDate: "2025-07-22",
    location: "Shimla, Himachal Pradesh",
    category: "Blood Pressure",
    isDonation: false
  },
  {
    id: "48",
    name: "Clonazepam 0.5mg",
    image: getReliableImage(),
    price: 215,
    expiryDate: "2025-06-18",
    location: "Gangtok, Sikkim",
    category: "Anti-Anxiety",
    isDonation: false
  },
  {
    id: "49",
    name: "Methotrexate 2.5mg",
    image: getReliableImage(),
    price: 310,
    expiryDate: "2025-05-29",
    location: "Imphal, Manipur",
    category: "Immunosuppressant",
    isDonation: false
  },
  {
    id: "50",
    name: "Warfarin 5mg",
    image: getReliableImage(),
    price: 180,
    expiryDate: "2025-08-14",
    location: "Itanagar, Arunachal Pradesh",
    category: "Anticoagulant",
    isDonation: false
  },
  {
    id: "51",
    name: "Fluoxetine 20mg",
    image: getReliableImage(),
    price: 255,
    expiryDate: "2025-07-11",
    location: "Aizawl, Mizoram",
    category: "Antidepressant",
    isDonation: false
  },
  {
    id: "52",
    name: "Venlafaxine 75mg",
    image: getReliableImage(),
    price: 290,
    expiryDate: "2025-09-17",
    location: "Kohima, Nagaland",
    category: "Antidepressant",
    isDonation: false
  },
  {
    id: "53",
    name: "Probiotics Capsules",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-10-05",
    location: "Agartala, Tripura",
    category: "Digestive Health",
    isDonation: true
  },
  {
    id: "54",
    name: "Cephalexin 500mg",
    image: getReliableImage(),
    price: 245,
    expiryDate: "2025-08-22",
    location: "Pondicherry",
    category: "Antibiotic",
    isDonation: false
  },
  {
    id: "55",
    name: "Albuterol Inhaler",
    image: getReliableImage(),
    price: 420,
    expiryDate: "2025-07-19",
    location: "Daman",
    category: "Asthma",
    isDonation: false
  },
  {
    id: "56",
    name: "Montelukast 5mg",
    image: getReliableImage(),
    price: 235,
    expiryDate: "2025-09-11",
    location: "Silvassa, Dadra & Nagar Haveli",
    category: "Asthma",
    isDonation: false
  },
  {
    id: "57",
    name: "Fexofenadine 180mg",
    image: getReliableImage(),
    price: 175,
    expiryDate: "2025-08-07",
    location: "Kavaratti, Lakshadweep",
    category: "Antihistamine",
    isDonation: false
  },
  {
    id: "58",
    name: "Sitagliptin 100mg",
    image: getReliableImage(),
    price: 340,
    expiryDate: "2025-06-14",
    location: "Port Blair, Andaman & Nicobar",
    category: "Diabetes",
    isDonation: false
  },
  {
    id: "59",
    name: "Omega 3-6-9 Capsules",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-10-18",
    location: "Diu",
    category: "Supplement",
    isDonation: true
  },
  {
    id: "60",
    name: "Rosuvastatin 10mg",
    image: getReliableImage(),
    price: 260,
    expiryDate: "2025-07-25",
    location: "Panjim, Goa",
    category: "Cholesterol",
    isDonation: false
  },
  {
    id: "61",
    name: "Hydrocortisone Cream 1%",
    image: getReliableImage(),
    price: 120,
    expiryDate: "2025-09-09",
    location: "New Delhi, NCR",
    category: "Topical Steroid",
    isDonation: false
  },
  {
    id: "62",
    name: "Budesonide Inhaler",
    image: getReliableImage(),
    price: 380,
    expiryDate: "2025-08-12",
    location: "Bokaro, Jharkhand",
    category: "Asthma",
    isDonation: false
  },
  {
    id: "63",
    name: "Potassium Citrate",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-07-30",
    location: "Noida, Uttar Pradesh",
    category: "Electrolyte",
    isDonation: true
  },
  {
    id: "64",
    name: "Simvastatin 20mg",
    image: getReliableImage(),
    price: 210,
    expiryDate: "2025-06-19",
    location: "Gurgaon, Haryana",
    category: "Cholesterol",
    isDonation: false
  },
  {
    id: "65",
    name: "Spironolactone 25mg",
    image: getReliableImage(),
    price: 195,
    expiryDate: "2025-09-14",
    location: "Faridabad, Haryana",
    category: "Diuretic",
    isDonation: false
  },
  {
    id: "66",
    name: "Salbutamol Inhaler",
    image: getReliableImage(),
    price: 350,
    expiryDate: "2025-07-15",
    location: "Meerut, Uttar Pradesh",
    category: "Asthma",
    isDonation: false
  },
  {
    id: "67",
    name: "Glucosamine 500mg",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-10-08",
    location: "Bhiwadi, Rajasthan",
    category: "Joint Health",
    isDonation: true
  },
  {
    id: "68",
    name: "Dutasteride 0.5mg",
    image: getReliableImage(),
    price: 285,
    expiryDate: "2025-08-17",
    location: "Haridwar, Uttarakhand",
    category: "Prostate",
    isDonation: false
  },
  {
    id: "69",
    name: "Allopurinol 100mg",
    image: getReliableImage(),
    price: 165,
    expiryDate: "2025-07-28",
    location: "Rohtak, Haryana",
    category: "Gout",
    isDonation: false
  },
  {
    id: "70",
    name: "Buspirone 10mg",
    image: getReliableImage(),
    price: 230,
    expiryDate: "2025-06-15",
    location: "Aligarh, Uttar Pradesh",
    category: "Anti-Anxiety",
    isDonation: false
  },
  {
    id: "71",
    name: "Vitamin E 400 IU",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-09-19",
    location: "Hisar, Haryana",
    category: "Vitamin",
    isDonation: true
  },
  {
    id: "72",
    name: "Celecoxib 200mg",
    image: getReliableImage(),
    price: 275,
    expiryDate: "2025-08-11",
    location: "Saharanpur, Uttar Pradesh",
    category: "Anti-inflammatory",
    isDonation: false
  },
  {
    id: "73",
    name: "Doxazosin 4mg",
    image: getReliableImage(),
    price: 220,
    expiryDate: "2025-07-12",
    location: "Bareilly, Uttar Pradesh",
    category: "Blood Pressure",
    isDonation: false
  },
  {
    id: "74",
    name: "Budesonide Nasal Spray",
    image: getReliableImage(),
    price: 340,
    expiryDate: "2025-06-08",
    location: "Roorkee, Uttarakhand",
    category: "Allergy",
    isDonation: false
  },
  {
    id: "75",
    name: "Probiotic Sachets",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-10-15",
    location: "Karnal, Haryana",
    category: "Digestive Health",
    isDonation: true
  },
  {
    id: "76",
    name: "Finasteride 1mg",
    image: getReliableImage(),
    price: 310,
    expiryDate: "2025-09-22",
    location: "Mathura, Uttar Pradesh",
    category: "Hair Loss",
    isDonation: false
  },
  {
    id: "77",
    name: "Prednisolone 5mg",
    image: getReliableImage(),
    price: 185,
    expiryDate: "2025-08-19",
    location: "Ghaziabad, Uttar Pradesh",
    category: "Steroid",
    isDonation: false
  },
  {
    id: "78",
    name: "Ramipril 5mg",
    image: getReliableImage(),
    price: 205,
    expiryDate: "2025-07-14",
    location: "Rewari, Haryana",
    category: "Blood Pressure",
    isDonation: false
  },
  {
    id: "79",
    name: "Multivitamin Gummies",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-10-11",
    location: "Moradabad, Uttar Pradesh",
    category: "Vitamin",
    isDonation: true
  },
  {
    id: "80",
    name: "Tamsulosin 0.4mg",
    image: getReliableImage(),
    price: 250,
    expiryDate: "2025-09-18",
    location: "Mandi, Himachal Pradesh",
    category: "Prostate",
    isDonation: false
  },
  {
    id: "81",
    name: "Naproxen 500mg",
    image: getReliableImage(),
    price: 160,
    expiryDate: "2025-08-15",
    location: "Dharamshala, Himachal Pradesh",
    category: "Painkiller",
    isDonation: false
  },
  {
    id: "82",
    name: "Salbutamol Nebules",
    image: getReliableImage(),
    price: 295,
    expiryDate: "2025-07-26",
    location: "Kullu, Himachal Pradesh",
    category: "Asthma",
    isDonation: false
  },
  {
    id: "83",
    name: "Calcium + Vitamin D3",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-09-27",
    location: "Nainital, Uttarakhand",
    category: "Bone Health",
    isDonation: true
  },
  {
    id: "84",
    name: "Ketoconazole Shampoo",
    image: getReliableImage(),
    price: 225,
    expiryDate: "2025-08-24",
    location: "Mussoorie, Uttarakhand",
    category: "Antifungal",
    isDonation: false
  },
  {
    id: "85",
    name: "Amoxicillin + Clavulanic Acid",
    image: getReliableImage(),
    price: 340,
    expiryDate: "2025-07-21",
    location: "Pithoragarh, Uttarakhand",
    category: "Antibiotic",
    isDonation: false
  },
  {
    id: "86",
    name: "Rifaximin 550mg",
    image: getReliableImage(),
    price: 390,
    expiryDate: "2025-06-18",
    location: "Haldwani, Uttarakhand",
    category: "Antibiotic",
    isDonation: false
  },
  {
    id: "87",
    name: "Echinacea Extract",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-10-14",
    location: "Solan, Himachal Pradesh",
    category: "Immunity",
    isDonation: true
  },
  {
    id: "88",
    name: "Levocetirizine 5mg",
    image: getReliableImage(),
    price: 125,
    expiryDate: "2025-09-15",
    location: "Bilaspur, Himachal Pradesh",
    category: "Antihistamine",
    isDonation: false
  },
  {
    id: "89",
    name: "Calcitriol 0.25mcg",
    image: getReliableImage(),
    price: 210,
    expiryDate: "2025-08-12",
    location: "Hamirpur, Himachal Pradesh",
    category: "Vitamin D",
    isDonation: false
  },
  {
    id: "90",
    name: "Clobetasol Propionate 0.05%",
    image: getReliableImage(),
    price: 175,
    expiryDate: "2025-07-09",
    location: "Una, Himachal Pradesh",
    category: "Topical Steroid",
    isDonation: false
  },
  {
    id: "91",
    name: "Garlic Extract",
    image: getReliableImage(),
    price: null,
    expiryDate: "2025-10-06",
    location: "Chamba, Himachal Pradesh",
    category: "Supplement",
    isDonation: true
  },
  {
    id: "92",
    name: "Minoxidil Solution 5%",
    image: getReliableImage(),
    price: 320,
    expiryDate: "2025-09-03",
    location: "Tehri, Uttarakhand",
    category: "Hair Growth",
    isDonation: false
  },
  {
    id: "93",
    name: "Olmesartan 20mg",
    image: getReliableImage(),
    price: 215,
    expiryDate: "2025-08-30",
    location: "Rudrapray
