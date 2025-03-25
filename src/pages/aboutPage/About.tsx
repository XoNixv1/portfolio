import "./about.scss";
import Carousel from "../../components/corousel/Carousel";

const images: string[] = [
  "/assets/about/photos/44Mz6gV18pk.jpg",
  "/assets/about/photos/aXsVe8K0FNE.jpg",
  "/assets/about/photos/4.png",
  "/assets/about/photos/hq720.jpg",
];

const svgFiles = [
  "tech-1.svg",
  "tech-2.svg",
  "tech-3.svg",
  "tech-4.svg",
  "tech-5.svg",
  "tech-6.svg",
  "tech-7.svg",
  "tech-8.svg",
  "tech-9.svg",
  "tech-10.svg",
  "tech-11.svg",
  "tech-12.svg",
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
          {svgFiles.map((svgName, i) => (
            <img
              src={`/assets/about/tech-stack/${svgName}`}
              alt={`Tech-icon-${i + 1}`}
            />
          ))}
        </div>
        <Carousel images={images} />
      </div>
    </div>
  );
}
