import "../../sass/error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="errorContainer">
      <div className="error">404</div>
      <h2> Oups ! La page que vous demandez n'existe pas</h2>
      <Link to={"/"}>Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
