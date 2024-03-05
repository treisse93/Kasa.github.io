import "../Sass/MainHomePage.scss";
import Datas from "../datas/DatasControlers.js";
import Card from "../components/Card";
import Cover from "../components/Cover";
import coverImg from "../assets/pictures/HomePageCover.png";

// Composant MainHomePage qui affiche la page d'accueil principale
export default function MainHomePage() {
  return (
    <main className="mainHomePage">
      {/* Affichage de la couverture principale */}
      <Cover
        type="main"
        title="Chez vous, partout et ailleurs"
        img={coverImg}
      />
      {/* Affichage des cartes à partir des données fournies */}
      <section id="cardsSection">
        <div className="cardsContainer">
          {Datas.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              id={item.id}
              img={item.cover}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
