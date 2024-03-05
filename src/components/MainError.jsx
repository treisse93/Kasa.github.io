import { Link } from "react-router-dom";
import "../Sass/MainError.scss";

// Composant MainErrorPage qui affiche une page d'erreur 404
export default function MainErrorPage() {
  return (
    <main className="MainComponent">
      <div className="MainComponentMsg">
        <h1 className="errorText">404</h1>
        <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      </div>
      {/* Lien de retour vers la page d'accueil */}
      <Link className="backlink" to="/">
        Retourner à la page d&apos;accueil
      </Link>
    </main>
  );
}
