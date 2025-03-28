
import { useEffect, useState } from "react";
import { Search, Bell, Sun, Moon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
  onSearch?: (value: string) => void;
}

const Header = ({ title = "ReMediUse", showSearch = false, onSearch }: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setsuggestions] = useState<string[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  // Toggle theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle('dark');
  };
  
  useEffect(() => {
    if (onSearch) {
      const debounce = setTimeout(() => {
        onSearch(searchTerm);
      }, 300);
      
      return () => clearTimeout(debounce);
    }
  }, [searchTerm, onSearch]);

  // Generate suggestions based on search term
  useEffect(() => {
    if (searchTerm.length > 2) {
      // Mock suggestions - in a real app this would come from an API
      const commonMedicines = [
        "Paracetamol 500mg",
        "Paracetamol 650mg",
        "Paracetamol Syrup",
        "Panadol",
        "Paracetemol Extra",
        "Crocin",
        "Dolo 650",
        "Acetaminophen"
      ];
      
      const filtered = commonMedicines.filter(med => 
        med.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      setsuggestions(filtered);
    } else {
      setsuggestions([]);
    }
  }, [searchTerm]);

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 z-10 shadow-sm">
      <div className="px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-remedyblue-600 dark:text-remedyblue-400">{title}</h1>
        <div className="flex items-center space-x-3">
          <Toggle 
            aria-label="Toggle dark mode" 
            onClick={toggleTheme}
            className="hover:bg-gray-100 dark:hover:bg-gray-800">
            {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
          </Toggle>
          <Button variant="ghost" className="relative" size="icon">
            <Bell size={20} className="text-gray-600 dark:text-gray-400" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
        </div>
      </div>
      
      {showSearch && (
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search medicines..."
              className="pl-10 bg-gray-50 dark:bg-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            {suggestions.length > 0 && (
              <div className="absolute z-10 mt-1 w-full rounded-md bg-white dark:bg-gray-800 shadow-lg max-h-60 overflow-auto">
                <ul className="py-1">
                  {suggestions.map((suggestion, index) => (
                    <li 
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-sm"
                      onClick={() => {
                        setSearchTerm(suggestion);
                        setsuggestions([]);
                        if (onSearch) onSearch(suggestion);
                      }}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
