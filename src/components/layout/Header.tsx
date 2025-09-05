import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

const Header = () => {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const totalItems = getTotalItems();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setShowSearch(false);
      setSearchTerm('');
    }
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        {/* Enhanced Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary via-emerald-500 to-teal-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <span className="text-white font-black text-xl">M</span>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-2xl text-gray-900 group-hover:text-primary transition-colors">ModernMall</span>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Premium Store</span>
          </div>
        </Link>

        {/* Enhanced Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-lg font-semibold transition-all duration-300 hover:text-primary relative group",
                location.pathname === item.href
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-500 transition-all duration-300 group-hover:w-full",
                location.pathname === item.href ? "w-full" : ""
              )} />
            </Link>
          ))}
        </nav>

        {/* Enhanced Actions */}
        <div className="flex items-center space-x-3">
          {showSearch ? (
            <form onSubmit={handleSearch} className="hidden sm:flex">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 rounded-xl"
                autoFocus
                onBlur={() => !searchTerm && setShowSearch(false)}
              />
            </form>
          ) : (
            <Button 
              variant="ghost" 
              size="lg" 
              className="hidden sm:flex hover:bg-gray-100/50 rounded-xl p-3"
              onClick={() => setShowSearch(true)}
            >
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
          )}
          
          <Link to="/cart">
            <Button variant="ghost" size="lg" className="relative hover:bg-gray-100/50 rounded-xl p-3 group">
              <ShoppingCart className="h-5 w-5 text-gray-600 group-hover:text-primary transition-colors" />
              {totalItems > 0 && (
                <Badge 
                  className="absolute -top-1 -right-1 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-white border-2 border-white shadow-lg animate-pulse"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>

          <Button variant="ghost" size="lg" className="md:hidden hover:bg-gray-100/50 rounded-xl p-3">
            <Menu className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;