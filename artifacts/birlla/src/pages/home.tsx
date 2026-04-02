import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { products } from '@/data/products';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 4);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <img 
            src="/images/hero.png" 
            alt="Birlla Beauty Hero" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 uppercase tracking-[0.3em] text-xs md:text-sm mb-6"
          >
            The New Era of Luxury
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight"
          >
            Radiance, <br className="hidden md:block"/> Bottled.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/shop">
              <button className="bg-white text-black px-10 py-4 hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest text-xs font-medium">
                Discover the Collection
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-24 md:py-32 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-foreground">
              Where Couture Meets Ritual
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Birlla exists at the intersection of high-end luxury and everyday glamour. 
              We believe beauty is not about masking who you are, but illuminating your most 
              radiant self. Every product is a masterpiece, every application a celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections / Categories */}
      <section className="py-12 md:py-24 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Category 1 */}
            <motion.div variants={fadeUp} className="group cursor-pointer relative h-[60vh] md:h-[80vh] overflow-hidden">
              <img src="/images/model-2.png" alt="Makeup" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex items-end justify-between">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">The Makeup</h3>
                  <p className="text-white/80 uppercase tracking-widest text-xs">Flawless Elegance</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>

            {/* Category 2 */}
            <motion.div variants={fadeUp} className="group cursor-pointer relative h-[60vh] md:h-[80vh] overflow-hidden">
              <img src="/images/product-serum.png" alt="Skincare" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex items-end justify-between">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">The Skincare</h3>
                  <p className="text-white/80 uppercase tracking-widest text-xs">Luminous Vitality</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Icons of Beauty</h2>
              <p className="text-muted-foreground max-w-md">Our most coveted creations, loved by women worldwide.</p>
            </motion.div>
            <Link href="/shop">
              <button className="uppercase tracking-widest text-xs font-medium hover:text-primary transition-colors flex items-center gap-2">
                View All <ArrowRight size={14} />
              </button>
            </Link>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {bestsellers.map(product => (
              <motion.div key={product.id} variants={fadeUp} className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <button className="absolute bottom-0 left-0 w-full bg-white text-black py-4 uppercase tracking-widest text-xs font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    Add to Bag
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{product.category}</p>
                  <h3 className="font-serif text-lg mb-2">{product.name}</h3>
                  <p className="text-sm">${product.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parallax / Mood Image */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/images/model-3.png)' }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            "Beauty begins the moment <br/> you decide to be yourself."
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/80 uppercase tracking-widest text-sm"
          >
            — Coco Chanel
          </motion.p>
        </div>
      </section>

      {/* Art of Gifting / Editorial Section */}
      <section className="py-24 md:py-32 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[60vh] md:h-[80vh]"
            >
              <img src="/images/product-flatlay.png" alt="Birlla Products" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl"
            >
              <h2 className="text-3xl md:text-5xl font-serif mb-6 text-foreground">The Art of Ritual</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every Birlla product is designed to transform your daily routine into a moment of 
                pure indulgence. From the weight of the glass bottles to the delicate scent of 
                our signature rose essence, every detail is considered. Elevate your vanity with 
                creations that look as beautiful as they make you feel.
              </p>
              <Link href="/about">
                <button className="uppercase tracking-widest text-xs font-medium border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
                  Read Our Story
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
