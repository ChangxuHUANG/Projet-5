import "../../sass/apropos.scss";
import DecoPhoto from "../../images/Paysage.png";

import Collapse1 from "../../components/Collapse1";
import { useState } from "react";

function Apropos() {
  return (
    <div className="aproposContainer">
      <div className="aproposPhoto"></div>

      <Collapse1
        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements et toutes les inforamtions sont
          régulièrement vérifiées par nos équipes."
        titre="Fiabilité"
      />
      <Collapse1
        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements et toutes les inforamtions sont
          régulièrement vérifiées par nos équipes."
        titre="Respect"
      />
      <Collapse1
        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements et toutes les inforamtions sont
          régulièrement vérifiées par nos équipes."
        titre="Service"
      />
      <Collapse1
        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements et toutes les inforamtions sont
          régulièrement vérifiées par nos équipes."
        titre="Sécurité"
      />
    </div>
  );
}

export default Apropos;
