import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { categories as initialCategories, dishes as initialDishes, Category, Dish } from '@/lib/data/menuData';

interface MenuContextType {
  categories: Category[];
  dishes: Dish[];
  addCategory: (category: Category) => void;
  updateCategory: (id: string, category: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  addDish: (dish: Dish) => void;
  updateDish: (id: string, dish: Partial<Dish>) => void;
  deleteDish: (id: string) => void;
  importData: (data: { categories: Category[]; dishes: Dish[] }) => void;
  exportData: () => { categories: Category[]; dishes: Dish[] };
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [dishes, setDishes] = useState<Dish[]>([]);

  // Load from localStorage or use initial data
  useEffect(() => {
    const savedCategories = localStorage.getItem('menu_categories');
    const savedDishes = localStorage.getItem('menu_dishes');
    
    if (savedCategories && savedDishes) {
      try {
        setCategories(JSON.parse(savedCategories));
        setDishes(JSON.parse(savedDishes));
      } catch (e) {
        setCategories(initialCategories);
        setDishes(initialDishes);
      }
    } else {
      setCategories(initialCategories);
      setDishes(initialDishes);
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (categories.length > 0 && dishes.length > 0) {
      localStorage.setItem('menu_categories', JSON.stringify(categories));
      localStorage.setItem('menu_dishes', JSON.stringify(dishes));
    }
  }, [categories, dishes]);

  const addCategory = (category: Category) => {
    setCategories(prev => [...prev, category]);
  };

  const updateCategory = (id: string, updates: Partial<Category>) => {
    setCategories(prev =>
      prev.map(cat => (cat.id === id ? { ...cat, ...updates } : cat))
    );
  };

  const deleteCategory = (id: string) => {
    setCategories(prev => prev.filter(cat => cat.id !== id));
    // Also delete dishes in this category
    setDishes(prev => prev.filter(dish => dish.categoryId !== id));
  };

  const addDish = (dish: Dish) => {
    setDishes(prev => [...prev, dish]);
  };

  const updateDish = (id: string, updates: Partial<Dish>) => {
    setDishes(prev =>
      prev.map(dish => (dish.id === id ? { ...dish, ...updates } : dish))
    );
  };

  const deleteDish = (id: string) => {
    setDishes(prev => prev.filter(dish => dish.id !== id));
  };

  const importData = (data: { categories: Category[]; dishes: Dish[] }) => {
    setCategories(data.categories);
    setDishes(data.dishes);
  };

  const exportData = () => {
    return { categories, dishes };
  };

  return (
    <MenuContext.Provider
      value={{
        categories,
        dishes,
        addCategory,
        updateCategory,
        deleteCategory,
        addDish,
        updateDish,
        deleteDish,
        importData,
        exportData,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}
