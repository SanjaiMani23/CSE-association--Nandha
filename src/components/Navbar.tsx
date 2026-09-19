import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7A73D1] to-[#211C84]",
      "shadow-lg shadow-[#4D55CC]/30 backdrop-blur-md"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-4 group">
            <img 
              src="/logo/logocse.png" 
              alt="CSE Department Logo" 
              className="h-20 w-auto transition-all duration-300 group-hover:scale-105"
            />
            <div className="text-white font-bold leading-tight">
              <span className="block text-2xl md:text-3xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B5A8D5]">
                Tech Matrix
              </span>
              <span className="block text-xs md:text-sm text-white/90 font-medium tracking-wider">
                CSE Students Association
              </span>
            </div>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-1">
            <NavLink to="/" currentPath={location.pathname}>Home</NavLink>
            <NavLink to="/about" currentPath={location.pathname}>About</NavLink>
            <NavLink to="/team" currentPath={location.pathname}>Team</NavLink>
            <NavLink to="/events" currentPath={location.pathname}>Events</NavLink>
            <NavLink to="/grievances" currentPath={location.pathname}>Grievances</NavLink>
            <NavLink to="/contact" currentPath={location.pathname}>Contact</NavLink>
          </div>

          <div className="md:hidden flex items-center">
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
            "md:hidden absolute left-0 right-0 bg-gradient-to-b from-[#7A73D1] to-[#211C84]",
            "transition-all duration-300 ease-in-out overflow-hidden shadow-xl",
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
          style={{ top: '100%' }}
        >
          <div className="flex flex-col divide-y divide-white/20">
            {['/', '/about', '/team', '/events', '/grievances', '/contact'].map(path => (
              <MobileNavLink 
                key={path}
                to={path}
                onClick={toggleMenu}
                isActive={location.pathname === path}
              >
                {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(1).slice(1)}
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
  const isActive = currentPath === to;
  return (
    <Link 
      to={to} 
      className={cn(
        "relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 group",
        isActive 
          ? "text-white font-bold" 
          : "text-white/90 hover:text-white"
      )}
    >
      {children}
      {isActive ? (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-[3px] bg-white rounded-full"></span>
      ) : (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white rounded-full group-hover:w-4/5 transition-all duration-300"></span>
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
        "group px-8 py-5 text-lg font-semibold tracking-wide transition-all duration-200 flex items-center",
        isActive ? "text-white bg-white/20" : "text-white/90 hover:bg-white/10 hover:text-white"
      )}
    >
      {isActive && (
        <span className="w-2 h-6 bg-white rounded-full mr-3 animate-pulse"></span>
      )}
      <span className={cn("transition-all", isActive ? "ml-2" : "ml-5")}>
        {children}
      </span>
      {!isActive && (
        <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          →
        </span>
      )}
    </Link>
  );
};

export default Navbar;
