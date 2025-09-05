import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import heroImage from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hero-pattern min-h-[90vh] flex items-center">
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-r from-primary/30 to-emerald-400/30 rounded-full floating blur-sm"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gradient-to-r from-teal-400/40 to-primary/40 rounded-full floating-delayed blur-sm"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-gradient-to-r from-primary/20 to-emerald-300/20 rounded-full floating"></div>
        <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-gradient-to-r from-emerald-400/35 to-teal-400/35 rounded-full floating-delayed"></div>
        <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-primary/25 rounded-full floating"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <Badge className="inline-flex items-center px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary/15 to-emerald-400/15 text-primary border border-primary/30 rounded-full backdrop-blur-sm">
                <ShoppingBag className="w-4 h-4 mr-2" />
                ✨ New Collection 2024
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight">
                <span className="text-gray-900">Discover</span>
                <br />
                <span className="text-gradient">Premium Quality</span>
                <br />
                <span className="text-gray-800">Products</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed font-medium">
                Explore our curated collection of premium products designed for the modern lifestyle. 
                <span className="text-primary font-semibold">Quality craftsmanship</span> meets contemporary design.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/products">
                <Button size="lg" className="btn-primary group text-lg px-10 py-5">
                  Shop Collection
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="btn-secondary text-lg px-10 py-5">
                Explore Categories
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-10 pt-12">
              <div className="text-center space-y-2">
                <div className="text-4xl font-black text-gradient">500+</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Premium Products</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-black text-gradient">50K+</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Happy Customers</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-black text-gradient">4.9★</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.15)] relative">
              <img
                src={heroImage}
                alt="Premium products showcase"
                className="w-full h-full object-cover hover:scale-110 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
            
            {/* Enhanced Floating Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900">Free Shipping</div>
                  <div className="text-sm text-gray-600 font-medium">On orders over $50</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
              <div className="text-center">
                <div className="text-2xl font-black text-primary">24/7</div>
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;