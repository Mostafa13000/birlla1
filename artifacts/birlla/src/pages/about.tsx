import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
  return (
    <div className="w-full bg-background overflow-hidden pt-32">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0">
          <img 
            src="/images/brand-story.png" 
            alt="Birlla Vanity" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-white"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">
              Born in Paris, Worn by the World
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Birlla was founded on a simple but profound belief: beauty is not a mask, but a revelation. 
                In a world obsessed with perfection, we celebrate radiance. We believe in the power of a bold 
                lip to change your day, and the comfort of a rich serum to soothe your soul.
              </p>
              <p>
                Our journey began in a small atelier in Le Marais, where we sought to create products that 
                felt as luxurious as couture, yet as essential as water. Every formula is meticulously crafted, 
                blending rare botanicals with cutting-edge science.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Atelier */}
      <section className="py-24 px-4 md:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-5xl font-serif mb-6">The Craftsmanship</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We approach beauty the way a jeweler approaches gems. Our signature dusty rose pigment took 
                two years and 47 iterations to perfect. Our body butters are whipped for precisely 72 hours 
                to achieve their cloud-like texture. We compromise on nothing, so you never have to.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When you hold a piece of Birlla, you are holding hours of dedication, years of expertise, 
                and an unwavering commitment to making you feel extraordinary.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative aspect-[4/5] w-full max-w-md mx-auto"
            >
              <img src="/images/product-lipstick.png" alt="Birlla Craftsmanship" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-32 px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <img src="/images/texture-silk.png" alt="Silk" className="w-24 h-24 object-cover rounded-full mx-auto mb-8 opacity-80" />
          <h3 className="text-3xl md:text-5xl font-serif text-foreground leading-tight italic">
            "To be radiant is to be unapologetically yourself. We just provide the light."
          </h3>
          <p className="mt-8 uppercase tracking-widest text-sm text-muted-foreground">— The Birlla Founders</p>
        </motion.div>
      </section>
    </div>
  );
}
