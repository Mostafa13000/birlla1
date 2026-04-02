import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <header
        className="fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out"
        style={{ top: '44px' }}
      >
        <div
          className={`transition-all duration-500 ease-in-out ${
            isScrolled || location !== '/' || isMobileMenuOpen
              ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50 py-4'
              : 'bg-transparent py-6'
          }`}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between">
              <button
                className="md:hidden p-2 -ml-2 text-foreground"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link key={link.path} href={link.path}>
                    <span
                      className={`text-sm uppercase tracking-widest hover:text-primary transition-colors cursor-pointer ${
                        location === link.path ? 'text-primary font-medium' : 'text-foreground'
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                ))}
              </nav>

              <Link href="/">
                <span className="text-3xl md:text-4xl font-serif tracking-tight cursor-pointer">
                  Birlla
                </span>
              </Link>

              <div className="flex items-center space-x-4 md:space-x-6">
                <button className="hover:text-primary transition-colors hidden md:block" aria-label="Search">
                  <Search size={20} strokeWidth={1.5} />
                </button>
                <button className="hover:text-primary transition-colors hidden md:block" aria-label="Account">
                  <User size={20} strokeWidth={1.5} />
                </button>
                <button className="hover:text-primary transition-colors relative" aria-label="Cart">
                  <ShoppingBag size={20} strokeWidth={1.5} />
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background px-6 md:hidden transition-all duration-300"
          style={{ paddingTop: '140px' }}
        >
          <nav className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif hover:text-primary transition-colors cursor-pointer"
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
