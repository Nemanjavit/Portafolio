import person from "../assets/person2.png";
import github from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";
import email from "../assets/email.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={person} alt="person" />
      <div className="divider"></div>
      <div className=" d-flex justify-content-md-between justify-content-lg-start flex-lg-column overlay">
        <div className="d-flex flex-column justify-content-end justify-content-lg-center wrapper h-100">
          <div className="d-flex flex-column info">
            <span className="text-xl fw-bold">Hi, I am</span>
            <span className="text-xxl fw-bold">Nemanja Vit</span>
            <span className="text-md fw-bold">Front End Developer</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-end justify-content-lg-start gap-5  social">
          <a className="" href="">
            <img src={github} alt="github icon" />
          </a>
          <a className="" href="">
            <img src={linkedIn} alt="linkedin icon" />
          </a>
          <a className="" href="">
            <img src={email} alt="email icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
