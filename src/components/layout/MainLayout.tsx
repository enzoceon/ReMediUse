
import { ReactNode, useEffect, useState } from "react";
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
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Only apply scroll behavior on home and buy pages
  const applyScrollBehavior = location.pathname === "/" || location.pathname === "/buy";

  // Extract the first child if it's a tabs element (for home and buy pages)
  let tabsSection = null;
  let mainContent = children;

  if (applyScrollBehavior && Array.isArray(children) && children.length > 0) {
    // Check if the first child is the Tabs component
    const firstChild = children[0];
    if (firstChild && typeof firstChild === 'object' && 'type' && firstChild.type?.name === 'Tabs') {
      tabsSection = firstChild;
      // Remove the tabs from the main content
      mainContent = children.slice(1);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-20 bg-white">
        <Header title={title} showSearch={showSearch} onSearch={onSearch} />
      </div>
      
      {tabsSection && (
        <div className="fixed top-16 left-0 right-0 bg-white z-10 shadow-sm">
          {tabsSection}
        </div>
      )}
      
      <main className="flex-1 pb-20 overflow-auto pt-16">
        {tabsSection && <div className="h-14"></div>} {/* Add space for fixed tabs */}
        <div className="container mx-auto px-4 py-4">
          {applyScrollBehavior ? mainContent : children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
