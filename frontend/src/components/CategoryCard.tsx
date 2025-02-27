
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  count: number;
}

const CategoryCard = ({ id, name, image, count }: CategoryCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link 
      to={`/category/${id}`} 
      className="relative overflow-hidden rounded-lg group h-60 animate-hover flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 transition-opacity duration-500 ease-out"></div>
      <div className={`absolute inset-0 transition-opacity duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-white">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm text-white/70">{count} Products</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
