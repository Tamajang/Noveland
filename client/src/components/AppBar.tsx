// NoveLand Mobile AppBar - Floating bottom navigation bar
// Matches landnovel.com's mobile app-bar design

import { Link, useLocation } from 'wouter';
import { useTheme } from '@/contexts/ThemeContext';

interface AppBarProps {
  onLoginClick: () => void;
}

export default function AppBar({ onLoginClick }: AppBarProps) {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="ln-appbar md:hidden">
      <div className="app-bar-inner">
        {/* Center logo */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '3.5rem',
          height: '3.5rem',
          zIndex: 1,
        }}>
          <Link href="/">
            <div style={{
              width: '100%',
              height: '100%',
              background: theme === 'dark' ? '#ffffff' : '#ffffff',
              borderRadius: '50%',
              border: '0.15rem solid #405fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{
                fontFamily: "'Sriracha', cursive",
                fontSize: '0.8rem',
                fontWeight: '700',
                background: 'linear-gradient(120deg, #8196ff 0%, #405fff 50%, #2b42be 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>NL</span>
            </div>
          </Link>
        </div>

        {/* Menu items */}
        <div className="flex w-full h-full" style={{ padding: '0 0.5rem' }}>
          {/* Home */}
          <Link href="/" className="flex flex-1 items-center justify-center" style={{
            color: location === '/' ? '#405fff' : 'var(--foreground)',
            textDecoration: 'none',
            fontSize: '1.2rem',
            transition: 'all 0.3s',
          }}>
            <i className="fa-solid fa-house-chimney"></i>
          </Link>

          {/* Search */}
          <Link href="/search" className="flex flex-1 items-center justify-center" style={{
            color: location === '/search' ? '#405fff' : 'var(--foreground)',
            textDecoration: 'none',
            fontSize: '1.2rem',
            transition: 'all 0.3s',
          }}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>

          {/* Center spacer */}
          <div className="flex-1"></div>

          {/* Theme toggle */}
          <div
            className="flex flex-1 items-center justify-center"
            onClick={toggleTheme}
            style={{
              color: '#ffd650',
              fontSize: '1.2rem',
              cursor: 'pointer',
            }}
          >
            <i className={`fa-solid fa-${theme === 'dark' ? 'moon' : 'sun'}`}></i>
          </div>

          {/* Login */}
          <div
            className="flex flex-1 items-center justify-center"
            onClick={onLoginClick}
            style={{
              color: 'var(--foreground)',
              fontSize: '1.2rem',
              cursor: 'pointer',
            }}
          >
            <i className="fa-solid fa-right-to-bracket"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
