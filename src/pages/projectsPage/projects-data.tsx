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
    descr:
      "I am currently working on it. Built with Node.js, Next.js, and PostgreSQL. The project uses JWT cookies for user authentication, ensuring secure data and session handling. The primary goal is to create a seamless and user-friendly communication platform. I also plan to integrate WebSockets for real-time updates, allowing messages to appear instantly for all users without requiring page refresh.",
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
  {
    src: "/assets/projects/post-delete-methods.png",
    label: "Champion Management",
    github: "https://github.com/XoNixv1/practice-app",
    descr:
      "It was built to practice handling POST and DELETE requests through forms, giving me hands-on experience with basic CRUD operations. I also aimed to improve my understanding of API integration and data management for more complex future projects.",
  },
];
