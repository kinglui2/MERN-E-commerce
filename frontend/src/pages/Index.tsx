
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FeaturedProduct from '@/components/FeaturedProduct';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import Testimonial from '@/components/Testimonial';
import { Button } from '@/components/ui/button';

// Mock data for the home page
const featuredProduct = {
  id: "1",
  name: "Premium Wireless Headphones",
  description: "Experience immersive sound with our flagship noise-cancelling headphones. Featuring 40-hour battery life and premium materials for all-day comfort.",
  price: 349.99,
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop&q=80"
};

const products = [
  {
    id: "2",
    name: "Smart Watch Series 7",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80",
    category: "Wearables"
  },
  {
    id: "3",
    name: "Professional Camera",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
    category: "Photography"
  },
  {
    id: "4",
    name: "Laptop Pro 16",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80",
    category: "Computers"
  },
  {
    id: "5",
    name: "Wireless Earbuds",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80",
    category: "Audio"
  }
];

const categories = [
  {
    id: "cat1",
    name: "Headphones",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80",
    count: 42
  },
  {
    id: "cat2",
    name: "Laptops",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80",
    count: 38
  },
  {
    id: "cat3",
    name: "Smartphones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80",
    count: 54
  }
];

const testimonial = {
  quote: "I've been looking for high quality tech products with a clean design aesthetic, and this store delivers exactly that. The customer service is exceptional too!",
  author: "Emma Thompson",
  title: "Product Designer",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
};

const Index = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 md:pt-20 mb-16 md:mb-24">
        {/* Featured Product */}
        <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-20">
          <FeaturedProduct {...featuredProduct} />
        </div>
      </section>

      {/* Popular Products */}
      <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24 animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Popular Products</h2>
          <Button variant="ghost" className="flex items-center gap-1 group" asChild>
            <Link to="/products">
              View All <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24 animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Browse Categories</h2>
          <Button variant="ghost" className="flex items-center gap-1 group" asChild>
            <Link to="/categories">
              All Categories <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24 animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">What Our Customers Say</h2>
        <Testimonial {...testimonial} />
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 md:px-6 animate-fade-in">
        <div className="bg-secondary/50 rounded-xl p-8 md:p-12 text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-black/10 dark:bg-white/10 rounded-full mb-4">
            Stay Updated
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Subscribe to our newsletter</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Get the latest product updates, special offers, and news directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary/20 min-w-[250px]"
            />
            <Button className="rounded-full">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 md:px-6 mt-24 animate-fade-in">
        <div className="border-t pt-8 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Shop</h3>
              <ul className="space-y-2">
                <li><Link to="/products" className="text-muted-foreground hover:text-foreground">All Products</Link></li>
                <li><Link to="/categories" className="text-muted-foreground hover:text-foreground">Categories</Link></li>
                <li><Link to="/deals" className="text-muted-foreground hover:text-foreground">Deals</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
                <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQs</Link></li>
                <li><Link to="/shipping" className="text-muted-foreground hover:text-foreground">Shipping</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
                <li><Link to="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                <li><Link to="/returns" className="text-muted-foreground hover:text-foreground">Return Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center text-muted-foreground text-sm">
            <p>© 2023 NOVA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
