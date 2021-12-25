import { useState, useEffect } from 'react';
import './App.css';
import RecipeCard from "./components/RecipeCard";
import RecipeBar from "./components/SearchBar";

const apiUrl = "https://api.edamam.com/api/recipes/v2";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  // function to search for the recipes
  
  const searchRecipes = async () => {
setIsLoading(true);
const url = apiUrl + query;
const res = await fetch(url);
const data = await res.json();
//console.log(data);
setRecipes(data.meals);
setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  return (
    <div className="container">
      <h2>Unsere Resept-speice-app</h2>
      <div className="recipes">
        {recipes
          ? recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          : "No Results."}
      </div>
    </div>
  );
}

export default App;
