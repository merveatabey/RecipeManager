import React from "react";
import '../css/RecipeCard.css';
import { useNavigate } from "react-router-dom";
function RecipeDetail({recipe, onCloseDetail}){
    const navigate = useNavigate();  // Geri yönlendirme için

    if(!recipe) return alert('Tarif Bulunamadı!');
    const{recipeName, category, ingredients, cookingTime, steps} = recipe;

    return(
        <div className="recipe-detail">
            <button onClick={() => navigate(-1)} className="close-button">X</button>
            <h2 className="title">{recipeName}</h2>
            <p className="category">Kategori : {category}</p>
            <p className="ingredients">Malzemeler : {ingredients}</p>
            <p className="time">Hazırlama süresi : {cookingTime} dakika</p>
            <p className="steps">Adımlar : {steps}</p>
        </div>
    )
}
export default RecipeDetail;