// NoveLand Navbar - Dark Cinematic Theme
// Fixed top navbar with logo, search, dark/light toggle, login button
// Becomes solid on scroll (like landnovel.com)

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`ln-navbar hidden md:flex ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <Link href="/" className="flex items-center ml-4" style={{ width: '10rem', flexShrink: 0 }}>
        <span style={{
          fontFamily: "'Sriracha', cursive",
          fontSize: '1.8rem',
          fontWeight: '700',
          background: 'linear-gradient(120deg, #8196ff 0%, #405fff 50%, #2b42be 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          NoveLand
        </span>
      </Link>

      {/* Right side */}
      <div className="flex-1 flex items-center justify-end gap-4 mr-4">
        {/* Search */}
        <Link
          href="/search"
          className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
          style={{ color: 'var(--foreground)', textDecoration: 'none', fontSize: '0.95rem' }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>ค้นหา</span>
        </Link>

        {/* Dark/Light Mode Toggle */}
        <div
          className="switch-mode"
          onClick={toggleTheme}
          title={theme === 'dark' ? 'เปลี่ยนเป็น Light Mode' : 'เปลี่ยนเป็น Dark Mode'}
        >
          <span style={{ color: '#ffd650', fontSize: '1.2rem' }}>
            {theme === 'dark' ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </span>
          <div style={{
            background: theme === 'dark' ? 'white' : 'black',
            color: theme === 'dark' ? 'black' : 'white',
            borderRadius: '10rem',
            padding: '0.15rem 0.75rem',
            fontSize: '0.65rem',
            fontWeight: '600',
            transition: 'all 0.5s',
          }}>
            {theme === 'dark' ? 'DARK MODE' : 'LIGHT MODE'}
          </div>
        </div>


      </div>
    </nav>
  );
}
