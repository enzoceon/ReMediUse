
import { Home, ShoppingBag, Heart, User, Plus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Only apply scroll behavior on home and buy pages
  const applyScrollBehavior = location.pathname === "/" || location.pathname === "/buy";

  useEffect(() => {
    const handleScroll = () => {
      if (!applyScrollBehavior) {
        setVisible(true);
        return;
      }
      
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide the footer
        setVisible(false);
      } else {
        // Scrolling up - show the footer
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, applyScrollBehavior]);

  // For the Sell icon, we'll use Plus icon but in a rounded square to match the image
  const plusIcon = (
    <div className="rounded-lg border-2 border-current flex items-center justify-center w-6 h-6">
      <Plus size={16} />
    </div>
  );

  const footerItems = [
    { icon: <Home size={24} />, label: "Home", path: "/" },
    { icon: <ShoppingBag size={24} />, label: "Buy", path: "/buy" },
    { icon: plusIcon, label: "Sell", path: "/sell" },
    { icon: <Heart size={24} />, label: "Donate", path: "/donate" },
    { icon: <User size={24} />, label: "Profile", path: "/profile" },
  ];

  return (
    <footer className={`fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 z-10 transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex justify-around items-center py-2">
        {footerItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`footer-item ${isActive(item.path) ? "footer-active" : "text-gray-500"}`}
          >
            <div className={`${isActive(item.path) ? "text-remedyblue-600" : "text-gray-500"}`}>
              {item.icon}
            </div>
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
