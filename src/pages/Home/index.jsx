import "../../sass/home.scss";
import FichierList from "../../components/FichierList";
import Banner from "../../components/Banner";
import image from "../../images/HomePhoto.png";

function Home() {
  return (
    <div>
      <Banner text="Chez vous, partout et ailleurs" image="homePhoto" />
      <FichierList />
    </div>
  );
}

export default Home;
