import React from "react";
import '../css/RecipeCard.css';

function RecipeCard ({recipe, onClick}){

    const {recipeName, category, ingredients, cookingTime} = recipe;



    return(
        <div className="recipe-card" onClick={() => onClick(recipe)}>
            <h3 className="title">{recipeName}</h3>
            <p className="category">Kategori : {category}</p>
            <p className="ingredients">
                Malzemeler : {ingredients.length > 50 ? ingredients.substring(0,50) + "..." : ingredients}
            </p>
            <p className="time">Hazırlanma Süresi : {cookingTime} dakika</p>
        </div>
    )
}
export default RecipeCard;