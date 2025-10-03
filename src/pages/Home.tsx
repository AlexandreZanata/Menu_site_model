import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMenu } from '@/contexts/MenuContext';
import { t } from '@/lib/i18n/translations';
import { heroImage } from '@/lib/assets';
import { Button } from '@/components/ui/button';
import { MenuCard } from '@/components/MenuCard';
import { ArrowRight, UtensilsCrossed, Users, Award } from 'lucide-react';

export default function Home() {
  const { language } = useLanguage();
  const { dishes, categories } = useMenu();

  const featuredDishes = dishes.filter((dish) => dish.featured && dish.available).slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in text-foreground">
            {t('hero.title', language)}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 animate-fade-in">
            {t('hero.subtitle', language)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="text-lg">
              <Link to="/menu">
                {t('hero.cta', language)}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/reservations">{t('hero.reserve', language)}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <UtensilsCrossed className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                {language === 'pt' ? 'Ingredientes Frescos' : 'Fresh Ingredients'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'pt'
                  ? 'Selecionamos os melhores ingredientes locais e orgânicos'
                  : 'We select the best local and organic ingredients'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                {language === 'pt' ? 'Experiência Única' : 'Unique Experience'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'pt'
                  ? 'Ambiente acolhedor e atendimento personalizado'
                  : 'Welcoming atmosphere and personalized service'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                {language === 'pt' ? 'Pratos Premiados' : 'Award-Winning Dishes'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'pt'
                  ? 'Receitas cuidadosamente desenvolvidas pelos nossos chefs'
                  : 'Recipes carefully developed by our chefs'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {language === 'pt' ? 'Pratos em Destaque' : 'Featured Dishes'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'pt'
                ? 'Conheça alguns dos nossos pratos mais populares'
                : 'Discover some of our most popular dishes'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredDishes.map((dish) => (
              <MenuCard key={dish.id} dish={dish} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/menu">
                {language === 'pt' ? 'Ver Cardápio Completo' : 'View Full Menu'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {language === 'pt' ? 'Nossas Categorias' : 'Our Categories'}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/menu?category=${category.id}`}
                className="p-6 bg-card rounded-lg text-center hover-lift transition-smooth"
              >
                <h3 className="font-heading font-semibold text-lg">
                  {category.name[language]}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
