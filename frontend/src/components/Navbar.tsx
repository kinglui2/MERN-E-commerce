
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCartClick = () => {
    toast({
      title: "Cart opened",
      description: "Your shopping cart has been opened",
    });
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight animate-fade-in">
            NOVA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/categories" className="nav-link">Categories</Link>
            <Link to="/about" className="nav-link">About</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative animate-fade-in" onClick={() => toast({ title: "Search", description: "Search functionality coming soon!" })}>
              <Search className="h-5 w-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="animate-fade-in">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={() => toast({ title: "Sign In", description: "Sign in functionality coming soon!" })}>
                  Sign In
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toast({ title: "Create Account", description: "Account creation coming soon!" })}>
                  Create Account
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="icon" className="relative animate-fade-in" onClick={handleCartClick}>
              <ShoppingCart className="h-5 w-5" />
              <span className="cart-badge absolute flex items-center justify-center h-5 w-5 bg-black dark:bg-white text-white dark:text-black rounded-full">0</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden animate-fade-in"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 animate-slide-down">
          <div className="px-4 py-5 space-y-4">
            <Link to="/" className="block py-2 nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/products" className="block py-2 nav-link" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
            <Link to="/categories" className="block py-2 nav-link" onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
            <Link to="/about" className="block py-2 nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            
            <div className="flex items-center space-x-4 pt-2 border-t">
              <Button variant="ghost" size="icon" className="relative" onClick={() => toast({ title: "Search", description: "Search functionality coming soon!" })}>
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative" onClick={() => toast({ title: "Account", description: "Account functionality coming soon!" })}>
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative" onClick={handleCartClick}>
                <ShoppingCart className="h-5 w-5" />
                <span className="cart-badge absolute flex items-center justify-center h-5 w-5 bg-black dark:bg-white text-white dark:text-black rounded-full">0</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
