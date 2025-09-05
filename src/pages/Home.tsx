import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      
      {/* Enhanced Features Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Why Choose <span className="text-gradient">Our Store</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience premium shopping with unmatched quality and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6 group">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-emerald-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Free Shipping</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Complimentary shipping on all orders over $50. Fast, reliable delivery straight to your doorstep with premium packaging.
              </p>
            </div>
            
            <div className="text-center space-y-6 group">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Quality Guarantee</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every product is carefully curated and tested. We stand behind our quality with a comprehensive satisfaction guarantee.
              </p>
            </div>
            
            <div className="text-center space-y-6 group">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">24/7 Support</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our dedicated customer support team is available around the clock to provide personalized assistance and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;