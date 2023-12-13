import React, {useState, useEffect} from "react";
import { PageInscription } from "../page/PageInscription";

  export const Plat = () => {
    const [titre, setTitre] = useState(['Pizza regina', 'Salade césar', 'Poisson papillote']);
    const [ingredients, setIngredients] = useState([['jambon, fromage, tomate'], ['salade, tomate, noix'], ['collin d\'Alaska, citron']]);
    const [regime, setRegime] = useState(['sans lactose', 'végétarien', 'sans sel']);

    /*useEffect(() => {
      if(typeregime === 'sans lactose'){

      }
    })*/
    
  return(
    <>
    <div id='listePlat'>
      <div className='Plat'>
        <p>Titre : {titre[0]}</p>
        <p>Liste des ingrédients : {ingredients[0]}</p>
        <p>Type de régime : {regime[0]}</p>
      </div>

      <div className='Plat'>
        <p>Titre : {titre[1]}</p>
        <p>Liste des ingrédients : {ingredients[1]}</p>
        <p>Type de régime : {regime[1]}</p>
      </div>

      <div className='Plat'>
        <p>Titre : {titre[2]}</p>
        <p>Liste des ingrédients : {ingredients[2]}</p>
        <p>Type de régime : {regime[2]}</p>
      </div>
    </div>
    </>
  );
};