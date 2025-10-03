export interface Category {
  id: string;
  slug: string;
  name: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  order: number;
}

export interface DishSize {
  label: {
    pt: string;
    en: string;
  };
  price: number;
}

export interface Dish {
  id: string;
  sku: string;
  categoryId: string;
  name: {
    pt: string;
    en: string;
  };
  shortDescription: {
    pt: string;
    en: string;
  };
  fullDescription: {
    pt: string;
    en: string;
  };
  images: string[];
  price: number;
  sizes?: DishSize[];
  tags: string[];
  allergens: string[];
  calories?: number;
  available: boolean;
  featured: boolean;
}

export const categories: Category[] = [
  {
    id: 'entradas',
    slug: 'starters',
    name: { pt: 'Entradas', en: 'Starters' },
    description: { 
      pt: 'Deliciosas opções para começar sua refeição',
      en: 'Delicious options to start your meal'
    },
    order: 1,
  },
  {
    id: 'pratos-principais',
    slug: 'main-courses',
    name: { pt: 'Pratos Principais', en: 'Main Courses' },
    description: { 
      pt: 'Pratos cuidadosamente preparados com ingredientes frescos',
      en: 'Carefully prepared dishes with fresh ingredients'
    },
    order: 2,
  },
  {
    id: 'sobremesas',
    slug: 'desserts',
    name: { pt: 'Sobremesas', en: 'Desserts' },
    description: { 
      pt: 'Doces finais perfeitos para sua refeição',
      en: 'Perfect sweet endings for your meal'
    },
    order: 3,
  },
  {
    id: 'bebidas',
    slug: 'drinks',
    name: { pt: 'Bebidas', en: 'Drinks' },
    description: { 
      pt: 'Bebidas refrescantes e especiais',
      en: 'Refreshing and special drinks'
    },
    order: 4,
  },
  {
    id: 'kids',
    slug: 'kids',
    name: { pt: 'Kids', en: 'Kids' },
    description: { 
      pt: 'Opções especiais para os pequenos',
      en: 'Special options for the little ones'
    },
    order: 5,
  },
];

