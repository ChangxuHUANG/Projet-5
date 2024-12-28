import "../../sass/apropos.scss";
import DecoPhoto from "../../images/Paysage.png";

import Collapse1 from "../../components/Collapse1";
import { useState } from "react";
import Banner from "../../components/Banner";

function Apropos() {
  return (
    <div className="aproposContainer">
      <Banner image="aproposPhoto" />
      <div className="infoSite">
        <Collapse1
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements et toutes les inforamtions sont
          régulièrement vérifiées par nos équipes."
          titre="Fiabilité"
        />
      </div>
      <div className="infoSite">
        <Collapse1
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements et toutes les inforamtions sont
          régulièrement vérifiées par nos équipes."
          titre="Respect"
        />
      </div>
      <div className="infoSite">
        <Collapse1
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements et toutes les inforamtions sont
          régulièrement vérifiées par nos équipes."
          titre="Service"
        />
      </div>
      <div className="infoSite">
        <Collapse1
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements et toutes les inforamtions sont
          régulièrement vérifiées par nos équipes."
          titre="Sécurité"
        />
      </div>
    </div>
  );
}

export default Apropos;
