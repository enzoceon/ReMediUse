
import { Home, ShoppingBag, Square, Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const footerItems = [
    { icon: <Home size={24} />, label: "Home", path: "/" },
    { icon: <ShoppingBag size={24} />, label: "Buy", path: "/buy" },
    { icon: <div className="relative bg-remedyblue-600 w-6 h-6 rounded-md flex items-center justify-center text-white"><span className="absolute text-xl font-bold">+</span></div>, label: "Sell", path: "/sell" },
    { icon: <Heart size={24} />, label: "Donate", path: "/donate" },
    { icon: <User size={24} />, label: "Profile", path: "/profile" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 z-10">
      <div className="flex justify-around items-center py-2">
        {footerItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`footer-item ${isActive(item.path) ? "footer-active" : "text-gray-500"}`}
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
