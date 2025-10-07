import { ThemeToggle } from './theme-toggle';
import { Heart, User, ShoppingCart, Search } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const tickerText = "Sign up and get 20% off your first order! • Free Delivery all over 🇨🇦 CANADA for orders above 100 CAD";

  const keyframes = `
    @keyframes ticker {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  return (
    <header>
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />
      <div style={{
        backgroundColor: '#000',
        color: '#fff',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
      }}>
        <span style={{
          display: 'inline-block',
          animation: 'ticker 15s linear infinite',
          fontSize: '75%',
        }}>
          {tickerText}
        </span>
      </div>
      <div className="main-header">
        <div className="search-bar" style={{ flex: 1, display: 'flex', alignItems: 'center', position: 'relative' }}>
          <Search style={{ position: 'absolute', left: '10px', color: '#9CA3AF' }} />
          <input 
            type="text" 
            placeholder="Search..." 
            style={{ 
              width: '100%', 
              maxWidth: '300px',
              padding: '0.5rem 0.5rem 0.5rem 2.5rem', 
              borderRadius: '0.25rem', 
              border: '1px solid #D1D5DB',
              backgroundColor: '#F9FAFB' 
            }} 
          />
        </div>
        <div className="logo" style={{ flex: 1, textAlign: 'center' }}>
          <Image src="/logo.png" alt="monfil" width={100} height={50} style={{ display: 'inline-block' }} />
        </div>
        <div className="user-actions" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
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
