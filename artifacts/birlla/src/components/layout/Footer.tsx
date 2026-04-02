import { Link } from 'wouter';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { SiTiktok, SiPinterest } from 'react-icons/si';

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border/50 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/">
              <span className="text-4xl font-serif tracking-tight cursor-pointer inline-block mb-6">
                Birlla
              </span>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-md text-sm md:text-base leading-relaxed">
              Join our inner circle for exclusive access to new collections, private events, and a weekly dose of Parisian elegance.
            </p>
            <form className="flex max-w-md border-b border-foreground/20 pb-2 focus-within:border-foreground transition-colors">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none outline-none w-full text-sm placeholder:text-muted-foreground focus:ring-0 px-0"
              />
              <button 
                type="button" 
                className="text-xs uppercase tracking-widest font-medium hover:text-primary transition-colors whitespace-nowrap ml-4"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/shop"><span className="hover:text-primary transition-colors cursor-pointer">All Products</span></Link></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Makeup</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Skincare</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Fragrance</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Bestsellers</span></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-serif text-lg mb-6">Maison Birlla</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about"><span className="hover:text-primary transition-colors cursor-pointer">Our Story</span></Link></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Atelier & Boutiques</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Journal</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Contact Us</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <span className="hover:text-primary transition-colors cursor-pointer"><Instagram size={18} /></span>
            <span className="hover:text-primary transition-colors cursor-pointer"><SiTiktok size={16} /></span>
            <span className="hover:text-primary transition-colors cursor-pointer"><SiPinterest size={16} /></span>
            <span className="hover:text-primary transition-colors cursor-pointer"><Facebook size={18} /></span>
          </div>
          <div className="flex items-center space-x-6 text-xs text-muted-foreground">
            <span>&copy; {new Date().getFullYear()} Birlla. All rights reserved.</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