export const dishes: Dish[] = [
  // Entradas (Starters)
  {
    id: 'entrada-01',
    sku: 'ENT-001',
    categoryId: 'entradas',
    name: { pt: 'Bruschetta de Tomate e Manjericão', en: 'Tomato and Basil Bruschetta' },
    shortDescription: { 
      pt: 'Pão artesanal com tomates frescos e manjericão',
      en: 'Artisan bread with fresh tomatoes and basil'
    },
    fullDescription: {
      pt: 'Fatias de pão artesanal torrado coberto com tomates orgânicos picados, manjericão fresco, alho, azeite extra virgem e um toque de balsâmico. Servido em porção generosa para compartilhar.',
      en: 'Slices of toasted artisan bread topped with diced organic tomatoes, fresh basil, garlic, extra virgin olive oil and a touch of balsamic. Served in generous portion for sharing.'
    },
    images: ['dish-bruschetta'],
    price: 28.90,
    tags: ['vegetarian', 'organic'],
    allergens: ['wheat'],
    calories: 220,
    available: true,
    featured: true,
  },
  {
    id: 'entrada-02',
    sku: 'ENT-002',
    categoryId: 'entradas',
    name: { pt: 'Carpaccio de Salmão', en: 'Salmon Carpaccio' },
    shortDescription: { 
      pt: 'Salmão fresco em fatias finas com alcaparras',
      en: 'Fresh salmon in thin slices with capers'
    },
    fullDescription: {
      pt: 'Salmão norueguês fresco cortado em fatias finas, servido com alcaparras, cebola roxa, azeite de oliva, limão siciliano e rúcula. Uma entrada leve e sofisticada.',
      en: 'Fresh Norwegian salmon cut into thin slices, served with capers, red onion, olive oil, Sicilian lemon and arugula. A light and sophisticated starter.'
    },
    images: ['dish-carpaccio'],
    price: 42.90,
    tags: ['glutenFree'],
    allergens: ['fish'],
    calories: 180,
    available: true,
    featured: false,
  },
  {
    id: 'entrada-03',
    sku: 'ENT-003',
    categoryId: 'entradas',
    name: { pt: 'Salada Caesar Especial', en: 'Special Caesar Salad' },
    shortDescription: { 
      pt: 'Alface romana com molho caesar caseiro',
      en: 'Romaine lettuce with homemade caesar dressing'
    },
    fullDescription: {
      pt: 'Alface romana crocante, croutons artesanais, lascas de parmesão italiano e nosso molho caesar feito na casa. Opção de adicionar frango grelhado ou camarões.',
      en: 'Crispy romaine lettuce, artisan croutons, Italian parmesan shavings and our homemade caesar dressing. Option to add grilled chicken or shrimp.'
    },
    images: ['dish-caesar'],
    price: 32.90,
    tags: ['vegetarian'],
    allergens: ['eggs', 'milk', 'wheat', 'fish'],
    calories: 280,
    available: true,
    featured: false,
  },
  {
    id: 'entrada-04',
    sku: 'ENT-004',
    categoryId: 'entradas',
    name: { pt: 'Coxinha Gourmet de Jaca', en: 'Gourmet Jackfruit Coxinha' },
    shortDescription: { 
      pt: 'Versão vegana do clássico brasileiro',
      en: 'Vegan version of Brazilian classic'
    },
    fullDescription: {
      pt: 'Nossa versão especial da tradicional coxinha brasileira, feita com jaca desfiada temperada, massa artesanal e empanada na hora. Servida com molho especial de pimenta rosa.',
      en: 'Our special version of the traditional Brazilian coxinha, made with seasoned shredded jackfruit, artisan dough and freshly breaded. Served with special pink pepper sauce.'
    },
    images: ['dish-coxinha'],
    price: 26.90,
    tags: ['vegan', 'new'],
    allergens: ['wheat'],
    calories: 195,
    available: true,
    featured: true,
  },
  
  // Pratos Principais (Main Courses)
  {
    id: 'prato-01',
    sku: 'PRT-001',
    categoryId: 'pratos-principais',
    name: { pt: 'Risoto de Cogumelos Selvagens', en: 'Wild Mushroom Risotto' },
    shortDescription: { 
      pt: 'Risoto cremoso com mix de cogumelos nobres',
      en: 'Creamy risotto with noble mushroom mix'
    },
    fullDescription: {
      pt: 'Arroz arbóreo cozido lentamente com mix de cogumelos selvagens (shiitake, shimeji, paris), vinho branco, manteiga trufada e finalizado com parmesão reggiano. Um clássico italiano executado à perfeição.',
      en: 'Arborio rice slowly cooked with wild mushroom mix (shiitake, shimeji, button), white wine, truffle butter and finished with reggiano parmesan. An Italian classic executed to perfection.'
    },
    images: ['dish-risotto'],
    price: 68.90,
    tags: ['vegetarian', 'featured'],
    allergens: ['milk'],
    calories: 520,
    available: true,
    featured: true,
  },
  {
    id: 'prato-02',
    sku: 'PRT-002',
    categoryId: 'pratos-principais',
    name: { pt: 'Filé Mignon ao Molho Madeira', en: 'Beef Tenderloin in Madeira Sauce' },
    shortDescription: { 
      pt: 'Filé mignon grelhado com molho especial',
      en: 'Grilled beef tenderloin with special sauce'
    },
    fullDescription: {
      pt: 'Medalhões de filé mignon grelhado ao ponto, servido com molho madeira aromático, batatas rústicas assadas e legumes salteados na manteiga. Acompanha arroz com ervas finas.',
      en: 'Grilled beef tenderloin medallions cooked to perfection, served with aromatic madeira sauce, roasted rustic potatoes and butter-sautéed vegetables. Comes with herbed rice.'
    },
    images: ['dish-filet'],
    price: 89.90,
    tags: ['glutenFree'],
    allergens: ['milk'],
    calories: 680,
    available: true,
    featured: true,
  },
  {
    id: 'prato-03',
    sku: 'PRT-003',
    categoryId: 'pratos-principais',
    name: { pt: 'Salmão Grelhado com Crosta de Ervas', en: 'Grilled Salmon with Herb Crust' },
    shortDescription: { 
      pt: 'Salmão fresco com crosta crocante de ervas',
      en: 'Fresh salmon with crispy herb crust'
    },
    fullDescription: {
      pt: 'Postas de salmão fresco grelhado com crosta de ervas finas, servido sobre purê de batata-doce e espinafre refogado. Finalizado com molho de limão siciliano e azeite.',
      en: 'Fresh grilled salmon steaks with fine herb crust, served over sweet potato puree and sautéed spinach. Finished with Sicilian lemon sauce and olive oil.'
    },
    images: ['dish-salmon'],
    price: 78.90,
    tags: ['glutenFree', 'organic'],
    allergens: ['fish', 'milk'],
    calories: 540,
    available: true,
    featured: false,
  },
  {
    id: 'prato-04',
    sku: 'PRT-004',
    categoryId: 'pratos-principais',
    name: { pt: 'Fettuccine Alfredo com Frango', en: 'Chicken Fettuccine Alfredo' },
    shortDescription: { 
      pt: 'Massa fresca com molho cremoso e frango',
      en: 'Fresh pasta with creamy sauce and chicken'
    },
    fullDescription: {
      pt: 'Fettuccine artesanal ao molho alfredo cremoso com parmesão, acompanhado de cubos de frango grelhado temperado com ervas. Finalizado com salsinha fresca e pimenta do reino.',
      en: 'Artisan fettuccine in creamy alfredo sauce with parmesan, accompanied by herb-seasoned grilled chicken cubes. Finished with fresh parsley and black pepper.'
    },
    images: ['dish-fettuccine'],
    price: 64.90,
    tags: [],
    allergens: ['wheat', 'milk', 'eggs'],
    calories: 720,
    available: true,
    featured: false,
  },
  {
    id: 'prato-05',
    sku: 'PRT-005',
    categoryId: 'pratos-principais',
    name: { pt: 'Moqueca Baiana Vegana', en: 'Vegan Bahian Moqueca' },
    shortDescription: { 
      pt: 'Moqueca tradicional com proteína vegetal',
      en: 'Traditional moqueca with plant protein'
    },
    fullDescription: {
      pt: 'Nossa versão vegana da clássica moqueca baiana, preparada com proteína de soja, leite de coco, azeite de dendê, tomates, pimentões e coentro fresco. Servida com arroz branco e pirão.',
      en: 'Our vegan version of the classic Bahian moqueca, prepared with soy protein, coconut milk, palm oil, tomatoes, bell peppers and fresh cilantro. Served with white rice and pirão.'
    },
    images: ['dish-moqueca'],
    price: 58.90,
    tags: ['vegan', 'glutenFree', 'spicy'],
    allergens: ['soy'],
    calories: 480,
    available: true,
    featured: true,
  },
  {
    id: 'prato-06',
    sku: 'PRT-006',
    categoryId: 'pratos-principais',
    name: { pt: 'Picanha na Pedra', en: 'Stone-Grilled Picanha' },
    shortDescription: { 
      pt: 'Picanha nobre servida em pedra quente',
      en: 'Premium picanha served on hot stone'
    },
    fullDescription: {
      pt: 'Corte nobre de picanha argentina servido em pedra vulcânica aquecida, permitindo que você controle o ponto da sua carne. Acompanha farofa crocante, vinagrete e arroz.',
      en: 'Premium Argentine picanha cut served on heated volcanic stone, allowing you to control your meat doneness. Comes with crispy farofa, vinaigrette and rice.'
    },
    images: ['dish-picanha'],
    price: 94.90,
    tags: ['glutenFree'],
    allergens: [],
    calories: 780,
    available: true,
    featured: false,
  },
  {
    id: 'prato-07',
    sku: 'PRT-007',
    categoryId: 'pratos-principais',
    name: { pt: 'Camarões ao Alho e Óleo', en: 'Garlic Shrimp' },
    shortDescription: { 
      pt: 'Camarões grandes salteados com muito alho',
      en: 'Large shrimp sautéed with lots of garlic'
    },
    fullDescription: {
      pt: 'Camarões grandes frescos salteados na frigideira com alho dourado, azeite extra virgem, pimenta calabresa e finalizado com coentro fresco. Servido com arroz branco e batatas fritas.',
      en: 'Fresh large shrimp pan-sautéed with golden garlic, extra virgin olive oil, calabrian pepper and finished with fresh cilantro. Served with white rice and french fries.'
    },
    images: ['dish-shrimp'],
    price: 84.90,
    tags: ['glutenFree', 'spicy'],
    allergens: ['shellfish'],
    calories: 520,
    available: true,
    featured: false,
  },
  {
    id: 'prato-08',
    sku: 'PRT-008',
    categoryId: 'pratos-principais',
    name: { pt: 'Prato Executivo do Dia', en: 'Daily Executive Plate' },
    shortDescription: { 
      pt: 'Opção completa com preço especial',
      en: 'Complete option with special price'
    },
    fullDescription: {
      pt: 'Consulte nosso cardápio executivo diário que inclui proteína (frango, carne ou peixe), arroz, feijão, salada completa e acompanhamento quente. Pergunte ao garçom pela opção do dia.',
      en: 'Check our daily executive menu that includes protein (chicken, beef or fish), rice, beans, complete salad and hot side dish. Ask your server for today\'s option.'
    },
    images: ['dish-executive'],
    price: 42.90,
    tags: [],
    allergens: [],
    calories: 650,
    available: true,
    featured: false,
  },
  
  // Sobremesas (Desserts)
  {
    id: 'sobremesa-01',
    sku: 'SOB-001',
    categoryId: 'sobremesas',
    name: { pt: 'Petit Gâteau de Chocolate Belga', en: 'Belgian Chocolate Petit Gâteau' },
    shortDescription: { 
      pt: 'Bolinho quente com chocolate derretido',
      en: 'Warm cake with melted chocolate'
    },
    fullDescription: {
      pt: 'Bolinho de chocolate belga 70% cacau com centro cremoso derretido, servido quente acompanhado de sorvete de baunilha artesanal e calda de frutas vermelhas. Uma experiência indulgente.',
      en: 'Belgian chocolate cake 70% cocoa with melted creamy center, served warm with artisan vanilla ice cream and red fruit sauce. An indulgent experience.'
    },
    images: ['dish-petitgateau'],
    price: 32.90,
    tags: ['vegetarian', 'featured'],
    allergens: ['wheat', 'eggs', 'milk'],
    calories: 520,
    available: true,
    featured: true,
  },
  {
    id: 'sobremesa-02',
    sku: 'SOB-002',
    categoryId: 'sobremesas',
    name: { pt: 'Cheesecake de Frutas Vermelhas', en: 'Red Fruit Cheesecake' },
    shortDescription: { 
      pt: 'Cheesecake cremoso com cobertura de frutas',
      en: 'Creamy cheesecake with fruit topping'
    },
    fullDescription: {
      pt: 'Cheesecake estilo NY feito com cream cheese importado sobre base crocante de biscoito, coberto com compota de frutas vermelhas frescas (morango, framboesa e mirtilo).',
      en: 'NY-style cheesecake made with imported cream cheese on crispy cookie base, topped with fresh red fruit compote (strawberry, raspberry and blueberry).'
    },
    images: ['dish-cheesecake'],
    price: 28.90,
    tags: ['vegetarian'],
    allergens: ['wheat', 'eggs', 'milk'],
    calories: 420,
    available: true,
    featured: false,
  },
  {
    id: 'sobremesa-03',
    sku: 'SOB-003',
    categoryId: 'sobremesas',
    name: { pt: 'Brownie Vegano com Sorvete', en: 'Vegan Brownie with Ice Cream' },
    shortDescription: { 
      pt: 'Brownie sem ingredientes de origem animal',
      en: 'Brownie without animal ingredients'
    },
    fullDescription: {
      pt: 'Brownie vegano super fudgy feito com chocolate 70%, servido quente com sorvete vegano de coco e calda de chocolate meio amargo. Totalmente plant-based e delicioso.',
      en: 'Super fudgy vegan brownie made with 70% chocolate, served warm with vegan coconut ice cream and semi-sweet chocolate sauce. Totally plant-based and delicious.'
    },
    images: ['dish-brownie'],
    price: 26.90,
    tags: ['vegan', 'new'],
    allergens: ['wheat', 'soy'],
    calories: 380,
    available: true,
    featured: true,
  },
  {
    id: 'sobremesa-04',
    sku: 'SOB-004',
    categoryId: 'sobremesas',
    name: { pt: 'Pudim de Leite Condensado', en: 'Condensed Milk Pudding' },
    shortDescription: { 
      pt: 'Clássico brasileiro cremoso',
      en: 'Creamy Brazilian classic'
    },
    fullDescription: {
      pt: 'Tradicional pudim de leite condensado com calda de caramelo, preparado na casa seguindo receita de família. Textura aveludada e sabor inigualável.',
      en: 'Traditional condensed milk pudding with caramel sauce, prepared in-house following family recipe. Velvety texture and unmatched flavor.'
    },
    images: ['dish-pudding'],
    price: 22.90,
    tags: ['vegetarian', 'glutenFree'],
    allergens: ['milk', 'eggs'],
    calories: 340,
    available: true,
    featured: false,
  },
  
  // Bebidas (Drinks)
  {
    id: 'bebida-01',
    sku: 'BEB-001',
    categoryId: 'bebidas',
    name: { pt: 'Suco Verde Detox', en: 'Green Detox Juice' },
    shortDescription: { 
      pt: 'Suco natural com couve, limão e gengibre',
      en: 'Natural juice with kale, lemon and ginger'
    },
    fullDescription: {
      pt: 'Suco prensado a frio feito com couve orgânica, maçã verde, limão siciliano, gengibre fresco e água de coco. Rico em nutrientes e super refrescante.',
      en: 'Cold-pressed juice made with organic kale, green apple, Sicilian lemon, fresh ginger and coconut water. Rich in nutrients and super refreshing.'
    },
    images: ['drink-green'],
    price: 16.90,
    tags: ['vegan', 'glutenFree', 'organic'],
    allergens: [],
    calories: 120,
    available: true,
    featured: true,
  },
  {
    id: 'bebida-02',
    sku: 'BEB-002',
    categoryId: 'bebidas',
    name: { pt: 'Limonada Suíça', en: 'Swiss Lemonade' },
    shortDescription: { 
      pt: 'Limonada cremosa com leite condensado',
      en: 'Creamy lemonade with condensed milk'
    },
    fullDescription: {
      pt: 'Refrescante limonada preparada com limões frescos, leite condensado, gelo e um toque de raspas de limão. Servida bem gelada em copo grande.',
      en: 'Refreshing lemonade prepared with fresh lemons, condensed milk, ice and a touch of lemon zest. Served ice cold in large glass.'
    },
    images: ['drink-lemonade'],
    price: 14.90,
    tags: ['vegetarian'],
    allergens: ['milk'],
    calories: 180,
    available: true,
    featured: false,
  },
  {
    id: 'bebida-03',
    sku: 'BEB-003',
    categoryId: 'bebidas',
    name: { pt: 'Caipirinha Clássica', en: 'Classic Caipirinha' },
    shortDescription: { 
      pt: 'Drink brasileiro feito com cachaça artesanal',
      en: 'Brazilian drink made with artisan cachaça'
    },
    fullDescription: {
      pt: 'Nossa caipirinha é preparada com cachaça artesanal premium, limões frescos muddled na hora, açúcar e muito gelo. Disponível também nas versões frutas (morango, maracujá, kiwi).',
      en: 'Our caipirinha is prepared with premium artisan cachaça, fresh muddled lemons, sugar and lots of ice. Also available in fruit versions (strawberry, passion fruit, kiwi).'
    },
    images: ['drink-caipirinha'],
    price: 24.90,
    sizes: [
      { label: { pt: 'Individual', en: 'Individual' }, price: 24.90 },
      { label: { pt: 'Jarra (4 pessoas)', en: 'Pitcher (4 people)' }, price: 89.90 },
    ],
    tags: ['glutenFree'],
    allergens: [],
    calories: 220,
    available: true,
    featured: true,
  },
  {
    id: 'bebida-04',
    sku: 'BEB-004',
    categoryId: 'bebidas',
    name: { pt: 'Café Especial Coado', en: 'Special Brewed Coffee' },
    shortDescription: { 
      pt: 'Café de grãos selecionados',
      en: 'Selected bean coffee'
    },
    fullDescription: {
      pt: 'Café especial coado na hora com grãos 100% arábica de fazendas brasileiras selecionadas. Notas de chocolate e caramelo. Servido quente ou gelado.',
      en: 'Special coffee brewed fresh with 100% arabica beans from selected Brazilian farms. Chocolate and caramel notes. Served hot or iced.'
    },
    images: ['drink-coffee'],
    price: 8.90,
    tags: ['vegan', 'glutenFree', 'organic'],
    allergens: [],
    calories: 5,
    available: true,
    featured: false,
  },
  
  // Kids
  {
    id: 'kids-01',
    sku: 'KID-001',
    categoryId: 'kids',
    name: { pt: 'Mini Hambúrguer com Fritas', en: 'Mini Burger with Fries' },
    shortDescription: { 
      pt: 'Hambúrguer artesanal em tamanho infantil',
      en: 'Artisan burger in kids size'
    },
    fullDescription: {
      pt: 'Hambúrguer artesanal de 80g, pão brioche pequeno, queijo, tomate e alface. Acompanha batatas fritas crocantes e suco natural. Perfeito para crianças até 10 anos.',
      en: 'Artisan 80g burger, small brioche bun, cheese, tomato and lettuce. Comes with crispy french fries and natural juice. Perfect for children up to 10 years.'
    },
    images: ['dish-kids-burger'],
    price: 32.90,
    tags: [],
    allergens: ['wheat', 'milk', 'eggs'],
    calories: 480,
    available: true,
    featured: false,
  },
  {
    id: 'kids-02',
    sku: 'KID-002',
    categoryId: 'kids',
    name: { pt: 'Macarrão ao Molho Vermelho', en: 'Pasta with Red Sauce' },
    shortDescription: { 
      pt: 'Massa com molho de tomate caseiro',
      en: 'Pasta with homemade tomato sauce'
    },
    fullDescription: {
      pt: 'Macarrão penne com molho de tomate caseiro levemente temperado, queijo parmesão ralado e manjericão fresco. Acompanha suco natural. Opção leve e saudável.',
      en: 'Penne pasta with lightly seasoned homemade tomato sauce, grated parmesan cheese and fresh basil. Comes with natural juice. Light and healthy option.'
    },
    images: ['dish-kids-pasta'],
    price: 28.90,
    tags: ['vegetarian'],
    allergens: ['wheat', 'milk'],
    calories: 380,
    available: true,
    featured: false,
  },
  {
    id: 'kids-03',
    sku: 'KID-003',
    categoryId: 'kids',
    name: { pt: 'Nuggets de Frango Caseiros', en: 'Homemade Chicken Nuggets' },
    shortDescription: { 
      pt: 'Nuggets feitos com peito de frango',
      en: 'Nuggets made with chicken breast'
    },
    fullDescription: {
      pt: 'Nuggets feitos na casa com peito de frango empanado em crosta crocante. Acompanha batatas fritas, ketchup, maionese e suco natural. Favorito das crianças!',
      en: 'In-house made nuggets with chicken breast breaded in crispy crust. Comes with french fries, ketchup, mayo and natural juice. Kids favorite!'
    },
    images: ['dish-kids-nuggets'],
    price: 34.90,
    tags: [],
    allergens: ['wheat', 'eggs', 'milk'],
    calories: 520,
    available: true,
    featured: true,
  },
  {
    id: 'kids-04',
    sku: 'KID-004',
    categoryId: 'kids',
    name: { pt: 'Combo Panqueca Doce', en: 'Sweet Pancake Combo' },
    shortDescription: { 
      pt: 'Panquecas fofinhas com calda',
      en: 'Fluffy pancakes with syrup'
    },
    fullDescription: {
      pt: 'Três panquecas americanas fofinhas servidas com calda de chocolate ou mel, manteiga e frutas frescas picadas. Acompanha suco natural. Perfeito para o café da manhã ou lanche.',
      en: 'Three fluffy American pancakes served with chocolate or honey syrup, butter and diced fresh fruit. Comes with natural juice. Perfect for breakfast or snack.'
    },
    images: ['dish-kids-pancake'],
    price: 26.90,
    tags: ['vegetarian'],
    allergens: ['wheat', 'eggs', 'milk'],
    calories: 420,
    available: true,
    featured: false,
  },
];
