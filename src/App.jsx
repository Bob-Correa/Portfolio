import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import DetailProject from "./components/DetailProject";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  const projects = [
    {
      id: 1,
      name: "Heroes league",
      description: "Création d'une page d'accueil réalisé avec HTML et CSS",
      image: "/image/hero-banner.png",
      url: "https://o-clock-skaven.github.io/S02E04-challenge-heroes-league-Bob-Correa/",
    },
    {
      id: 2,
      name: "GameHub",
      description:
        "Projet regroupant differents jeux réalisés avec JavaScript Express et EJS",
      image: "/image/boardgames.png",
      url: "https://gamehub-nqlz.onrender.com/"
    },
    {
      id: 3,
      name: "Ocoffee",
      description:
        "Création d'un site vitrine de café, réalisé avec JavaScript, Ejs, Html, Css, PostgreSQL",
      image: "/image/café.jpg",
      url: "https://o-coffee-y472.onrender.com"
    },
    {
      id: 4,
      name: "OQuizz",
      description:
        "Création d'un quiz, réalisé avec PostgreSQL en grande partie ,JavaScript, Ejs, Html, Css, ",
      image: "/image/Quiz.jpg",
      url: "https://oquiz-rw6p.onrender.com"
    },
    {
      id: 5,
      name: "Okanban",
      description:
        "Création d'un tableau kanban: Gesion de projet (user stories et wireframes), Modélisation MERISE(Mcd et Mld), Architecture (Sequelize models)",
      image: "/image/kanban.jpg",
    },
    {
      id: 6,
      name: "O'Recipes",
      description:
        "Création d'un site vitrine de recette avec APi et front en react",
      image: "/image/o'recipes.jpg",
    },
    {
      id: 7,
      name: "Social-Network",
      description:
        "Création d'un réseau social avec Node, Typescript, MongoDB, Mongoose avec une architecture microservices",
      image: "/image/Social-network.jpg",
    },
  ];
  // Liste des pages disponibles
  const pages = ["home", "detailProject", "contact"];

  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProjectID, setSelectedProjectId] = useState(1);

  const selectedProject = () => {
    return projects.find((project) => project.id === selectedProjectID);
  };

  return (
    <main className="container">
      <Header setCurrentPage={setCurrentPage} />
      <div>
        {currentPage === "home" && (
          <Projects
            projects={projects}
            setCurrentPage={setCurrentPage}
            setSelectedProjectId={setSelectedProjectId}
          />
        )}
        {currentPage === "contact" && <Contact />}
        {/* ici il manque peut être quelque chose ?! A vous d'imaginer quoi ? */}
        {currentPage === "detailProject" && (
          <DetailProject project={selectedProject()} />
        )}
      </div>
      <Footer />
    </main>
  );
}

export default App;
