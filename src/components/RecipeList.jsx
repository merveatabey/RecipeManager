import React from "react";
import RecipeCard from "./RecipeCard";
import '../css/RecipeList.css';
import { useNavigate } from "react-router-dom";

function RecipeList({recipes, onRecipeClick}){
    const navigate = useNavigate();

    const handleRecipeClick = (recipe) => {
        onRecipeClick(recipe);
        navigate('/RecipeDetail');      //detay sayfasına yönlendir
    }
    return(
        <div className="recipe-list">
            {recipes.map((recipe) => 
            <RecipeCard key={recipe.id} recipe = {recipe} onClick = {handleRecipeClick}/>
            )}
        </div>
    )
}
export default RecipeList;