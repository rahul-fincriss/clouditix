import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="text-xl font-bold text-gradient">Clouditix</span>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Transforming enterprises with Data, AI, and Intelligent Platforms.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Solutions</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/solutions" className="hover:text-primary transition-colors">Financial Crime Platform</Link>
            <Link to="/solutions" className="hover:text-primary transition-colors">Guest360 CDP</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Company</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link to="/approach" className="hover:text-primary transition-colors">Our Approach</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Get in Touch</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
            <span>info@clouditix.com</span>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Clouditix. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
