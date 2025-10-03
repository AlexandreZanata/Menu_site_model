import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n/translations';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              {t('hero.title', language)}
            </h3>
            <p className="text-sm text-primary-foreground/80">
              {t('hero.subtitle', language)}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/menu"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  {t('nav.menu', language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  {t('nav.about', language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/reservations"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  {t('nav.reservations', language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/admin"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  {t('nav.admin', language)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">
              {t('about.contact', language)}
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                +55 (11) 98765-4321
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                contato@saborverde.com
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                São Paulo, SP
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Social</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Sabor Verde. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
