import Footer1 from "../../images//LOGOFooter.png";
import "../../sass/footer.scss";

function Footer() {
  return (
    <div className="FooterContainer">
      <img className="ImgContainer" src={Footer1} alt={"photoFooter"} />

      <div>2020 Kasa. All rights reserved </div>
    </div>
  );
}
export default Footer;
