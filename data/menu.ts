export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const featuredMenu: MenuItem[] = [
  {
    id: "m1",
    name: "Eggs Benedict",
    description:
      "Poached eggs, hollandaise sauce and your choice of bacon or smoked salmon on toasted sourdough.",
    price: 22,
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "m2",
    name: "Mediterranean Breakfast Board",
    description:
      "Skillet eggs, labneh, warm flatbread, olives, fresh cucumber and sausage  a feast for the table.",
    price: 26,
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "m3",
    name: "Smashed Avocado Toast",
    description:
      "Smashed avocado, feta, cherry tomatoes, dukkah and a poached egg on thick-cut sourdough.",
    price: 20,
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "m4",
    name: "Sweet Berry Toast",
    description:
      "Thick brioche toast topped with fresh seasonal berries, pomegranate seeds, honey and edible flowers.",
    price: 18,
    category: "Sweet",
    image:
      "https://images.unsplash.com/photo-1565299543923-37dd37887442?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "m5",
    name: "Loaded Breakfast Bagel",
    description:
      "Toasted bagel with sausage patty, fried egg, melted cheese, hash brown and smoky sauce.",
    price: 17,
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "m6",
    name: "Iced Strawberry Matcha",
    description:
      "Hand-crafted organic matcha with real strawberry purée, poured over ice. Our signature drink.",
    price: 8,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=800",
  },
];

export const fullMenu: MenuItem[] = [
  ...featuredMenu,
  {
    id: "m7",
    name: "Barista Coffee",
    description:
      "Specialty espresso beverages with latte art. Flat white, latte, cappuccino, cold brew and more.",
    price: 5,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "m8",
    name: "Artisan Flatbread Pizza",
    description:
      "Freshly baked flatbread pizza served on a wooden sharing board. Ask us about today's toppings.",
    price: 20,
    category: "Lunch",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "m9",
    name: "Grilled Chicken Salad Bowl",
    description:
      "Tender grilled chicken over mixed greens, feta, pomegranate seeds and balsamic glaze.",
    price: 19,
    category: "Lunch",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "m10",
    name: "Gourmet Toasted Panini",
    description:
      "Freshly grilled gourmet panini with your choice of fillings, served with golden chips.",
    price: 16,
    category: "Lunch",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "m11",
    name: "Pastries & Cakes",
    description:
      "Freshly baked daily selection  croissants, muffins, slices and house-made cakes. Ask what's in today.",
    price: 7,
    category: "Sweet",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "m12",
    name: "Iced Chai Latte",
    description:
      "Spiced chai concentrate with your choice of milk poured over ice. Also available hot.",
    price: 7,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800",
  },
];
