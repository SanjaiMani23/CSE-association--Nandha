import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const moreRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Track scroll for header background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change unless hash is present
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMoreOpen(false);
  }, [location.pathname, location.hash]);

  // Close "More" dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Items shown directly in the desktop navbar
  const primaryNav = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Events' },
    { to: '/verticals', label: 'Verticals' },
    { to: '/achievements', label: 'Achievements' },
    { to: '/gallery', label: 'Gallery' },
  ];

  // Items inside "More" dropdown on desktop
  const moreNav = [
    { to: '/events#calendar', label: 'Activity Calendar' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact / Feedback' },
  ];

  // All items flat for mobile
  const mobileNav = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Events' },
    { to: '/events#calendar', label: 'Activity Calendar' },
    { to: '/verticals', label: 'Verticals' },
    { to: '/team', label: 'Team' },
    { to: '/achievements', label: 'Achievements' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact / Feedback' },
  ];

  const isMoreActive = moreNav.some(
    (item) => location.pathname === item.to.split('#')[0]
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "shadow-xl shadow-black/20"
          : ""
      )}
      style={{
        background: scrolled
          ? 'rgba(15, 10, 50, 0.55)'
          : 'rgba(25, 18, 80, 0.45)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-[68px]">

          {/* ── LEFT: Logo + Branding ── */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/logo/logocse.png"
              alt="CSE Department Logo"
              className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-tight">
              <span className="block text-base md:text-lg font-bold tracking-wide text-white">
                Nandha
              </span>
              <span className="block text-[10px] md:text-[11px] text-white/70 font-medium tracking-wider">
                CSE Association
              </span>
            </div>
          </Link>

          {/* ── CENTER-RIGHT: Desktop Navigation ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {primaryNav.map((item) => (
              <NavLink key={item.to} to={item.to} currentPath={location.pathname}>
                {item.label}
              </NavLink>
            ))}

            {/* ── More Dropdown ── */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={cn(
                  "relative flex items-center gap-1 px-3 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300 whitespace-nowrap rounded-md",
                  isMoreActive
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                )}
              >
                More
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    moreOpen && "rotate-180"
                  )}
                />
                {isMoreActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-white/90 rounded-full" />
                )}
              </button>

              {/* Dropdown panel */}
              <div
                className={cn(
                  "absolute right-0 top-full mt-2 w-52 rounded-xl border border-white/10 overflow-hidden transition-all duration-200 origin-top-right",
                  moreOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                )}
                style={{
                  background: 'rgba(15, 10, 50, 0.5)',
                  backdropFilter: 'blur(28px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                <div className="py-2 px-1.5">
                  {moreNav.map((item) => {
                    const isActive = location.pathname === item.to.split('#')[0] &&
                      (item.to.includes('#')
                        ? location.hash === '#' + item.to.split('#')[1]
                        : true);
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setMoreOpen(false)}
                        className={cn(
                          "block px-3 py-2.5 text-[13px] font-medium rounded-lg transition-colors duration-200",
                          isActive
                            ? "text-white bg-white/10"
                            : "text-white/80 hover:text-white hover:bg-white/8"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ── Mobile Menu Toggle ── */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-white/10 rounded-lg transition-all h-9 w-9"
            >
              {isOpen ? (
                <X size={22} strokeWidth={2.5} />
              ) : (
                <Menu size={22} strokeWidth={2.5} />
              )}
            </Button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={cn(
            "lg:hidden absolute left-0 right-0 transition-all duration-300 ease-in-out overflow-hidden",
            isOpen
              ? "max-h-[80vh] opacity-100 overflow-y-auto"
              : "max-h-0 opacity-0"
          )}
          style={{
            top: '100%',
            background: 'rgba(15, 10, 50, 0.6)',
            backdropFilter: 'blur(28px) saturate(180%)',
            WebkitBackdropFilter: 'blur(28px) saturate(180%)',
            borderTop: isOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
            boxShadow: isOpen ? '0 20px 50px rgba(0,0,0,0.45)' : 'none',
          }}
        >
          <div className="flex flex-col py-3 px-3 space-y-0.5">
            {mobileNav.map((item) => {
              const isActive =
                location.pathname === item.to.split('#')[0] &&
                (!item.to.includes('#') || location.hash === '#' + item.to.split('#')[1]);
              return (
                <MobileNavLink
                  key={item.to}
                  to={item.to}
                  onClick={toggleMenu}
                  isActive={isActive}
                >
                  {item.label}
                </MobileNavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

/* ── Desktop Nav Link ── */
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
        "relative px-3 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300 group whitespace-nowrap rounded-md",
        isActive
          ? "text-white"
          : "text-white/80 hover:text-white"
      )}
    >
      {children}
      {/* Active underline */}
      {isActive ? (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-white/90 rounded-full" />
      ) : (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white/60 rounded-full group-hover:w-5 transition-all duration-300" />
      )}
    </Link>
  );
};

/* ── Mobile Nav Link ── */
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
  children,
}: MobileNavLinkProps) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "px-4 py-3 text-sm font-semibold tracking-wide transition-all duration-200 flex items-center rounded-xl",
        isActive
          ? "text-white bg-white/10"
          : "text-white/85 hover:bg-white/8 hover:text-white"
      )}
    >
      {isActive && (
        <span className="w-1 h-4 bg-white/80 rounded-full mr-3 shrink-0" />
      )}
      <span>{children}</span>
    </Link>
  );
};

export default Navbar;
