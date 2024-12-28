import "../../sass/banner.scss";

function Banner({ image, text }) {
  return (
    <div className={`banner ${image}`}>
      <span>{text}</span>
    </div>
  );
}
export default Banner;
