import React, { useState } from "react";
import '../css/CreateRecipe.css';
import {useNavigate} from 'react-router-dom';

function CreateRecipe({onCreateRecipe}) {

    const[formData, setFormData] = useState({
        recipeName : '',
        category : '',
        ingredients : '',
        cookingTime : '',
        steps : ''
    });

    const categories = ["kahvaltı", "atıştırmalık", "akşam yemeği", "tatlı"];

    const navigate = useNavigate();

    //tek bir input değişikliği için
    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const createRecipe = () => {
        const request = {
            id : Math.floor(Math.random() * 99999999),
            ...formData
        };

        onCreateRecipe(request);
        navigate('/RecipeList');
        setFormData({
            recipeName : '',
            category: '',
            ingredients: '',
            cookingTime: '',
            steps: ''
        });
    }


    return (
        <div className="create-recipe">
            <form className="recipe-form">
                <input type="text" name="recipeName" value={formData.recipeName} onChange={handleChange} className="recipe-input" placeholder="Tarif adını giriniz"/>
                <select name = "category" value={formData.category} onChange={handleChange} className="recipe-category">
                    <option value={''}>Kategori Seçiniz</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} placeholder="Malzemeleri giriniz" className="recipe-ingredient"/>
                <input type="number" name="cookingTime" value={formData.cookingTime} onChange={handleChange} placeholder="Hazırlama Süresi" className="recipe-cookingtime"/>
                <textarea name="steps" value={formData.steps} onChange={handleChange} placeholder="Adımlar" className="recipe-step"/>    
            </form>
            <button className="add-button" type="submit" onClick={createRecipe}>Kaydet</button>

        </div>
    )
}
export default CreateRecipe;