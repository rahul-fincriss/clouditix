import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const solutionLinks = [
  { label: "Financial Crime Platform", path: "/solutions/financial-crime" },
  { label: "Guest360 — Hospitality CDP", path: "/solutions/guest360" },
];

const navLinks = [
  { label: "Services", path: "/services" },
  { label: "Approach", path: "/approach" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isSolutionsActive = location.pathname.startsWith("/solutions");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          <img src={logo} alt="Clouditix Technologies" className="h-12" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {/* Solutions dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className={`text-sm transition-colors hover:text-primary flex items-center gap-1 ${
                isSolutionsActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Solutions <ChevronDown size={14} className={`transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 rounded-lg border border-border bg-card/95 backdrop-blur-xl shadow-lg py-2">
                {solutionLinks.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    onClick={() => setSolutionsOpen(false)}
                    className={`block px-4 py-2.5 text-sm transition-colors hover:bg-secondary hover:text-primary ${
                      location.pathname === l.path ? "text-primary bg-secondary/50" : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm transition-colors hover:text-primary ${
                location.pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Book a Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container py-4 flex flex-col gap-2">
            {/* Solutions accordion */}
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Solutions <ChevronDown size={14} className={`transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileSolutionsOpen && (
              <div className="pl-4 flex flex-col gap-1">
                {solutionLinks.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    onClick={() => { setOpen(false); setMobileSolutionsOpen(false); }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors py-1.5"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90 mt-2">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
