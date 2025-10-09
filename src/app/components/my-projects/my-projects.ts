import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { USALModule } from '@usal/angular';


@Component({
  selector: 'app-my-projects',
  imports: [TranslatePipe, USALModule],
  templateUrl: './my-projects.html',
  styleUrls: ['./my-projects.scss', './my-projects-media.scss']
})


export class MyProjects {
  projects: { imgPath: string, name: string, technologies: string, description: string, githubLink: string, liveTestLink: string }[] = [
    {
      imgPath: '/img/project-dabubble.png',
      name: 'DABubble',
      technologies: 'Angular | TypeScript | SCSS | Firebase | HTML',
      description: 'myProjects.descriptionDABubble',
      githubLink: 'https://github.com/Tom5424/DABubble',
      liveTestLink: 'https://tom-petri.net/DABubble',
    },
    {
      imgPath: '/img/project-join.png',
      name: 'Join',
      technologies: 'Angular | TypeScript | SCSS | Firebase | HTML',
      description: 'myProjects.descriptionJoin',
      githubLink: 'https://github.com/Tom5424/Join',
      liveTestLink: 'https://tom-petri.net/Join/login',
    },
    {
      imgPath: '/img/project-sharkie.png',
      name: 'Sharkie',
      technologies: 'JavaScript | CSS | HTML',
      description: 'myProjects.descriptionSharkie',
      githubLink: 'https://github.com/Tom5424/Sharkie',
      liveTestLink: 'https://tom-petri.net/Sharkie/',
    },
    {
      imgPath: '/img/project-coderr.png',
      name: 'Coderr (backend)',
      technologies: 'REST framework | Django | Python',
      description: 'myProjects.descriptionCoderr',
      githubLink: 'https://github.com/Tom5424/Coderr-backend',
      liveTestLink: 'https://tom-petri.net/Coderr/index.html',
    },
    {
      imgPath: '/img/project-kanmind.png',
      name: 'Kanmind (backend)',
      technologies: 'REST framework | Django | Python',
      description: 'myProjects.descriptionKanmind',
      githubLink: 'https://github.com/Tom5424/Kanmind-backend',
      liveTestLink: 'https://tom-petri.net/Kanmind/pages/auth/login.html',
    },
  ];
}