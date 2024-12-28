import Slideshow from "../../components/Slideshow/Slideshow";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fichierList } from "../../logements";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../../sass/logements.scss";
import Collapse1 from "../../components/Collapse1";

function Logements() {
  const { id } = useParams();
  console.log(id);
  const appartementInfo = fichierList.find((logement) => logement.id === id);
  const navigate = useNavigate();

  const idVerifie = fichierList.find((logement) => logement.id === id);

  useEffect(() => {
    if (!idVerifie) {
      navigate("*", { replace: true });
    }
  }, [idVerifie, navigate]);

  if (!idVerifie) {
    return null;
  }

  return (
    <div>
      <Slideshow id={id} appartementInfo={appartementInfo} />
      <div>
        <section className="information1">
          <div className="partie1">
            <h2>{appartementInfo.title}</h2>
            <p>{appartementInfo.location}</p>
            <ul className="tags">
              {appartementInfo.tags.map((tag) => (
                <li key={tag}>
                  <span>{tag} </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="partie2">
            <section className="host">
              <div className="nomHost">{appartementInfo.host.name}</div>
              <img src={appartementInfo.host.picture} alt="host" />
            </section>
            <div className="rating">
              {Array.from({ length: appartementInfo.rating }, (_, index) => (
                <FontAwesomeIcon
                  className="etoileRouge"
                  key={index}
                  icon={faStar}
                />
              ))}
              {Array.from(
                { length: 5 - appartementInfo.rating },
                (_, index) => (
                  <FontAwesomeIcon
                    className="etoileGris"
                    key={index}
                    icon={faStar}
                  />
                )
              )}
            </div>
          </div>
        </section>
        <section className="information2">
          <div className="infoPrecise">
            <div className="zoneInfo">
              <Collapse1
                description={appartementInfo.description}
                titre="Description"
              />
            </div>
            <div className="zoneInfo">
              <Collapse1
                titre="Equipement"
                description={appartementInfo.equipments}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Logements;
