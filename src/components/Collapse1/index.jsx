import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../sass/collapse1.scss";

function Collapse1({ description, titre }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="barre">
      <div className="critere" onClick={() => setIsOpen(!isOpen)}>
        <span>{titre}</span>

        <FontAwesomeIcon
          className={`btnFleche ${isOpen ? "active" : ""}`}
          icon={faChevronUp}
        />
      </div>

      <div className={`infoZone ${isOpen ? "open" : ""}`}>
        {Array.isArray(description) ? (
          <ul>
            {description.map((equipement) => (
              <li key={equipement}>{equipement}</li>
            ))}
          </ul>
        ) : (
          <div>{description}</div>
        )}
      </div>
    </div>
  );
}
export default Collapse1;
