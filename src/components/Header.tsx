import { Link, useLocation } from 'react-router-dom';
import { Menu, Globe, Home, UtensilsCrossed, Info, Camera, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n/translations';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home', language), icon: Home },
    { path: '/menu', label: t('nav.menu', language), icon: UtensilsCrossed },
    { path: '/about', label: t('nav.about', language), icon: Info },
    { path: '/gallery', label: t('nav.gallery', language), icon: Camera },
    { path: '/reservations', label: t('nav.reservations', language), icon: Calendar },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-card'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-heading font-bold text-primary">
            {t('hero.title', language)}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo(0, 0)}
                className={`text-sm font-medium transition-smooth ${
                  isActive(link.path)
                    ? 'text-primary font-semibold'
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === 'pt' ? 'EN' : 'PT'}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          {isMobile ? (
            <div className="flex items-center gap-2 md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2"
                  >
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] p-0">
                  <div className="flex flex-col h-full bg-gradient-to-b from-background to-background/95">
                    {/* Header da navegação mobile */}
                    <div className="p-6 border-b border-border/50">
                      <h2 className="text-xl font-heading font-bold text-primary">
                        {t('hero.title', language)}
                      </h2>
                      <p className="text-xs text-muted-foreground mt-1">
                        {language === 'pt' ? 'Menu de navegação' : 'Navigation menu'}
                      </p>
                    </div>

                    {/* Links de navegação */}
                    <nav className="flex-1 p-4 space-y-1">
                      {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => {
                              setIsMenuOpen(false);
                              window.scrollTo(0, 0);
                            }}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                              isActive(link.path)
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'text-foreground/70 hover:bg-accent hover:text-accent-foreground'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{link.label}</span>
                          </Link>
                        );
                      })}
                    </nav>

                    {/* Footer com toggle de idioma */}
                    <div className="p-4 border-t border-border/50">
                      <Button
                        variant="outline"
                        onClick={toggleLanguage}
                        className="w-full flex items-center justify-center gap-2"
                      >
                        <Globe className="w-4 h-4" />
                        {language === 'pt' ? 'English' : 'Português'}
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
