
import { Home, ShoppingBag, Tag, Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const footerItems = [
    { icon: <Home size={24} />, label: "Home", path: "/" },
    { icon: <ShoppingBag size={24} />, label: "Buy", path: "/buy" },
    { icon: <Tag size={24} />, label: "Sell", path: "/sell" },
    { icon: <Heart size={24} />, label: "Donate", path: "/donate" },
    { icon: <User size={24} />, label: "Profile", path: "/profile" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-gray-700 z-10">
      <div className="flex justify-around items-center py-2">
        {footerItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`footer-item ${isActive(item.path) ? "footer-active" : "text-gray-500 dark:text-gray-400"}`}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
