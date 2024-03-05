import { Link } from "react-router-dom";
import "../Sass/MainError.scss";

// Composant MainErrorPage qui affiche une page d'erreur 404
export default function MainErrorPage() {
  return (
    <main className="mainComponent">
      <div className="mainComponentMsg">
        <h1 className="mainComponentMsgErrorText">404</h1>
        <p className="mainComponentMsgOups">Oups! La page que vous demandez n'existe pas.</p>
      </div>
      {/* Lien de retour vers la page d'accueil */}
      <Link className="backlink" to="/">
        Retourner à la page d&apos;accueil
      </Link>
    </main>
  );
}
