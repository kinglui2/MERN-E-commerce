
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface FeaturedProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const FeaturedProduct = ({ id, name, description, price, image }: FeaturedProductProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart`,
    });
  };

  return (
    <div className="relative rounded-xl overflow-hidden h-[500px] md:h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 transition-opacity duration-500 ease-out"></div>
      <div className={`absolute inset-0 transition-opacity duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">{name}</h1>
          <p className="text-white/80 mb-6 max-w-xl">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="rounded-full"
              onClick={handleAddToCart}
            >
              Add to Cart — ${price.toFixed(2)}
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full bg-white/10 hover:bg-white/20 border-white/20 text-white"
              asChild
            >
              <Link to={`/product/${id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
