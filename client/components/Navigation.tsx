import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Activity, User, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '@/contexts/AuthContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="medical-gradient p-2 rounded-lg">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-medical-navy">RehabAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link to="/for-patients" className="text-muted-foreground hover:text-foreground transition-colors">
            For Patients
          </Link>
          <Link to="/for-providers" className="text-muted-foreground hover:text-foreground transition-colors">
            For Providers
          </Link>
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <AuthButtons />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b">
            <Link 
              to="/features" 
              className="block px-3 py-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/for-patients" 
              className="block px-3 py-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              For Patients
            </Link>
            <Link 
              to="/for-providers" 
              className="block px-3 py-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              For Providers
            </Link>
            <Link 
              to="/pricing" 
              className="block px-3 py-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 space-y-2">
              <div className="md:hidden">
                <AuthButtons onClose={() => setIsOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function AuthButtons({ onClose }: { onClose?: () => void }) {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    if (onClose) onClose();
  };

  if (user) {
    return (
      <div className="flex items-center space-x-4">
        <Button variant="ghost" asChild>
          <Link to="/dashboard" onClick={onClose}>
            <User className="mr-2 h-4 w-4" />
            {user.firstName}
          </Link>
        </Button>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button variant="ghost" asChild>
        <Link to="/login" onClick={onClose}>Sign In</Link>
      </Button>
      <Button className="medical-gradient text-white" asChild>
        <Link to="/get-started" onClick={onClose}>Get Started</Link>
      </Button>
    </>
  );
}
