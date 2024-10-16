import { useState } from 'react';
import './App.css';
import CreateRecipe from './components/CreateRecipe';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  const [recipes, setRecipes] = useState([]);   //eklenen tarifler
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleCreateRecipe = (newRecipes) => {
    setRecipes([...recipes, newRecipes]);

  }

  console.log(recipes);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);    //seçilen tarifi state'e kaydet
  }

  const handleCloseDetail = () => {
    setSelectedRecipe(null);    //detay sayfasını kapat
  }

  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element = {<CreateRecipe onCreateRecipe={handleCreateRecipe}/>}/>
          <Route path='/RecipeList' element = {<RecipeList recipes={recipes} onRecipeClick={handleRecipeClick}/>}/>
          <Route path='/RecipeDetail' element = {<RecipeDetail recipe={selectedRecipe} onCloseDetail={handleCloseDetail} />}/>
        </Routes>
      </Router>

  );
}

export default App;
