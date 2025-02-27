
import { useState } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  image: string;
}

const Testimonial = ({ quote, author, title, image }: TestimonialProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 glass-card rounded-xl p-6 md:p-8">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
          <div className={`transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <img 
              src={image} 
              alt={author} 
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      </div>
      <div>
        <blockquote className="italic text-lg md:text-xl mb-4">"{quote}"</blockquote>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
