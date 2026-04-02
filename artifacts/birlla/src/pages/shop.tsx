import { useState } from 'react';
import { motion } from 'framer-motion';
import { products, Category } from '@/data/products';

const categories: { label: string; value: Category | 'All' }[] = [
  { label: 'All Collection', value: 'All' },
  { label: 'Makeup', value: 'Makeup' },
  { label: 'Skincare', value: 'Skincare' },
  { label: 'Haircare', value: 'Haircare' },
  { label: 'Body Care', value: 'Body Care' },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-36 pb-32 min-h-[100dvh] bg-background">
      {/* Header */}
      <div className="py-16 md:py-24 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-serif mb-6"
        >
          The Collection
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          Discover our full range of luxury beauty creations, designed to illuminate and celebrate.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`uppercase tracking-widest text-xs transition-all duration-300 pb-1 border-b ${
                activeCategory === cat.value 
                  ? 'border-foreground text-foreground font-medium' 
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16"
        >
          {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                key={product.id} 
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.isBestseller && (
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-foreground px-3 py-1 text-[10px] uppercase tracking-widest">
                      Bestseller
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <button className="absolute bottom-0 left-0 w-full bg-white text-black py-4 uppercase tracking-widest text-xs font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    Add to Bag — ${product.price}
                  </button>
                </div>
                <div className="text-center flex-grow flex flex-col">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{product.category}</p>
                  <h3 className="font-serif text-lg mb-3 flex-grow">{product.name}</h3>
                  <p className="text-sm text-foreground/80">${product.price}</p>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
