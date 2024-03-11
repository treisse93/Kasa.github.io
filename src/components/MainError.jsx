import { Link } from "react-router-dom";
import "../Sass/MainError.scss";
import { useEffect } from "react";

/**
 * Afficher une page d'erreur 404
 * @returns {JSX.Element} Le composant MainErrorPage.
 */
export default function MainErrorPage() {
  useEffect(() => {
    document.title = `Kasa - Erreur`;
  });
  return (
    <main className="mainComponent"> //main-error
      <div className="mainComponentMsg"> // main-error_message
        <h1 className="mainComponentMsgErrorText">404</h1> //main-error_message-text
        <p className="mainComponentMsgOups">
          Oups! La page que vous demandez n&apos;existe pas.
        </p>
      </div>
      {/* Lien de retour vers la page d'accueil */}
      <Link className="mainComponentMsgBacklink" to="/">
        Retourner à la page d&apos;accueil
      </Link>
    </main>
  );
}
