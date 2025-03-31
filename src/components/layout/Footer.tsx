
import { Home, ShoppingBag, Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Custom Sell icon component using the medical plus symbol
const SellIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" className={className}>
    <rect x="160" y="160" width="704" height="704" rx="176" stroke="currentColor" strokeWidth="70" fill="none" />
    <path d="M512 288L512 736" stroke="currentColor" strokeWidth="70" strokeLinecap="round" />
    <path d="M288 512L736 512" stroke="currentColor" strokeWidth="70" strokeLinecap="round" />
  </svg>
);

const Footer = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [visible, setVisible] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > scrollPos;
      
      // Show footer when scrolling up, hide when scrolling down
      setVisible(!isScrollingDown || currentScrollPos < 10);
      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  const footerItems = [
    { icon: <Home size={24} />, label: "Home", path: "/" },
    { icon: <ShoppingBag size={24} />, label: "Buy", path: "/buy" },
    { icon: <SellIcon size={24} />, label: "Sell", path: "/sell" },
    { icon: <Heart size={24} />, label: "Donate", path: "/donate" },
    { icon: <User size={24} />, label: "Profile", path: "/profile" },
  ];

  return (
    <footer className={`fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 z-10 transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
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
