
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart`,
    });
  };

  return (
    <Link 
      to={`/product/${id}`}
      className="group animate-hover rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <div className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}></div>
        <img 
          src={image} 
          alt={name}
          className={`object-cover w-full h-full transition-transform duration-700 ease-out ${isHovered ? 'scale-105' : 'scale-100'} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} 
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute top-2 left-2">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-black/70 text-white rounded-full animate-fade-in">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-lg tracking-tight mt-2 mb-1">{name}</h3>
        <div className="flex justify-between items-center">
          <p className="font-medium">${price.toFixed(2)}</p>
          <Button 
            size="sm" 
            variant="ghost" 
            className="rounded-full h-8 w-8 p-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
