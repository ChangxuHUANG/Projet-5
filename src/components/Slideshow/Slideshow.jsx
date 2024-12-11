import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../../sass/slideShow.scss";
import { useState } from "react";

function Slideshow({ id, appartementInfo }) {
  console.log(appartementInfo);

  const [index, setIndex] = useState(0);

  const handleImageChange1 = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? appartementInfo.pictures.length - 1 : index - 1
    );
  };
  const handleImageChange2 = () => {
    setIndex((nextIndex) =>
      nextIndex === appartementInfo.pictures.length - 1 ? 0 : index + 1
    );
  };

  return (
    <div>
      {appartementInfo.pictures.length === 1 ? (
        <section className="showPhoto">
          <img
            src={appartementInfo.cover}
            alt="pictureSlide"
            className="photoEnCours"
          />
        </section>
      ) : (
        <section className="showPhoto">
          <img src={appartementInfo.pictures[index]} alt="pictureSlide" />
          <FontAwesomeIcon
            className="btnGauche"
            icon={faChevronLeft}
            onClick={handleImageChange1}
          />
          <FontAwesomeIcon
            className="btnDroite"
            icon={faChevronRight}
            onClick={handleImageChange2}
          />
          <span className="numeroPhoto">
            {index + 1}/{appartementInfo.pictures.length}
          </span>
        </section>
      )}
    </div>
  );
}
export default Slideshow;
