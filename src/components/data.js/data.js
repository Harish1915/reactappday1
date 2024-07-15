import React from 'react';

// Sample data
const recipes = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot."
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Italian",
    caloriesPerServing: 300,
    tags: [
      "Pizza",
      "Italian"
    ],
    userId: 166,
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    rating: 4.6,
    reviewCount: 98,
    mealType: [
      "Dinner"
    ]
  },
  {
    "id": 2,
    "name": "Vegetarian Stir-Fry",
    "ingredients": [
      "Tofu, cubed",
      "Broccoli florets",
      "Carrots, sliced",
      "Bell peppers, sliced",
      "Soy sauce",
      "Ginger, minced",
      "Garlic, minced",
      "Sesame oil",
      "Cooked rice for serving"
    ],
    "instructions": [
      "In a wok, heat sesame oil over medium-high heat.",
      "Add minced ginger and garlic, sauté until fragrant.",
      "Add cubed tofu and stir-fry until golden brown.",
      "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
      "Pour soy sauce over the stir-fry and toss to combine.",
      "Serve over cooked rice."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 3,
    "difficulty": "Medium",
    "cuisine": "Asian",
    "caloriesPerServing": 250,
    "tags": [
      "Vegetarian",
      "Stir-fry",
      "Asian"
    ],
    "userId": 143,
    "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
    "rating": 4.7,
    "reviewCount": 26,
    "mealType": [
      "Lunch"
    ]
  },
];

const CookIng = () => {
  return (
    <div >
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.name} className="recipe-image" width={150} height={150}/>
          <h2>{recipe.name}</h2>
          <p>Cuisine: {recipe.cuisine}</p>
          <p>Difficulty: {recipe.difficulty}</p>
          <p>Prep Time: {recipe.prepTimeMinutes} minutes</p>
          <p>Cook Time: {recipe.cookTimeMinutes} minutes</p>
          <p>Servings: {recipe.servings}</p>
          <p>Calories per Serving: {recipe.caloriesPerServing}</p>
          <p>Rating: {recipe.rating} ({recipe.reviewCount} reviews)</p>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul >
          <h3>Instructions</h3>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          <div className="tags">
            {recipe.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="meal-types">
            {recipe.mealType.map((meal, index) => (
              <span key={index} className="meal-type">
                {meal}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CookIng;
