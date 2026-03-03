// Default recipes array
const defaultRecipes = [
  {
    name: "Pizza 🍕",
    country: "Italy",
    ingredients: [
      "2 cups all-purpose flour",
      "1 cup water",
      "1 tsp salt",
      "1 tbsp olive oil",
      "1/2 cup tomato sauce",
      "1 cup mozzarella cheese",
      "Fresh basil leaves"
    ],
    steps: [
      "Preheat oven to 220°C (428°F).",
      "Roll out the dough on a floured surface.",
      "Spread tomato sauce evenly over the dough.",
      "Add mozzarella cheese and toppings of choice.",
      "Bake pizza for 12-15 minutes until golden.",
      "Garnish with fresh basil leaves and drizzle olive oil."
    ],
    tips: "Use fresh mozzarella and a pizza stone if possible for a crispy crust."
  },
  {
    name: "Sushi 🍣",
    country: "Japan",
    ingredients: [
      "Sushi rice",
      "Nori sheets",
      "Fresh fish or vegetables",
      "Soy sauce",
      "Wasabi",
      "Pickled ginger"
    ],
    steps: [
      "Cook sushi rice and season with rice vinegar.",
      "Place nori sheet on bamboo mat.",
      "Spread rice evenly over nori.",
      "Add fillings of choice.",
      "Roll tightly and slice into pieces.",
      "Serve with soy sauce, wasabi, and pickled ginger."
    ],
    tips: "Use fresh fish and keep your hands wet when handling rice to prevent sticking."
  },
  {
    name: "Tacos 🌮",
    country: "Mexico",
    ingredients: [
      "Corn tortillas",
      "Grilled meat or beans",
      "Chopped onions",
      "Fresh cilantro",
      "Lime wedges",
      "Salsa"
    ],
    steps: [
      "Warm tortillas on a skillet.",
      "Prepare and season meat or beans.",
      "Fill tortillas with protein and toppings.",
      "Add chopped onions and cilantro.",
      "Squeeze lime juice over tacos.",
      "Serve with salsa on the side."
    ],
    tips: "Use fresh ingredients and warm tortillas for best flavor."
  },
  {
    name: "Paella 🥘",
    country: "Spain",
    ingredients: [
      "Bomba rice",
      "Saffron threads",
      "Chicken",
      "Seafood mix",
      "Bell peppers",
      "Olive oil"
    ],
    steps: [
      "Heat olive oil in a paella pan.",
      "Brown chicken pieces.",
      "Add vegetables and sauté.",
      "Add rice and saffron broth.",
      "Cook without stirring until rice absorbs liquid.",
      "Add seafood on top and cook until done."
    ],
    tips: "Use a wide shallow pan and avoid stirring the rice while cooking."
  },
  {
    name: "Croissant 🥐",
    country: "France",
    ingredients: [
      "Flour",
      "Butter",
      "Milk",
      "Yeast",
      "Sugar",
      "Salt"
    ],
    steps: [
      "Prepare dough and chill.",
      "Layer butter and fold dough multiple times.",
      "Roll into triangles and shape croissants.",
      "Let rise until doubled.",
      "Bake at 375°F (190°C) for 15-20 minutes."
    ],
    tips: "Keep dough cold for flaky layers."
  },
  {
    name: "Butter Chicken 🍛",
    country: "India",
    ingredients: [
      "Chicken",
      "Butter",
      "Tomato puree",
      "Cream",
      "Garlic",
      "Spices"
    ],
    steps: [
      "Marinate chicken with spices.",
      "Cook chicken in butter until browned.",
      "Add tomato puree and simmer.",
      "Stir in cream and cook until sauce thickens.",
      "Serve with rice or naan."
    ],
    tips: "Use fresh cream and marinate chicken overnight for best flavor."
  },
  {
    name: "Poutine 🍟",
    country: "Canada",
    ingredients: [
      "French fries",
      "Cheese curds",
      "Brown gravy"
    ],
    steps: [
      "Cook fries until crispy.",
      "Heat gravy separately.",
      "Place cheese curds on fries.",
      "Pour hot gravy over fries and cheese.",
      "Serve immediately."
    ],
    tips: "Use fresh cheese curds for authentic taste."
  },
  {
    name: "Falafel 🧆",
    country: "Middle East",
    ingredients: [
      "Chickpeas",
      "Onion",
      "Garlic",
      "Parsley",
      "Cumin",
      "Coriander"
    ],
    steps: [
      "Soak chickpeas overnight.",
      "Blend chickpeas with herbs and spices.",
      "Shape into balls and fry until golden.",
      "Serve with tahini or in pita bread."
    ],
    tips: "Do not cook chickpeas before blending; soak only."
  },
  {
    name: "Feijoada 🥘",
    country: "Brazil",
    ingredients: [
      "Black beans",
      "Pork",
      "Beef",
      "Onion",
      "Garlic",
      "Bay leaves"
    ],
    steps: [
      "Soak black beans overnight.",
      "Cook pork and beef pieces until tender.",
      "Add beans, onions, garlic, and bay leaves.",
      "Simmer for several hours until stew thickens.",
      "Serve with rice and orange slices."
    ],
    tips: "Use a variety of meats for authentic flavor."
  },
  {
    name: "Tom Yum Soup 🍲",
    country: "Thailand",
    ingredients: [
      "Shrimp",
      "Lemongrass",
      "Galangal",
      "Kaffir lime leaves",
      "Chili",
      "Fish sauce"
    ],
    steps: [
      "Boil lemongrass, galangal, and kaffir lime leaves in water.",
      "Add shrimp and cook until pink.",
      "Add chili and fish sauce to taste.",
      "Serve hot with fresh herbs."
    ],
    tips: "Use fresh herbs for authentic flavor."
  },
  {
    name: "J's Oreo Mug Cake 🎂",
    country: "Indo-American",
    ingredients: [
      "Oreos (Important)",
      "Milk",
      "Vanilla essence",
      "Coffee powder",
      "Sugar (optional)",
    ],
    steps: [
      "Crush some oreos.",
      "Pour some milk in it.",
      "Wish them until you get a batter like consistency.",
      "Add sugar if nessasary.",
      "Combine the mixture with two drops of vanilla essence and a pinch of coffee powder.",
      "Transfer it into an Oven proof mug and bake."
    ],
    tips: "Optionally top it with crushed oreos for extra crunch."
  },
];

// Load user recipes from localStorage
const userRecipes = JSON.parse(localStorage.getItem("userRecipes") || "[]");

// Combine default and user recipes
const recipes = [...defaultRecipes, ...userRecipes];

// DOM references
const btnContainer = document.getElementById("recipe-buttons");
const detailCard = document.getElementById("recipe-details");

// Render buttons
function renderButtons() {
  btnContainer.innerHTML = "";
  recipes.forEach((recipe, index) => {
    const btn = document.createElement("button");
    btn.textContent = `${recipe.name} — ${recipe.country}`;
    btn.onclick = () => showRecipe(index);
    btnContainer.appendChild(btn);
  });
}

// Show selected recipe details
function showRecipe(index) {
  const r = recipes[index];
  detailCard.innerHTML = `
    <img src="${r.image}?auto=format&fit=crop&w=800&q=80" alt="${r.name}" />
    <h2>${r.name} (${r.country})</h2>
    <h3>🧂 Ingredients</h3>
    <ul>${r.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
    <h3>👩‍🍳 Steps</h3>
    <ol>${r.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    ${r.tips ? `<h3>💡 Tips</h3><p>${r.tips}</p>` : ''}
  `;
  detailCard.hidden = false;
}

// Initial rendering
renderButtons();
