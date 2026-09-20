import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, ShieldCheck, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/contact', label: 'Contact / Feedback' },
];

const aboutDropdownItems = [
  { path: '/events', label: 'Event' },
  { path: '/events#calendar', label: 'Activity Calendar' },
  { path: '/#verticals', label: 'Vertical' },
  { path: '/team', label: 'Faculty & Coordinators' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/gallery', label: 'Gallery' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsMobileAboutOpen(false);
  };

  // Scroll to top on route change unless hash is present
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Close dropdown on route change
  useEffect(() => {
    setIsAboutOpen(false);
    setIsOpen(false);
    setIsMobileAboutOpen(false);
  }, [location.pathname, location.hash]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Determine if About is active
  const isAboutActive = aboutDropdownItems.some(item => 
    location.pathname === item.path.split('#')[0] && location.pathname !== '/'
  );

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7A73D1] to-[#211C84]",
      "shadow-lg shadow-[#4D55CC]/30 backdrop-blur-md"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo / Branding */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo/logocse.png" 
              alt="CSE Department Logo" 
              className="h-14 md:h-18 w-auto transition-all duration-300 group-hover:scale-105"
            />
            <div className="text-white font-bold leading-tight">
              <span className="block text-xl md:text-2xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B5A8D5]">
                Nandha
              </span>
              <span className="block text-[10px] md:text-xs text-white/90 font-medium tracking-wider">
                CSE Association 2026–27
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {/* Home Link */}
            <NavLink to="/" currentPath={location.pathname}>Home</NavLink>

            {/* About Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className={cn(
                  "px-3 py-2 text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-1",
                  isAboutActive ? "text-white font-bold" : "text-white/85 hover:text-white"
                )}
              >
                About
                <ChevronDown className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  isAboutOpen && "rotate-180"
                )} />
              </button>

              {/* Dropdown Menu */}
              <div className={cn(
                "absolute left-0 top-full mt-1 w-56 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl shadow-slate-900/20 border border-slate-200/80 transition-all duration-200 origin-top-left",
                isAboutOpen
                  ? "opacity-100 scale-100 visible translate-y-0"
                  : "opacity-0 scale-95 invisible -translate-y-1"
              )}>
                <ul className="py-1.5">
                  {aboutDropdownItems.map((item) => (
                    <li key={item.path + item.label}>
                      <Link
                        to={item.path}
                        onClick={() => setIsAboutOpen(false)}
                        className={cn(
                          "block px-4 py-2.5 text-sm font-medium transition-colors duration-150",
                          (location.pathname === item.path.split('#')[0] && location.hash === (item.path.split('#')[1] ? '#' + item.path.split('#')[1] : ''))
                            ? "text-indigo-700 bg-indigo-50 font-semibold"
                            : "text-slate-700 hover:bg-slate-100 hover:text-indigo-600"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact / Feedback */}
            <NavLink to="/contact" currentPath={location.pathname}>
              Contact / Feedback
            </NavLink>
          </div>

          {/* Mobile Menu Controls */}
          <div className="lg:hidden flex items-center gap-2">
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
            "transition-all duration-300 ease-in-out overflow-hidden shadow-xl",
            isOpen ? "max-h-[80vh] opacity-100 py-4 overflow-y-auto" : "max-h-0 opacity-0 py-0"
          )}
          style={{ top: '100%' }}
        >
          <div className="flex flex-col divide-y divide-white/15 px-2">
            {/* Home */}
            <MobileNavLink to="/" onClick={toggleMenu} isActive={location.pathname === '/'}>
              Home
            </MobileNavLink>

            {/* About Dropdown in Mobile */}
            <div>
              <button
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                className={cn(
                  "w-full group px-6 py-3.5 text-base font-semibold tracking-wide transition-all duration-200 flex items-center justify-between rounded-lg",
                  isAboutActive
                    ? "text-white bg-white/20"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                )}
              >
                <span className="ml-2">About</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isMobileAboutOpen && "rotate-180"
                )} />
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-200",
                isMobileAboutOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="pl-6 pb-2 space-y-0.5 mt-1">
                  {aboutDropdownItems.map((item) => (
                    <Link
                      key={item.path + item.label}
                      to={item.path}
                      onClick={toggleMenu}
                      className={cn(
                        "block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
                        (location.pathname === item.path.split('#')[0] && location.hash === (item.path.split('#')[1] ? '#' + item.path.split('#')[1] : ''))
                          ? "text-white bg-white/20"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact / Feedback */}
            <MobileNavLink 
              to="/contact"
              onClick={toggleMenu}
              isActive={location.pathname === '/contact'}
            >
              Contact / Feedback
            </MobileNavLink>
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
        "relative px-3 py-2 text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 group whitespace-nowrap",
        isActive 
          ? "text-white font-bold" 
          : "text-white/85 hover:text-white"
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
