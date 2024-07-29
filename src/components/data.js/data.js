import "./data.css"

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
  ,
    {
      "id": 14,
      "name": "Chapli Kebabs",
      "ingredients": [
        "Ground beef",
        "Onions, finely chopped",
        "Tomatoes, finely chopped",
        "Green chilies, chopped",
        "Coriander leaves, chopped",
        "Pomegranate seeds",
        "Ginger-garlic paste",
        "Cumin powder",
        "Coriander powder",
        "Red chili powder",
        "Egg",
        "Cooking oil",
        "Salt to taste"
      ],
      "instructions": [
        "In a large bowl, mix ground beef, chopped onions, tomatoes, green chilies, coriander leaves, and pomegranate seeds.",
        "Add ginger-garlic paste, cumin powder, coriander powder, red chili powder, and salt. Mix well.",
        "Add an egg to bind the mixture and form into round flat kebabs.",
        "Heat cooking oil in a pan and shallow fry the kebabs until browned on both sides.",
        "Serve hot with naan or mint chutney."
      ],
      "prepTimeMinutes": 30,
      "cookTimeMinutes": 20,
      "servings": 4,
      "difficulty": "Medium",
      "cuisine": "Pakistani",
      "caloriesPerServing": 320,
      "tags": [
        "Kebabs",
        "Beef",
        "Indian",
        "Pakistani",
        "Asian"
      ],
      "userId": 152,
      "image": "https://cdn.dummyjson.com/recipe-images/14.webp",
      "rating": 4.7,
      "reviewCount": 98,
      "mealType": [
        "Lunch",
        "Dinner",
        "Snacks"
      ]
    },
    {
      "id": 10,
      "name": "Shrimp Scampi Pasta",
      "ingredients": [
        "Linguine pasta",
        "Shrimp, peeled and deveined",
        "Garlic, minced",
        "White wine",
        "Lemon juice",
        "Red pepper flakes",
        "Fresh parsley, chopped",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "Cook linguine pasta according to package instructions.",
        "In a skillet, sauté minced garlic in olive oil until fragrant.",
        "Add shrimp and cook until pink and opaque.",
        "Pour in white wine and lemon juice. Simmer until the sauce slightly thickens.",
        "Season with red pepper flakes, salt, and pepper.",
        "Toss cooked linguine in the shrimp scampi sauce.",
        "Garnish with chopped fresh parsley before serving."
      ],
      "prepTimeMinutes": 15,
      "cookTimeMinutes": 20,
      "servings": 3,
      "difficulty": "Medium",
      "cuisine": "Italian",
      "caloriesPerServing": 400,
      "tags": [
        "Pasta",
        "Shrimp"
      ],
      "userId": 114,
      "image": "https://cdn.dummyjson.com/recipe-images/10.webp",
      "rating": 4.3,
      "reviewCount": 5,
      "mealType": [
        "Dinner"
      ]
    },
];

const CookIng = () => {

  
  return (

 
    <div className="card2" >
      {
      
      recipes.map((recipe) => (
        
        <div key={recipe.id}   className="flex">
        
          <img src={recipe.image} alt={recipe.name}  width={150} height={150}/>
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
          <div>
            {recipe.tags.map((tag, index) => (
              <span key={index} >
                {tag}
              </span>
            ))}
          </div>
          <div>
            {recipe.mealType.map((meal, index) => (
              <span key={index}>
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
