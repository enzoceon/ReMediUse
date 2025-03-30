
import { Medicine } from "@/components/medicine/MedicineCard";
import { firstBatchMedicines, secondBatchMedicines, thirdBatchMedicines } from "./medicines";
import { user } from "./user";
import { featuredMedicines } from "./featured";
import { getReliableImage } from "./images";

// Combine all medicine batches for backward compatibility
export const mockMedicines: Medicine[] = [
  ...firstBatchMedicines,
  ...secondBatchMedicines,
  ...thirdBatchMedicines
];

// Re-export everything for backward compatibility
export { user, featuredMedicines, getReliableImage };
