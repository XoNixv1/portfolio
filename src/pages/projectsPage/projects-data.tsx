export interface Project {
  src: string;
  label: string;
  deploy?: boolean;
  descr: string;
}

export const projects = [
  {
    src: "/assets/projects/league-stats.png",
    label: "Champions Data Project",
    deploy: true,
    descr:
      "This project is a League of Legends Champion Explorer, built using TypeScript, Redux, and Node.js with Express for the server-side API. It allows users to explore champions, their stats, abilities, and other related information.",
  },
  {
    src: "/assets/projects/bird-game.png",
    label: "Flappy Bird Implementation",
    deploy: true,
    descr:
      "This is a Flappy Bird game implementation built using TypeScript and JavaScript. The game allows players to control a bird, guiding it through moving pipes.",
  },
  {
    src: "/assets/projects/marvel-api.png",
    label: "Marvel Information Portal",
    descr:
      "This project is a Marvel Information Portal, built to explore and display detailed information about Marvel characters and comics using the Marvel API. The project serves as a practice for handling API requests and managing dynamic content with JavaScript and React.",
  },
  {
    src: "/assets/projects/post-delete-methods.png",
    label: "Champion Management",
    descr:
      "It was built to practice handling POST and DELETE requests through forms, giving me hands-on experience with basic CRUD operations. I also aimed to improve my understanding of API integration and data management for more complex future projects.",
  },
  {
    src: "/assets/projects/chat.png",
    label: "Chat App",
    descr:
      "Not finished yet. I'm taking on the challenge of learning Node.js and PostgreSQL to make this project better. This is just a small start with Firebase, but I realized its not the most efficient or suitable approach, so Im transitioning to a more proper solution.Not finished yet, im taking challenge and learning node and postgresSQL to make it better, but this one is small start with firebese, i decided that it will be not propper and easy aproach",
  },
];
