
import { Medicine } from "@/components/medicine/MedicineCard";
import { 
  firstBatchMedicines, 
  secondBatchMedicines, 
  thirdBatchMedicines, 
  fourthBatchMedicines,
  allMedicines 
} from "./medicines";
import { user } from "./user";
import { featuredMedicines } from "./featured";
import { getReliableImage } from "./images";

// For backward compatibility, we'll re-export everything
export const mockMedicines: Medicine[] = allMedicines;

// Re-export everything for backward compatibility
export { user, featuredMedicines, getReliableImage };
