import "./style.css";

export default function Header({ setCurrentPage }) {
  // Combien d'éléments je peux retourner ? 1 element maximum
  // Sinon, englober les éléments d'un fragment react <> ou <div>
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button type="button" onClick={() => setCurrentPage("home")}>
              Accueil
            </button>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <button type="button" onClick={() => setCurrentPage("contact")}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}
