import "./mainContent.scss";

export default function MainPage(): JSX.Element {
  return (
    <div
      className="main-page"
      style={{ backgroundColor: "#000", color: "white", height: "100%" }}
    >
      <div className="container">
        <div className="main-block">
          <div className="descr-wrapper">
            <h1 className="label">
              HI, I AM <br /> KHALED NOMAN
            </h1>
            <p className="descr">
              A Serbia-based front-end developer passionate about creating
              responsive and user-friendly web applications. With a background
              in esports, I bring focus and problem-solving skills to building
              efficient, accessible digital experiences.
            </p>
            <div className="contacts">
              <a href="https://www.linkedin.com/in/khaled-noman-19384733b/">
                <img src="/assets/icons8-linkedin.svg" alt="Linkedin" />
              </a>
              <a href="https://github.com/XoNixv1">
                <img src="/assets/icons8-github.svg" alt="GitHub" />
              </a>
              <a href="https://x.com/XoNixLOL">
                <img src="/assets/icons8-twitter.svg" alt="Twitter" />
              </a>
            </div>
          </div>
          <img
            className="main-image"
            src="/assets/main-photo.png"
            alt="photo"
          />
        </div>
      </div>
    </div>
  );
}
