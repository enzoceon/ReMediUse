
import { useEffect, useState } from "react";
import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
  onSearch?: (value: string) => void;
}

const Header = ({ title = "ReMediUse", showSearch = false, onSearch }: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    if (onSearch) {
      const debounce = setTimeout(() => {
        onSearch(searchTerm);
      }, 300);
      
      return () => clearTimeout(debounce);
    }
  }, [searchTerm, onSearch]);

  return (
    <header className="sticky top-0 bg-white z-10 shadow-sm">
      <div className="px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-remedyblue-600">{title}</h1>
        <div className="flex items-center space-x-2">
          <Bell size={20} className="text-gray-600" />
        </div>
      </div>
      
      {showSearch && (
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search medicines..."
              className="pl-10 bg-gray-50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
