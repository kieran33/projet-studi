import { PageError } from './page/Erreur';
import { PageMentionsLegales } from './page/MentionsLegales';
import { PagePolitiqueConfidentialite } from './page/PagePolitiqueConfiden';
import { PageContact } from './page/Contact';
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from 'react-router-dom';
import React from "react";
import { PageAccueil } from './page/Accueil';
import { PageInscription } from './page/PageInscription';
import { BoutonInscription } from './components/BoutonInscription';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BarreNav/>, 
    errorElement: <PageError/>,
    children: [
      {
        path: 'accueil',
        element: <PageAccueil/>
      },
      {
        path: 'inscription',
        element: <PageInscription/>
      },
      {
        path: 'contact',
        element: <PageContact/>
      },
      {
        path: 'mentionsLegales',
        element: <PageMentionsLegales/>
      },
      {
        path: 'politiqueDeConfidentialite',
        element: <PagePolitiqueConfidentialite/>
      }
    ]
  }
])

export function BarreNav() {
  return(
    <>
      <header>
        <nav id="navigation">
          <NavLink to="/accueil">Accueil</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/mentionsLegales">Mentions légales</NavLink>
          <NavLink to="/politiqueDeConfidentialite">Politique de confidentialité</NavLink>
          <form>
            <input type="text" name="pseudo" id="pseudo" placeholder="Votre pseudo"></input>
            <label htmlFor="pseudo"></label>

            <input type="password" name="motdepasse" id="motdepasse" placeholder="Votre mot de passe"></input>
            <label htmlFor="motdepasse"></label>

            <button type="submit" value="se connecter">Se connecter</button>
          </form>

          <BoutonInscription/>
          
        </nav>
      </header>
      <Outlet/>
    </>
  )
}

function App(){
  return <RouterProvider router={router}/>;
}

export default App;