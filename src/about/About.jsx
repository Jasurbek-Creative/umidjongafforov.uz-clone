import "./About.css";
import VerticalCarousel from "./Carousel";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about_text">
        <div className="about_title">About</div>
        <h3 className="about_h3">
          {`Hello! Im Umidjon G'afforov MERN Stack Developer from Uzbekistan`}
        </h3>
        <p className="about_p">
          {`Hi, I'm G'afforov Umidjon, a Full stack developer with a focus on
          Next.js/React development. I love creating web applications that solve
          everyday problems, and I'm always curious to learn more when it comes
          to new technologies and creative coding.`}
        </p>
      </div>
      <div className="about_calouser">
        <VerticalCarousel />
      </div>
    </div>
  );
};

export default About;
