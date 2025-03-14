export interface Project {
  src: string;
  label: string;
  deploy?: boolean;
  github: string;
  link?: string;
  descr: string;
  note?: string;
}

export const projects = [
  {
    src: "/assets/projects/chat.png",
    label: "Full stack chat app",
    github: "https://github.com/XoNixv1/chat-app-server",
    deploy: true,
    link: "https://chat-app-front-production.up.railway.app/login",
    descr:
      "The project is built with Node.js, Next.js, and PostgreSQL. It uses JWT cookies for user authentication, ensuring secure data and session handling. The primary goal is to create a seamless and user-friendly communication platform. Integration of WebSockets is planned for real-time updates, allowing messages to appear instantly for all users without requiring page refresh.",
  },
  {
    src: "/assets/projects/bird-game.png",
    label: "Flappy Bird Implementation",
    github: "https://github.com/XoNixv1/Flappy-Bird",
    link: "https://bird-game-9reid7yi2-khaleds-projects-403334ef.vercel.app/",
    deploy: true,
    descr:
      "This is a Flappy Bird game implementation built using TypeScript and JavaScript. The game allows players to control a bird, guiding it through moving pipes.",
  },
  {
    src: "/assets/projects/marvel-api.png",
    label: "Marvel Information Portal",
    github: "https://github.com/XoNixv1/Marvel-Information-api-project",
    descr:
      "This project is a Marvel Information Portal, built to explore and display detailed information about Marvel characters and comics using the Marvel API. The project serves as a practice for handling API requests and managing dynamic content with JavaScript and React.",
  },
  {
    src: "/assets/projects/league-stats.png",
    label: "Champions Data Project",
    deploy: true,
    github: "https://github.com/XoNixv1/League-Project",
    link: "https://league-project-lake.vercel.app/",
    note: "It may take a couple of minutes for the app to load since the project uses a free server deployment.",
    descr:
      "This project is a League of Legends Champion Explorer, built using TypeScript, Redux, and Node.js with Express for the server-side API. It allows users to explore champions, their stats, abilities, and other related information.",
  },
];
