
import { Home, Package, Plus, Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Only apply hide/show on Home and Buy pages
  const isScrollPage = location.pathname === "/" || location.pathname === "/buy";

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollPage) {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          setVisible(false);
        } else {
          setVisible(true);
        }
        setLastScrollY(currentScrollY);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isScrollPage]);

  const footerItems = [
    { icon: <Home size={24} />, label: "Home", path: "/" },
    { icon: <Package size={24} />, label: "Buy", path: "/buy" },
    { icon: <Plus size={24} />, label: "Sell", path: "/sell" },
    { icon: <Heart size={24} />, label: "Donate", path: "/donate" },
    { icon: <User size={24} />, label: "Profile", path: "/profile" },
  ];

  return (
    <footer className={`fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 z-10 transition-transform duration-300 ${!visible ? 'translate-y-full' : 'translate-y-0'}`}>
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
