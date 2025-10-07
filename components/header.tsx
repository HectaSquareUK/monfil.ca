import { ThemeToggle } from './theme-toggle';
import { Heart, User, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <div className="top-bar">
        <span>Sign up and get 20% off to your first order. Sign Up Now</span>
        <a href="#" className="shop-now-link">Shop Now</a>
      </div>
      <div className="main-header">
        <div className="logo">
          <Image src="/logo.png" alt="monfil" width={100} height={50} />
        </div>
        <div className="user-actions">
          <div>
            <Heart />
          </div>
          <div>
            <User />
          </div>
          <div>
            <ShoppingCart />
          </div>
          <div>
            <ThemeToggle />
          </div>
          <a href="#" className="checkout-button">
            CHECKOUT
          </a>
        </div>
      </div>
    </header>
  );
}
