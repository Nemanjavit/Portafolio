import person from "../assets/person2.png";
import github from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";
import email from "../assets/email.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="shape"></div>
      <div className="overlay"></div>
      <div className="container hero-container">
        <img src={person} className="profile-img hidden-img" alt="person" />
        <img src={person} className="profile-img" alt="person" />
        <div className="text-content">
          <div className="d-flex flex-column info">
            <span className="text-xl fw-bold">Hi, I am</span>
            <span className="text-xxl fw-bold">Nemanja Vit</span>
            <span className="text-md fw-bold">Front End Developer</span>
          </div>
          <div className="social">
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
    </div>
  );
};

export default Hero;
