import { Component } from '@angular/core';


@Component({
  selector: 'app-my-projects',
  imports: [],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss'
})


export class MyProjects {
  projects: { imgPath: string, name: string, technologies: string, description: string, githubLink: string, liveTestLink: string }[] = [
    {
      imgPath: '/img/project-dabubble.png',
      name: 'DABubble',
      technologies: 'Angular | TypeScript | SCSS | Firebase | HTML',
      description: 'A chat messenger clone like Slack. Create Channel to specific Topics. Or write direct messages to other user.',
      githubLink: 'https://github.com/Tom5424/DABubble',
      liveTestLink: 'https://tom-petri.net/DABubble',
    },
    {
      imgPath: '/img/project-join.png',
      name: 'Join',
      technologies: 'Angular | TypeScript | SCSS | Firebase | HTML',
      description: 'A Kanban board clone like Jira. Create, organize Tasks. Move Tasks with drag and drop. Create new Contacts and assign them to the Tasks.',
      githubLink: 'https://github.com/Tom5424/Join',
      liveTestLink: 'https://tom-petri.net/Join/login',
    },
    {
      imgPath: '/img/project-sharkie.png',
      name: 'Sharkie',
      technologies: 'JavaScript | CSS | HTML',
      description: 'A jump and run game under water based on object-oriented progarmming. Collect Coins and poison bottles. Fight against the big Shark at the end of the game.',
      githubLink: 'https://github.com/Tom5424/Sharkie',
      liveTestLink: 'https://tom-petri.net/Sharkie/',
    },
    {
      imgPath: '/img/project-coderr.png',
      name: 'Coderr (backend)',
      technologies: 'REST framework | Django | Python',
      description: 'A simple variant of the platform Fiverr. Create offers or edit orders as business user. Create reviews or place orders as customer user.',
      githubLink: 'https://github.com/Tom5424/Coderr-backend',
      liveTestLink: 'https://tom-petri.net/Coderr/index.html',
    },
    {
      imgPath: '/img/project-kanmind.png',
      name: 'Kanmind (backend)',
      technologies: 'REST framework | Django | Python',
      description: 'A Kanban board clone like Trello. Create, boards and organize Tasks wihin the board. Move Tasks with drag and drop. Get infos about boards and Tasks in the Dashboard.',
      githubLink: 'https://github.com/Tom5424/Kanmind-backend',
      liveTestLink: 'https://tom-petri.net/Kanmind/pages/auth/login.html',
    },
  ];
}