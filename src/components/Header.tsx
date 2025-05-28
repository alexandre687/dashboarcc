
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Users, Info, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-secondary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="text-white font-nunito font-bold text-2xl">
              Cuidados<span className="text-primary">Conecta</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          )}

          {/* Desktop navigation */}
          {!isMobile && (
            <nav className="flex items-center gap-6">
              <NavLinks />
              <div className="flex items-center gap-3">
                <Button variant="ghost" asChild className="text-white">
                  <Link to="/entrar">Entrar</Link>
                </Button>
                <Button variant="default" asChild className="bg-primary hover:bg-primary/90">
                  <Link to="/cadastrar">Cadastrar</Link>
                </Button>
              </div>
            </nav>
          )}
        </div>

        {/* Mobile navigation */}
        {isMobile && isMenuOpen && (
          <nav className={cn(
            "flex flex-col space-y-4 mt-4 pb-4",
            isMenuOpen ? "animate-fade-in" : "opacity-0"
          )}>
            <NavLinks isMobile={true} />
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="ghost" asChild className="text-white justify-start">
                <Link to="/entrar" className="flex items-center gap-2">
                  <LogIn size={18} /> Entrar
                </Link>
              </Button>
              <Button variant="default" asChild className="bg-primary hover:bg-primary/90 justify-start">
                <Link to="/cadastrar" className="flex items-center gap-2">
                  <UserPlus size={18} /> Cadastrar
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

interface NavLinksProps {
  isMobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMobile }) => {
  const navItems = [
    { label: 'Início', path: '/', icon: <Home size={18} /> },
    { label: 'Cuidadores', path: '/cuidadores', icon: <Users size={18} /> },
    { label: 'Sobre', path: '/sobre', icon: <Info size={18} /> },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={cn(
            "text-white hover:text-primary/90 transition-colors",
            isMobile ? "flex items-center gap-2 py-2" : "font-medium"
          )}
        >
          {isMobile && item.icon}
          {item.label}
        </Link>
      ))}
    </>
  );
};

export default Header;
