import "./about.scss";
import Carousel from "../../components/corousel/Carousel";

const images: string[] = [
  "/assets/about/photos/44Mz6gV18pk.jpg",
  "/assets/about/photos/aXsVe8K0FNE.jpg",
  "/assets/about/photos/4.png",
  "/assets/about/photos/hq720.jpg",
];

export default function About() {
  return (
    <div className="container">
      <div className="about-block">
        <h3 className="label">About</h3>
        <div className="devider"></div>
        <p className="txt">
          Web Developer with experience in building web applications and working
          directly with clients to deliver solutions using JavaScript,
          TypeScript, React, and Node.js. I have hands-on experience with these
          technologies, gained through various projects. Additionally, I have
          experience with basic algorithms and data structures and have
          developed responsive web UI. I continue to independently hone my
          skills to build a solid foundation in JavaScript. I am also expanding
          my knowledge in backend development, currently learning more about
          full stack building with Next.js, and usage of PostgreSQL database.
          Drawing from my past experience in esports, I have cultivated strong
          skills in communication, patience, and self-improvement, which have
          shaped me into a goal-oriented individual. These qualities, along with
          my passion for continuous growth, are driving my progress in web
          development.
        </p>
        <p>My tech stack:</p>
        <div className="tech-stack">
          <img
            src="/assets/about/tech-stack/icons8-javascript.svg"
            alt="javascript logo"
          />
          <img
            src="/assets/about/tech-stack/icons8-typescript.svg"
            alt="typescript logo"
          />
          <img
            src="/assets/about/tech-stack/icons8-react.svg"
            alt="react logo"
          />
          <img
            src="/assets/about/tech-stack/icons8-html-5.svg"
            alt="html5 logo"
          />
          <img src="/assets/about/tech-stack/icons8-css3.svg" alt="css3 logo" />
          <img
            src="/assets/about/tech-stack/icons8-git-logo.svg"
            alt="git logo"
          />
          <img src="/assets/about/tech-stack/icons8-sass.svg" alt="sass logo" />
          <img
            src="/assets/about/tech-stack/icons8-redux.svg"
            alt="redux logo"
          />
          <img
            src="/assets/about/tech-stack/icons8-node-js.svg"
            alt="redux logo"
          />
        </div>
        <Carousel images={images} />
      </div>
    </div>
  );
}
