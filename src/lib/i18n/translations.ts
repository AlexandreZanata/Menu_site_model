export type Language = 'pt' | 'en';

export interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { pt: 'Início', en: 'Home' },
  'nav.menu': { pt: 'Cardápio', en: 'Menu' },
  'nav.about': { pt: 'Sobre', en: 'About' },
  'nav.gallery': { pt: 'Galeria', en: 'Gallery' },
  'nav.reservations': { pt: 'Reservas', en: 'Reservations' },
  'nav.admin': { pt: 'Admin', en: 'Admin' },
  
  // Hero
  'hero.title': { pt: 'Sabor Verde', en: 'Green Flavor' },
  'hero.subtitle': { pt: 'Experiência Gastronômica Autêntica', en: 'Authentic Culinary Experience' },
  'hero.cta': { pt: 'Ver Cardápio', en: 'View Menu' },
  'hero.reserve': { pt: 'Fazer Reserva', en: 'Make Reservation' },
  
  // Menu
  'menu.title': { pt: 'Nosso Cardápio', en: 'Our Menu' },
  'menu.search': { pt: 'Buscar pratos...', en: 'Search dishes...' },
  'menu.filter': { pt: 'Filtrar', en: 'Filter' },
  'menu.sortBy': { pt: 'Ordenar por', en: 'Sort by' },
  'menu.sortPrice': { pt: 'Preço', en: 'Price' },
  'menu.sortPopular': { pt: 'Popularidade', en: 'Popularity' },
  'menu.allCategories': { pt: 'Todas Categorias', en: 'All Categories' },
  'menu.noResults': { pt: 'Nenhum prato encontrado', en: 'No dishes found' },
  
  // Dish Detail
  'dish.ingredients': { pt: 'Ingredientes', en: 'Ingredients' },
  'dish.allergens': { pt: 'Alergênicos', en: 'Allergens' },
  'dish.calories': { pt: 'Calorias', en: 'Calories' },
  'dish.portionSizes': { pt: 'Tamanhos de Porção', en: 'Portion Sizes' },
  'dish.recommended': { pt: 'Combinações Recomendadas', en: 'Recommended Pairings' },
  'dish.backToMenu': { pt: 'Voltar ao Cardápio', en: 'Back to Menu' },
  
  // Tags
  'tag.vegan': { pt: 'Vegano', en: 'Vegan' },
  'tag.vegetarian': { pt: 'Vegetariano', en: 'Vegetarian' },
  'tag.glutenFree': { pt: 'Sem Glúten', en: 'Gluten Free' },
  'tag.lactoseFree': { pt: 'Sem Lactose', en: 'Lactose Free' },
  'tag.spicy': { pt: 'Picante', en: 'Spicy' },
  'tag.organic': { pt: 'Orgânico', en: 'Organic' },
  'tag.featured': { pt: 'Destaque', en: 'Featured' },
  'tag.seasonal': { pt: 'Sazonal', en: 'Seasonal' },
  'tag.new': { pt: 'Novidade', en: 'New' },
  
  // Allergens
  'allergen.milk': { pt: 'Leite', en: 'Milk' },
  'allergen.eggs': { pt: 'Ovos', en: 'Eggs' },
  'allergen.fish': { pt: 'Peixe', en: 'Fish' },
  'allergen.shellfish': { pt: 'Frutos do Mar', en: 'Shellfish' },
  'allergen.nuts': { pt: 'Nozes', en: 'Nuts' },
  'allergen.peanuts': { pt: 'Amendoim', en: 'Peanuts' },
  'allergen.wheat': { pt: 'Trigo', en: 'Wheat' },
  'allergen.soy': { pt: 'Soja', en: 'Soy' },
  
  // About
  'about.title': { pt: 'Sobre Nós', en: 'About Us' },
  'about.story': { 
    pt: 'Fundado em 2010, o Sabor Verde traz uma experiência gastronômica única, combinando ingredientes frescos e locais com técnicas culinárias modernas. Nossa paixão é criar pratos que não apenas alimentam, mas contam histórias.',
    en: 'Founded in 2010, Sabor Verde brings a unique culinary experience, combining fresh local ingredients with modern cooking techniques. Our passion is creating dishes that not only nourish but tell stories.'
  },
  'about.hours': { pt: 'Horário de Funcionamento', en: 'Opening Hours' },
  'about.contact': { pt: 'Contato', en: 'Contact' },
  'about.location': { pt: 'Localização', en: 'Location' },
  'about.phone': { pt: 'Telefone', en: 'Phone' },
  'about.email': { pt: 'E-mail', en: 'Email' },
  
  // Hours
  'hours.monday': { pt: 'Segunda', en: 'Monday' },
  'hours.tuesday': { pt: 'Terça', en: 'Tuesday' },
  'hours.wednesday': { pt: 'Quarta', en: 'Wednesday' },
  'hours.thursday': { pt: 'Quinta', en: 'Thursday' },
  'hours.friday': { pt: 'Sexta', en: 'Friday' },
  'hours.saturday': { pt: 'Sábado', en: 'Saturday' },
  'hours.sunday': { pt: 'Domingo', en: 'Sunday' },
  'hours.closed': { pt: 'Fechado', en: 'Closed' },
  
  // Reservations
  'reservations.title': { pt: 'Faça sua Reserva', en: 'Make a Reservation' },
  'reservations.date': { pt: 'Data', en: 'Date' },
  'reservations.time': { pt: 'Horário', en: 'Time' },
  'reservations.guests': { pt: 'Pessoas', en: 'Guests' },
  'reservations.name': { pt: 'Nome', en: 'Name' },
  'reservations.phone': { pt: 'Telefone', en: 'Phone' },
  'reservations.email': { pt: 'E-mail', en: 'Email' },
  'reservations.notes': { pt: 'Observações', en: 'Notes' },
  'reservations.submit': { pt: 'Confirmar Reserva', en: 'Confirm Reservation' },
  'reservations.success': { pt: 'Reserva confirmada com sucesso!', en: 'Reservation confirmed successfully!' },
  
  // Gallery
  'gallery.title': { pt: 'Galeria', en: 'Gallery' },
  'gallery.subtitle': { pt: 'Momentos Deliciosos', en: 'Delicious Moments' },
  
  // Admin
  'admin.title': { pt: 'Painel Administrativo', en: 'Admin Panel' },
  'admin.categories': { pt: 'Categorias', en: 'Categories' },
  'admin.dishes': { pt: 'Pratos', en: 'Dishes' },
  'admin.addCategory': { pt: 'Adicionar Categoria', en: 'Add Category' },
  'admin.addDish': { pt: 'Adicionar Prato', en: 'Add Dish' },
  'admin.edit': { pt: 'Editar', en: 'Edit' },
  'admin.delete': { pt: 'Excluir', en: 'Delete' },
  'admin.save': { pt: 'Salvar', en: 'Save' },
  'admin.cancel': { pt: 'Cancelar', en: 'Cancel' },
  'admin.import': { pt: 'Importar JSON/CSV', en: 'Import JSON/CSV' },
  'admin.export': { pt: 'Exportar JSON', en: 'Export JSON' },
  'admin.preview': { pt: 'Visualizar', en: 'Preview' },
  'admin.password': { pt: 'Senha', en: 'Password' },
  'admin.login': { pt: 'Entrar', en: 'Login' },
  'admin.logout': { pt: 'Sair', en: 'Logout' },
  
  // Common
  'common.loading': { pt: 'Carregando...', en: 'Loading...' },
  'common.error': { pt: 'Erro', en: 'Error' },
  'common.success': { pt: 'Sucesso', en: 'Success' },
  'common.close': { pt: 'Fechar', en: 'Close' },
  'common.search': { pt: 'Buscar', en: 'Search' },
  'common.currency': { pt: 'R$', en: '$' },
};

export function t(key: string, lang: Language): string {
  return translations[key]?.[lang] || key;
}
