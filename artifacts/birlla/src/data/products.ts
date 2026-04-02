export type Category = 'Makeup' | 'Skincare' | 'Haircare' | 'Body Care';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  isBestseller?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Luminous Silk Foundation',
    category: 'Makeup',
    price: 68,
    image: '/images/product-flatlay.png',
    description: 'A lightweight, liquid foundation that delivers buildable coverage and a long-lasting, hydrating glow.',
    isBestseller: true,
  },
  {
    id: '2',
    name: 'Velvet Rose Lipstick',
    category: 'Makeup',
    price: 42,
    image: '/images/product-lipstick.png',
    description: 'A luxurious, creamy lipstick that provides intense hydration and rich, long-lasting color.',
    isBestseller: true,
  },
  {
    id: '3',
    name: 'Midnight Bronze Palette',
    category: 'Makeup',
    price: 75,
    image: '/images/product-eyeshadow.png',
    description: 'A curated selection of warm nudes, champagne golds, and deep bronzes for endless elegant looks.',
  },
  {
    id: '4',
    name: 'Radiance Renewal Serum',
    category: 'Skincare',
    price: 120,
    image: '/images/product-serum.png',
    description: 'A potent, anti-aging serum infused with pearl extract and rose essence to rejuvenate the skin.',
    isBestseller: true,
  },
  {
    id: '5',
    name: 'Cashmere Body Butter',
    category: 'Body Care',
    price: 55,
    image: '/images/product-bodycare.png',
    description: 'An intensely nourishing body cream that melts into the skin, leaving it soft, supple, and delicately scented.',
    isBestseller: true,
  },
  {
    id: '6',
    name: 'Golden Hour Hair Oil',
    category: 'Haircare',
    price: 48,
    image: '/images/product-serum.png',
    description: 'A lightweight, multi-use hair oil that smooths frizz, adds shine, and protects against heat damage.',
  },
  {
    id: '7',
    name: 'Rosewater Hydrating Mist',
    category: 'Skincare',
    price: 38,
    image: '/images/product-flatlay.png',
    description: 'A refreshing facial mist that hydrates, tones, and preps the skin for makeup application.',
  },
  {
    id: '8',
    name: 'Champagne Glow Highlighter',
    category: 'Makeup',
    price: 45,
    image: '/images/product-eyeshadow.png',
    description: 'A finely milled highlighter that blends seamlessly into the skin for a natural, luminous finish.',
  }
];
