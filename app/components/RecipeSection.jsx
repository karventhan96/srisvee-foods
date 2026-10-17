"use client";

import { useState } from "react";

const recipesData = [
  {
    id: "porridge",
    icon: "🥣",
    title: "Nendram Banana Porridge",
    shortDesc: "A traditional wholesome warm porridge for babies and kids.",
    time: "10 mins",
    age: "6+ Months & Toddlers",
    ingredients: [
      "2 tablespoons SrisVee Nendram Banana Powder",
      "1 cup water or milk",
      "1/2 teaspoon pure ghee",
      "Palm jaggery or palm candy (optional for toddlers)",
    ],
    steps: [
      "In a clean cooking bowl, mix 2 tablespoons of SrisVee Nendram Banana Powder with 1 cup of cold water or milk until completely lump-free.",
      "Place on medium-low flame. Stir continuously with a spoon or whisk to ensure it cooks evenly without sticking to the bottom.",
      "As it starts to thicken into a silky porridge (approx. 5 to 7 minutes), turn off the flame.",
      "Stir in 1/2 teaspoon of ghee and natural sweetener if preferred. Serve warm.",
    ],
    tips: "Always dissolve the powder in cold/room temperature liquid before heating to prevent lumps.",
  },
  {
    id: "pancake",
    icon: "🥞",
    title: "Golden Banana Pancakes",
    shortDesc: "Fluffy, nutrient-rich homemade pancakes for toddler breakfasts and family snacks.",
    time: "15 mins",
    age: "1+ Year & Adults",
    ingredients: [
      "3 tablespoons SrisVee Nendram Banana Powder",
      "1/2 cup whole wheat or oats flour",
      "1/2 cup warm milk or almond milk",
      "1 small ripe mashed banana",
      "1/4 teaspoon cardamom powder",
      "Ghee or butter for pan cooking",
    ],
    steps: [
      "In a mixing bowl, blend banana powder, wheat flour, and cardamom powder.",
      "Add mashed ripe banana and milk slowly to form a smooth pouring batter.",
      "Heat a flat tawa or skillet on medium heat and brush with a drop of ghee.",
      "Pour small rounds of batter. Cook until gentle bubbles appear on top, then flip and cook the other side until golden brown.",
      "Serve warm drizzled with pure honey or fresh cut fruit.",
    ],
    tips: "Great finger-food for babies practicing self-feeding (BLW).",
  },
  {
    id: "smoothie",
    icon: "🥛",
    title: "Nendram Energy Smoothie",
    shortDesc: "A delicious, creamy shake packed with sustained energy for active mornings.",
    time: "5 mins",
    age: "All Ages",
    ingredients: [
      "2 tablespoons SrisVee Nendram Banana Powder",
      "1 glass chilled milk (or yogurt/plant milk)",
      "1 ripe fresh banana",
      "2 soaked pitted dates or 1 tbsp honey",
      "Pinch of cinnamon or cocoa powder (optional)",
    ],
    steps: [
      "Mix 2 tablespoons of SrisVee Banana Powder with 3 tablespoons of warm water to make a smooth paste.",
      "Transfer into a blender along with chilled milk, banana slices, and soaked dates.",
      "Blend on high for 30–45 seconds until thick, frothy, and velvety smooth.",
      "Pour into a tall glass and top with a dash of cinnamon. Enjoy immediately!",
    ],
    tips: "Ideal post-workout recovery or a wholesome afternoon school-snack.",
  },
  {
    id: "milk",
    icon: "🍌",
    title: "Nendram Golden Health Drink",
    shortDesc: "A soothing bedtime tonic crafted with banana powder, spices, and warm milk.",
    time: "5 mins",
    age: "1+ Year & Adults",
    ingredients: [
      "1.5 tablespoons SrisVee Nendram Banana Powder",
      "1 cup warm boiled cow's milk",
      "Pinch of turmeric powder or saffron strands",
      "Pinch of green cardamom powder",
      "1 teaspoon palm sugar or honey",
    ],
    steps: [
      "Take 1.5 tablespoons of banana powder in your serving mug.",
      "Pour 2 tablespoons of warm milk and stir vigorously into a lump-free paste.",
      "Add the rest of the hot boiled milk while whisking gently.",
      "Add a pinch of turmeric and cardamom. Sweeten with palm jaggery or honey.",
      "Enjoy warm before bedtime for restful sleep and digestive comfort.",
    ],
    tips: "Turmeric and cardamom enhance absorption and soothe the tummy.",
  },
];

export default function RecipeSection() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openRecipe = (recipe) => setSelectedRecipe(recipe);
  const closeRecipe = () => setSelectedRecipe(null);

  return (
    <section id="recipes" className="section cream">
      <div className="centerHeading">
        <span className="eyebrow">Recipes & Inspiration</span>
        <h2>
          Easy Ways to Enjoy <em>Nendram</em>
        </h2>
        <p>Simple, wholesome recipes crafted with SrisVee Nendram Banana Powder.</p>
      </div>

      <div className="recipeGrid">
        {recipesData.map((recipe) => (
          <article className="recipeCard" key={recipe.id}>
            <span>{recipe.icon}</span>
            <h3>{recipe.title}</h3>
            <p>{recipe.shortDesc}</p>
            <div className="recipeMeta">
              <span>⏱️ {recipe.time}</span>
              <span>👶 {recipe.age}</span>
            </div>
            <button
              type="button"
              className="viewRecipeBtn"
              onClick={() => openRecipe(recipe)}
              aria-label={`View full recipe for ${recipe.title}`}
            >
              View Full Recipe →
            </button>
          </article>
        ))}
      </div>

      {/* Recipe Details Modal */}
      {selectedRecipe && (
        <div className="recipeModalOverlay" onClick={closeRecipe} role="dialog" aria-modal="true">
          <div
            className="recipeModalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="closeModalBtn"
              onClick={closeRecipe}
              aria-label="Close recipe modal"
            >
              ✕
            </button>

            <div className="recipeModalHeader">
              <span className="modalRecipeIcon">{selectedRecipe.icon}</span>
              <div>
                <span className="recipeBadge">{selectedRecipe.age} • {selectedRecipe.time}</span>
                <h3>{selectedRecipe.title}</h3>
              </div>
            </div>

            <div className="recipeBodySection">
              <h4>🛒 Ingredients Needed</h4>
              <ul className="ingredientList">
                {selectedRecipe.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h4>👩‍🍳 Preparation Steps</h4>
              <ol className="stepList">
                {selectedRecipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>

              {selectedRecipe.tips && (
                <div className="chefTip">
                  <strong>💡 Pro-Tip:</strong> {selectedRecipe.tips}
                </div>
              )}
            </div>

            <div className="modalFooter">
              <a
                className="button primary"
                href="#products"
                onClick={closeRecipe}
              >
                Order SrisVee Banana Powder →
              </a>
              <button
                type="button"
                className="button ghost"
                onClick={closeRecipe}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

