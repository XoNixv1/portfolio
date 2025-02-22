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
        <p className="label">About</p>
        <div className="devider"></div>
        <p className="txt">
          I am a Frontend Developer with 1 year of experience building web
          applications using JavaScript, React, and TypeScript. Before
          transitioning to web development, I played professionally on the top
          CIS esports scene and later in Italy, where I was recognized as one of
          the best in the field. However, I decided to shift my focus to a new
          challenge that I find equally exciting but more stable for me: web
          development. Over 5 years in esports, I honed invaluable skills such
          as communication, patience, and self-improvement. Now, I've completed
          courses in algorithms, data structures, and modern web development,
          while continuing to deepen my expertise in JavaScript, React,
          TypeScript, Redux, and responsive design by applying them in my
          projects. I remain committed to constant improvement and am dedicated
          to becoming a professional in this field. Currently, I am expanding my
          knowledge by learning Node.js, Express, and PostgreSQL.
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
