// Centralized asset exports so components can import by logical name
import heroRestaurant from '@/assets/hero-restaurant.jpg';

import dish_brownie from '@/assets/dish-brownie.jpg';
import dish_bruschetta from '@/assets/dish-bruschetta.jpg';
import dish_caesar from '@/assets/dish-caesar.jpg';
import dish_carpaccio from '@/assets/dish-carpaccio.jpg';
import dish_cheesecake from '@/assets/dish-cheesecake.jpg';
import dish_coxinha from '@/assets/dish-coxinha.jpg';
import dish_executive from '@/assets/dish-executive.jpg';
import dish_fettuccine from '@/assets/dish-fettuccine.jpg';
import dish_filet from '@/assets/dish-filet.jpg';
import dish_kids_burger from '@/assets/dish-kids-burger.jpg';
import dish_kids_nuggets from '@/assets/dish-kids-nuggets.jpg';
import dish_kids_pancake from '@/assets/dish-kids-pancake.jpg';
import dish_kids_pasta from '@/assets/dish-kids-pasta.jpg';
import dish_moqueca from '@/assets/dish-moqueca.jpg';
import dish_petitgateau from '@/assets/dish-petitgateau.jpg';
import dish_picanha from '@/assets/dish-picanha.jpg';
import dish_pudding from '@/assets/dish-pudding.jpg';
import dish_risotto from '@/assets/dish-risotto.jpg';
import dish_salmon from '@/assets/dish-salmon.jpg';
import dish_shrimp from '@/assets/dish-shrimp.jpg';

export const heroImage = heroRestaurant;

export const dishImages: Record<string, string> = {
  'dish-brownie': dish_brownie,
  'dish-bruschetta': dish_bruschetta,
  'dish-caesar': dish_caesar,
  'dish-carpaccio': dish_carpaccio,
  'dish-cheesecake': dish_cheesecake,
  'dish-coxinha': dish_coxinha,
  'dish-executive': dish_executive,
  'dish-fettuccine': dish_fettuccine,
  'dish-filet': dish_filet,
  'dish-kids-burger': dish_kids_burger,
  'dish-kids-nuggets': dish_kids_nuggets,
  'dish-kids-pancake': dish_kids_pancake,
  'dish-kids-pasta': dish_kids_pasta,
  'dish-moqueca': dish_moqueca,
  'dish-petitgateau': dish_petitgateau,
  'dish-picanha': dish_picanha,
  'dish-pudding': dish_pudding,
  'dish-risotto': dish_risotto,
  'dish-salmon': dish_salmon,
  'dish-shrimp': dish_shrimp,
};

export default {
  heroImage,
  dishImages,
};
