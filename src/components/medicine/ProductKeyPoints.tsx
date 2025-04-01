
import { Check, AlertCircle } from "lucide-react";

export interface KeyPoint {
  text: string;
  type?: "positive" | "warning" | "neutral";
}

interface ProductKeyPointsProps {
  points: KeyPoint[];
  title?: string;
}

const ProductKeyPoints = ({ points, title = "Key Points" }: ProductKeyPointsProps) => {
  return (
    <div className="mt-4 space-y-3">
      {title && <h3 className="font-medium text-gray-900 text-base">{title}</h3>}
      <ul className="space-y-2">
        {points.map((point, index) => {
          const type = point.type || "neutral";
          return (
            <li 
              key={index} 
              className={`flex items-start gap-3 p-3 rounded-lg ${
                type === "positive" 
                  ? "bg-green-50 border border-green-100" 
                  : type === "warning" 
                    ? "bg-amber-50 border border-amber-100" 
                    : "bg-gray-50 border border-gray-100"
              } transform hover:scale-[1.01] transition-all duration-200`}
            >
              <div className={`flex-shrink-0 rounded-full p-1 ${
                type === "positive"
                  ? "bg-green-100 text-green-600" 
                  : type === "warning"
                    ? "bg-amber-100 text-amber-600"
                    : "bg-gray-200 text-gray-600"
              }`}>
                {type === "warning" ? (
                  <AlertCircle size={14} />
                ) : (
                  <Check size={14} />
                )}
              </div>
              <p className={`text-sm ${
                type === "positive"
                  ? "text-green-800" 
                  : type === "warning"
                    ? "text-amber-800"
                    : "text-gray-700"
              }`}>
                {point.text}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductKeyPoints;
