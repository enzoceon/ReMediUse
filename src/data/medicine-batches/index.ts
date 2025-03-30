
import { Medicine } from "@/components/medicine/MedicineCard";
import { firstBatchMedicines } from "./firstBatchMedicines";
import { secondBatchMedicines } from "./secondBatchMedicines";
import { thirdBatchMedicines } from "./thirdBatchMedicines";
import { fourthBatchMedicines } from "./fourthBatchMedicines";
import { fifthBatchMedicines } from "./fifthBatchMedicines";

// Combine all medicine batches
export const allMedicines: Medicine[] = [
  ...firstBatchMedicines,
  ...secondBatchMedicines,
  ...thirdBatchMedicines,
  ...fourthBatchMedicines,
  ...fifthBatchMedicines
];

// Re-export all batches for individual access
export {
  firstBatchMedicines,
  secondBatchMedicines,
  thirdBatchMedicines,
  fourthBatchMedicines,
  fifthBatchMedicines
};
