import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const cardClasses = featured 
    ? "card-elevated hover-lift group h-full" 
    : "card-product hover-lift group h-full";

  return (
    <Link to={`/products/${product.id}`} className="block h-full">
      <div className={cardClasses}>
        {/* Image Container */}
        <div className="product-image aspect-square">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover object-center group-hover:scale-110 transition-all duration-700 ease-out"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Category Badge */}
          <Badge 
            variant="secondary" 
            className="text-xs font-semibold capitalize bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
          >
            {product.category}
          </Badge>

          {/* Title */}
          <h3 className="font-bold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300 text-gray-800">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 transition-colors ${
                    i < Math.floor(product.rating.rate)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 font-medium">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>

          {/* Price and Actions */}
          <div className="flex items-center justify-between pt-3">
            <div className="space-y-1">
              <span className="text-2xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {featured && (
                <div className="text-sm text-gray-500 line-through">
                  ${(product.price * 1.2).toFixed(2)}
                </div>
              )}
            </div>
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-primary to-emerald-600 hover:from-emerald-600 hover:to-primary shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;