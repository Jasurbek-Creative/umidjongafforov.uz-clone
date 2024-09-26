import "./Hero.css";
import rightImg from "../assets/image.png";
import knoct from "../assets/knot.svg";

const Hero = () => {
  return (
    <div className="global_hero">
      <div className="landing_hero">
        <div className="text_hero">
          <h1>
            <span>MERN</span> <img src="" alt="" />
            <span>Stack .Developer</span> <img src="" alt="" />
            <br /> <span>Next & Python</span>
          </h1>
          <div className="resume_hero">
            <a href="#" target="_blank">
              <span>CV Resume</span>
            </a>
            <img className="resume_img" src={knoct} alt="micro logo" />
            <p>Available for Hire</p>
          </div>
        </div>
        <div className="img_hero">
          <img src={rightImg} alt="right Img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
