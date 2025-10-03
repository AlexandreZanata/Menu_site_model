import { Link } from 'react-router-dom';
import { Dish } from '@/lib/data/menuData';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n/translations';
import { dishImages } from '@/lib/assets';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Leaf, Flame, Award } from 'lucide-react';

interface MenuCardProps {
  dish: Dish;
}

export function MenuCard({ dish }: MenuCardProps) {
  const { language } = useLanguage();
  
  const dishImage = dish.images[0] ? dishImages[dish.images[0]] : '';
  const currency = language === 'pt' ? 'R$' : '$';

  const tagIcons: Record<string, any> = {
    vegan: Leaf,
    vegetarian: Leaf,
    spicy: Flame,
    featured: Star,
    new: Award,
  };

  return (
    <Link 
      to={`/dish/${dish.id}`} 
      className="block"
      onClick={() => window.scrollTo(0, 0)}
    >
      <Card className="overflow-hidden hover-lift h-full">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={dishImage}
            alt={dish.name[language]}
            className="w-full h-full object-cover transition-smooth hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-heading font-semibold text-lg leading-tight">
              {dish.name[language]}
            </h3>
            <span className="text-primary font-bold text-lg whitespace-nowrap">
              {currency} {dish.price.toFixed(2)}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {dish.shortDescription[language]}
          </p>

          {/* Tags */}
          {dish.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {dish.tags.slice(0, 3).map((tag) => {
                const IconComponent = tagIcons[tag];
                return (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {IconComponent && <IconComponent className="w-3 h-3 mr-1" />}
                    {t(`tag.${tag}`, language)}
                  </Badge>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
