import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMenu } from '@/contexts/MenuContext';
import { t } from '@/lib/i18n/translations';
import { dishImages } from '@/lib/assets';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Leaf, Flame, Award, AlertTriangle, Star } from 'lucide-react';

export default function DishDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const { dishes } = useMenu();

  const dish = dishes.find((d) => d.id === id);

  if (!dish) {
    return <Navigate to="/menu" replace />;
  }

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
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/menu">
            <ArrowLeft className="mr-2 w-4 h-4" />
            {t('dish.backToMenu', language)}
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-card">
            <img
              src={dishImage}
              alt={dish.name[language]}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                  {dish.name[language]}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {dish.shortDescription[language]}
                </p>
              </div>
              <div className="text-3xl font-bold text-primary whitespace-nowrap ml-4">
                {currency} {dish.price.toFixed(2)}
              </div>
            </div>

            {/* Tags */}
            {dish.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {dish.tags.map((tag) => {
                  const IconComponent = tagIcons[tag];
                  return (
                    <Badge key={tag} variant="secondary">
                      {IconComponent && <IconComponent className="w-4 h-4 mr-1" />}
                      {t(`tag.${tag}`, language)}
                    </Badge>
                  );
                })}
              </div>
            )}

            {/* Description */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <p className="text-foreground leading-relaxed">
                  {dish.fullDescription[language]}
                </p>
              </CardContent>
            </Card>

            {/* Portion Sizes */}
            {dish.sizes && dish.sizes.length > 0 && (
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold mb-3">
                    {t('dish.portionSizes', language)}
                  </h3>
                  <div className="space-y-2">
                    {dish.sizes.map((size, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-foreground">{size.label[language]}</span>
                        <span className="font-semibold text-primary">
                          {currency} {size.price.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Allergens */}
            {dish.allergens.length > 0 && (
              <Card className="mb-6 border-warning/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading font-semibold mb-2">
                        {t('dish.allergens', language)}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {dish.allergens.map((allergen) => (
                          <Badge key={allergen} variant="outline">
                            {t(`allergen.${allergen}`, language)}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Calories */}
            {dish.calories && (
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center">
                    <span className="font-heading font-semibold">
                      {t('dish.calories', language)}
                    </span>
                    <span className="text-foreground">{dish.calories} kcal</span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
