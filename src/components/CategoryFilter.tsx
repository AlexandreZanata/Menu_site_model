import { Category } from '@/lib/data/menuData';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n/translations';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const { language } = useLanguage();

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={selectedCategory === null ? 'default' : 'outline'}
        onClick={() => onSelectCategory(null)}
        className={cn('transition-smooth')}
      >
        {t('menu.allCategories', language)}
      </Button>
      
      {categories
        .sort((a, b) => a.order - b.order)
        .map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            onClick={() => onSelectCategory(category.id)}
            className={cn('transition-smooth')}
          >
            {category.name[language]}
          </Button>
        ))}
    </div>
  );
}
