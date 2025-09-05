import React, { useEffect, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/products/ProductCard';
import { Product } from '@/types/product';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, sortBy]);

  const categories = [...new Set(products.map(product => product.category))];

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="h-8 bg-muted rounded w-48 animate-pulse"></div>
            <div className="h-4 bg-muted rounded w-96 animate-pulse"></div>
          </div>
          <div className="grid-products">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="card-product animate-pulse">
                <div className="aspect-square bg-muted rounded-t-lg"></div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-muted rounded w-20"></div>
                  <div className="h-5 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-24"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-6 bg-muted rounded w-16"></div>
                    <div className="h-8 bg-muted rounded w-20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Enhanced Header */}
      <div className="space-y-6 mb-16 text-center">
        <h1 className="text-5xl lg:text-6xl font-black tracking-tight">
          <span className="text-gray-900">Premium</span>
          <span className="text-gradient block">Collection</span>
        </h1>
        <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover our complete collection of carefully curated premium products designed for the modern lifestyle
        </p>
      </div>

      {/* Enhanced Filters */}
      <div className="filter-bar mb-12">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search premium products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg border-gray-200/50 rounded-xl bg-white/50 backdrop-blur-sm focus:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full lg:w-56 py-4 px-4 text-lg border-gray-200/50 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-gray-200/50 bg-white/95 backdrop-blur-xl">
              <SelectItem value="all" className="text-lg py-3">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category} className="capitalize text-lg py-3">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full lg:w-56 py-4 px-4 text-lg border-gray-200/50 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-gray-200/50 bg-white/95 backdrop-blur-xl">
              <SelectItem value="default" className="text-lg py-3">Featured</SelectItem>
              <SelectItem value="price-low" className="text-lg py-3">Price: Low to High</SelectItem>
              <SelectItem value="price-high" className="text-lg py-3">Price: High to Low</SelectItem>
              <SelectItem value="rating" className="text-lg py-3">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Enhanced Results */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-700">
            Showing <span className="text-primary font-bold">{filteredProducts.length}</span> of <span className="text-primary font-bold">{products.length}</span> premium products
          </p>
          <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>Live inventory</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid-products">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="space-y-4">
            <Filter className="h-12 w-12 text-muted-foreground mx-auto" />
            <h3 className="text-xl font-semibold">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSortBy('default');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;