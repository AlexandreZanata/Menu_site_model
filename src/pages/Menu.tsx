import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMenu } from '@/contexts/MenuContext';
import { t } from '@/lib/i18n/translations';
import { MenuCard } from '@/components/MenuCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function Menu() {
  const { language } = useLanguage();
  const { dishes, categories } = useMenu();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  );

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const filteredDishes = dishes.filter((dish) => {
    if (!dish.available) return false;
    
    if (selectedCategory && dish.categoryId !== selectedCategory) {
      return false;
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        dish.name.pt.toLowerCase().includes(query) ||
        dish.name.en.toLowerCase().includes(query) ||
        dish.shortDescription.pt.toLowerCase().includes(query) ||
        dish.shortDescription.en.toLowerCase().includes(query)
      );
    }

    return true;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {t('menu.title', language)}
          </h1>
          <p className="text-lg text-muted-foreground">
            {language === 'pt'
              ? 'Explore nossos pratos deliciosos e autênticos'
              : 'Explore our delicious and authentic dishes'}
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('menu.search', language)}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDishes.map((dish) => (
              <MenuCard key={dish.id} dish={dish} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              {t('menu.noResults', language)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
