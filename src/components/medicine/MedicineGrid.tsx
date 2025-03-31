
import { useState } from "react";
import MedicineCard, { Medicine } from "./MedicineCard";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

interface MedicineGridProps {
  medicines: Medicine[];
  title?: string;
  showDonations?: boolean;
}

const MedicineGrid = ({ medicines, title, showDonations = true }: MedicineGridProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState("newest");

  // Filter medicines based on various criteria
  const filteredMedicines = medicines.filter(medicine => {
    // Filter out donations if showDonations is false
    if (!showDonations && medicine.isDonation) {
      return false;
    }

    // Apply active category filters if any
    if (activeFilters.length > 0 && !activeFilters.includes(medicine.category)) {
      return false;
    }

    // Apply price range filter for paid medicines
    if (medicine.price !== null && (medicine.price < priceRange[0] || medicine.price > priceRange[1])) {
      return false;
    }

    return true;
  });

  // Sort the filtered medicines
  const sortedMedicines = [...filteredMedicines].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        // Handle null prices (free items)
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return a.price - b.price;
      case "price-high":
        // Handle null prices (free items)
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return b.price - a.price;
      case "expiry-soon":
        return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
      case "newest":
      default:
        // In a real app, we'd use a created_at field
        // For mock data, we'll use ID as a proxy for recency
        return parseInt(b.id) - parseInt(a.id);
    }
  });

  const categories = Array.from(new Set(medicines.map(med => med.category)));
  
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setPriceRange([0, 1000]);
    setSortOption("newest");
  };

  return (
    <div className="space-y-4">
      {title && (
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={16} />
            <span>Filters</span>
          </Button>
        </div>
      )}
      
      {showFilters && (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-sm">Refine Results</h3>
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>Clear All</Button>
          </div>
          
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {activeFilters.map(filter => (
                <Badge key={filter} variant="secondary" className="px-2 py-1 flex items-center gap-1">
                  {filter}
                  <X size={14} className="cursor-pointer" onClick={() => removeFilter(filter)} />
                </Badge>
              ))}
            </div>
          )}
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="justify-between w-full">
                  <span>Category</span>
                  <ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {categories.map((category) => (
                    <DropdownMenuItem 
                      key={category}
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => {
                        if (activeFilters.includes(category)) {
                          removeFilter(category);
                        } else {
                          setActiveFilters([...activeFilters, category]);
                        }
                      }}
                    >
                      {category}
                      {activeFilters.includes(category) && <Badge className="ml-2 bg-remedyblue-500">✓</Badge>}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="justify-between w-full">
                  <span>Price Range</span>
                  <ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-4">
                <DropdownMenuLabel>Price Range (₹)</DropdownMenuLabel>
                <div className="mt-4 px-2">
                  <Slider 
                    defaultValue={priceRange} 
                    max={1000} 
                    step={10}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="justify-between w-full">
                  <span>Sort By</span>
                  <ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className={sortOption === "newest" ? "bg-gray-100 dark:bg-gray-700" : ""}
                  onClick={() => setSortOption("newest")}
                >
                  Newest First
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={sortOption === "price-low" ? "bg-gray-100 dark:bg-gray-700" : ""}
                  onClick={() => setSortOption("price-low")}
                >
                  Price: Low to High
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={sortOption === "price-high" ? "bg-gray-100 dark:bg-gray-700" : ""}
                  onClick={() => setSortOption("price-high")}
                >
                  Price: High to Low
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={sortOption === "expiry-soon" ? "bg-gray-100 dark:bg-gray-700" : ""}
                  onClick={() => setSortOption("expiry-soon")}
                >
                  Expiring Soon
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="justify-between w-full">
                  <span>Manufacturing</span>
                  <ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Manufacturing Timeframe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Within last month</DropdownMenuItem>
                <DropdownMenuItem>1-3 months ago</DropdownMenuItem>
                <DropdownMenuItem>3-6 months ago</DropdownMenuItem>
                <DropdownMenuItem>6+ months ago</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="justify-between w-full">
                  <span>Expiry Date</span>
                  <ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Expiry Timeframe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Within 1 month</DropdownMenuItem>
                <DropdownMenuItem>1-3 months</DropdownMenuItem>
                <DropdownMenuItem>3-6 months</DropdownMenuItem>
                <DropdownMenuItem>6+ months</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="justify-between w-full">
                  <span>Brand</span>
                  <ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Select Brand</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Cipla</DropdownMenuItem>
                <DropdownMenuItem>Sun Pharma</DropdownMenuItem>
                <DropdownMenuItem>Dr. Reddy's</DropdownMenuItem>
                <DropdownMenuItem>Mankind</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {sortedMedicines.map((medicine) => (
          <MedicineCard key={medicine.id} medicine={medicine} />
        ))}
      </div>
      
      {sortedMedicines.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">No medicines found</p>
        </div>
      )}
    </div>
  );
};

export default MedicineGrid;
