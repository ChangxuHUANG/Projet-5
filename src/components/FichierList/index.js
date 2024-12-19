import { Link } from "react-router-dom";
import { fichierList } from "../../logements"; 
import '../../sass/fichierList.scss'

function FichierList (){  


    return (
        <div className="fichiers">
        {fichierList.map((logementItem)=>
            <Link className="lienFiche" key={logementItem.title} to={`/logements/${logementItem.id}`}>
                <div className="ficheItem"> 
                <span>{logementItem.title}</span>
                 <img className="coverPhoto" src={logementItem.cover} alt="coverPhoto"/>
                </div>  
                </Link>
        )}
        </div>
    )
        
        
    

}

export default FichierList
