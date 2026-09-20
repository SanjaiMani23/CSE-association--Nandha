import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navFeatures = [
  { path: '/', label: 'Home' },
  { path: '/verticals', label: 'Verticals' },
  { path: '/events', label: 'Events' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/team', label: 'Team' },
  { path: '/grievances', label: 'Grievances' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to top on route change unless hash is present
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7A73D1] to-[#211C84]",
      "shadow-lg shadow-[#4D55CC]/30 backdrop-blur-md w-full"
    )}>
      <div className="w-full px-3 sm:px-5 lg:px-6">
        <div className="flex justify-between items-center h-20 md:h-24 w-full">
          {/* Logo / Branding - Left Most Corner */}
          <Link to="/" className="flex items-center space-x-3 group shrink-0 pl-1">
            <img 
              src="/logo/logocse.png" 
              alt="CSE Department Logo" 
              className="h-14 md:h-18 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-md"
            />
            <div className="text-white font-bold leading-tight">
              <span className="block text-xl md:text-2xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-[#B5A8D5]">
                Nandha
              </span>
              <span className="block text-[10px] md:text-xs text-white/90 font-medium tracking-wider">
                CSE Association 2026–27
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Features - Right Most Corner */}
          <div className="hidden lg:flex lg:items-center lg:gap-1 xl:gap-2 ml-auto pr-1">
            {navFeatures.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path} 
                currentPath={location.pathname}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Controls */}
          <div className="lg:hidden flex items-center gap-2 pr-1">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-white/20 rounded-full transition-all"
            >
              {isOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "lg:hidden absolute left-0 right-0 bg-gradient-to-b from-[#7A73D1] to-[#211C84]",
            "transition-all duration-300 ease-in-out overflow-hidden shadow-xl border-t border-white/10",
            isOpen ? "max-h-[85vh] opacity-100 py-4 overflow-y-auto" : "max-h-0 opacity-0 py-0"
          )}
          style={{ top: '100%' }}
        >
          <div className="flex flex-col divide-y divide-white/15 px-3 space-y-0.5">
            {navFeatures.map((item) => (
              <MobileNavLink 
                key={item.path}
                to={item.path} 
                onClick={toggleMenu} 
                isActive={location.pathname === item.path}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  currentPath: string;
  children: React.ReactNode;
}

const NavLink = ({ to, currentPath, children }: NavLinkProps) => {
  const isActive = currentPath === to.split('#')[0];
  return (
    <Link 
      to={to} 
      className={cn(
        "relative px-2.5 py-1.5 xl:px-3 xl:py-2 text-xs xl:text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg group whitespace-nowrap",
        isActive 
          ? "text-white font-bold bg-white/15 shadow-sm" 
          : "text-white/85 hover:text-white hover:bg-white/10"
      )}
    >
      {children}
      {isActive ? (
        <span className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-white rounded-full"></span>
      ) : (
        <span className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white/80 rounded-full group-hover:w-3/4 transition-all duration-300"></span>
      )}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}

const MobileNavLink = ({ 
  to, 
  onClick, 
  isActive, 
  children 
}: MobileNavLinkProps) => {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={cn(
        "group px-6 py-3.5 text-base font-semibold tracking-wide transition-all duration-200 flex items-center rounded-lg",
        isActive ? "text-white bg-white/20" : "text-white/90 hover:bg-white/10 hover:text-white"
      )}
    >
      {isActive && (
        <span className="w-1.5 h-4 bg-white rounded-full mr-2.5 animate-pulse"></span>
      )}
      <span className={cn("transition-all", isActive ? "ml-1" : "ml-2")}>
        {children}
      </span>
      {!isActive && (
        <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
          →
        </span>
      )}
    </Link>
  );
};

export default Navbar;
