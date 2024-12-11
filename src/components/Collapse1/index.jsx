import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Collapse1({ description, titre }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="infoSite">
      <div className="critere" onClick={() => setIsOpen(!isOpen)}>
        <span>{titre}</span>

        <FontAwesomeIcon
          className="btnFleche"
          icon={isOpen ? faChevronUp : faChevronDown}
        />
      </div>

      {isOpen && <div className="infoZone">{description}</div>}
    </div>
  );
}
export default Collapse1;
