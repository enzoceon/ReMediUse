
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  showSearch?: boolean;
  onSearch?: (value: string) => void;
}

const MainLayout = ({ children, title, showSearch, onSearch }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header title={title} showSearch={showSearch} onSearch={onSearch} />
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
