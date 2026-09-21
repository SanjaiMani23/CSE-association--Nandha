import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const aboutDropdownItems = [
  { path: '/events', label: 'Event' },
  { path: '/events#calendar', label: 'Activity Calendar' },
  { path: '/verticals', label: 'Vertical' },
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
    } else {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.pathname, location.hash]);

  // Close dropdowns on route or hash change
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

  // Determine if About or any of its children are active
  const isAboutActive = aboutDropdownItems.some(item => 
    location.pathname === item.path.split('#')[0] && location.pathname !== '/'
  );

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7A73D1] to-[#211C84]",
      "shadow-lg shadow-[#4D55CC]/30 backdrop-blur-md w-full"
    )}>
      <div className="w-full px-3 sm:px-5 lg:px-8">
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
          <div className="hidden lg:flex lg:items-center lg:gap-2 xl:gap-3 ml-auto pr-1">
            {/* Home Link */}
            <NavLink to="/" currentPath={location.pathname}>
              Home
            </NavLink>

            {/* About Dropdown */}
            <div 
              ref={dropdownRef} 
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className={cn(
                  "relative px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg group whitespace-nowrap flex items-center gap-1.5",
                  isAboutActive
                    ? "text-white font-bold bg-white/15 shadow-sm"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                )}
              >
                <span>About</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200 stroke-[2.5]",
                  isAboutOpen && "rotate-180"
                )} />
                {isAboutActive ? (
                  <span className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-white rounded-full"></span>
                ) : (
                  <span className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white/80 rounded-full group-hover:w-3/4 transition-all duration-300"></span>
                )}
              </button>

              {/* Dropdown Menu Box */}
              <div 
                className={cn(
                  "absolute right-0 top-full pt-1.5 w-60 transition-all duration-200 origin-top-right z-50",
                  isAboutOpen
                    ? "opacity-100 scale-100 visible translate-y-0"
                    : "opacity-0 scale-95 invisible -translate-y-2 pointer-events-none"
                )}
              >
                <div className="bg-white rounded-2xl shadow-2xl shadow-slate-950/25 border border-slate-100/90 py-2.5 overflow-hidden">
                  <ul className="space-y-0.5">
                    {aboutDropdownItems.map((item) => {
                      const isItemActive =
                        location.pathname === item.path.split('#')[0] &&
                        (!item.path.includes('#') || location.hash === `#${item.path.split('#')[1]}`);
                      return (
                        <li key={item.path + item.label}>
                          <Link
                            to={item.path}
                            onClick={() => setIsAboutOpen(false)}
                            className={cn(
                              "block px-5 py-2.5 text-sm font-medium transition-colors duration-150 mx-1.5 rounded-xl",
                              isItemActive
                                ? "text-indigo-600 bg-indigo-50/80 font-bold"
                                : "text-slate-700 hover:bg-slate-100/80 hover:text-indigo-600"
                            )}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact / Feedback Link */}
            <NavLink to="/contact" currentPath={location.pathname}>
              Contact / Feedback
            </NavLink>
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
          <div className="flex flex-col divide-y divide-white/15 px-3 space-y-1">
            {/* Home */}
            <MobileNavLink 
              to="/" 
              onClick={toggleMenu} 
              isActive={location.pathname === '/'}
            >
              Home
            </MobileNavLink>

            {/* About Dropdown in Mobile */}
            <div className="py-1">
              <button
                type="button"
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                className={cn(
                  "w-full group px-6 py-3.5 text-base font-semibold tracking-wide transition-all duration-200 flex items-center justify-between rounded-lg",
                  isAboutActive
                    ? "text-white bg-white/20 font-bold"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                )}
              >
                <div className="flex items-center">
                  {isAboutActive && (
                    <span className="w-1.5 h-4 bg-white rounded-full mr-2.5 animate-pulse"></span>
                  )}
                  <span className={isAboutActive ? "ml-1" : "ml-2"}>About</span>
                </div>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200 stroke-[2.5]",
                  isMobileAboutOpen && "rotate-180"
                )} />
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-200",
                isMobileAboutOpen ? "max-h-80 opacity-100 mt-1" : "max-h-0 opacity-0"
              )}>
                <div className="pl-6 pr-2 pb-2 space-y-1">
                  {aboutDropdownItems.map((item) => {
                    const isSubActive =
                      location.pathname === item.path.split('#')[0] &&
                      (!item.path.includes('#') || location.hash === `#${item.path.split('#')[1]}`);
                    return (
                      <Link
                        key={item.path + item.label}
                        to={item.path}
                        onClick={toggleMenu}
                        className={cn(
                          "block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
                          isSubActive
                            ? "text-white bg-white/20 font-bold"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
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
        "relative px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg group whitespace-nowrap",
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
