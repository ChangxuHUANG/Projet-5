import "../../sass/collapse.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Collapse() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div className="infoSite">
      <div className="critere" onClick={() => setIsOpen1(!isOpen1)}>
        <span>Fiabilité</span>

        <FontAwesomeIcon
          className="btnFleche"
          icon={isOpen1 ? faChevronUp : faChevronDown}
        />
      </div>

      {isOpen1 && (
        <div className="infoZone">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements et toutes les inforamtions sont
          régulièrement vérifiées par nos équipes.
        </div>
      )}

      <div className="critere" onClick={() => setIsOpen2(!isOpen2)}>
        <span>Respect</span>

        <FontAwesomeIcon
          className="btnFleche"
          icon={isOpen2 ? faChevronUp : faChevronDown}
        />
      </div>

      {isOpen2 && (
        <div className="infoZone">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements et toutes les inforamtions sont
          régulièrement vérifiées par nos équipes.
        </div>
      )}

      <div className="critere" onClick={() => setIsOpen3(!isOpen3)}>
        <span>Service</span>

        <FontAwesomeIcon
          className="btnFleche"
          icon={isOpen3 ? faChevronUp : faChevronDown}
        />
      </div>

      {isOpen3 && (
        <div className="infoZone">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements et toutes les inforamtions sont
          régulièrement vérifiées par nos équipes.
        </div>
      )}

      <div className="critere" onClick={() => setIsOpen4(!isOpen4)}>
        <span>Sécurité</span>

        <FontAwesomeIcon
          className="btnFleche"
          icon={isOpen4 ? faChevronUp : faChevronDown}
        />
      </div>

      {isOpen4 && (
        <div className="infoZone">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements et toutes les inforamtions sont
          régulièrement vérifiées par nos équipes.
        </div>
      )}
    </div>
  );
}
export default Collapse;
