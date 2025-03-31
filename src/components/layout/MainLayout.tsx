
import { ReactNode, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  showSearch?: boolean;
  onSearch?: (value: string) => void;
}

const MainLayout = ({ children, title, showSearch, onSearch }: MainLayoutProps) => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const isScrollPage = location.pathname === "/" || location.pathname === "/buy";
  
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollPage) {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
        setLastScrollY(currentScrollY);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isScrollPage]);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header title={title} showSearch={showSearch && showHeader} onSearch={onSearch} />
      <main className="flex-1 pb-20 overflow-auto">
        <div className="container mx-auto px-4 py-4">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
