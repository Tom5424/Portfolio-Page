import { Component } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";
import { USALModule } from '@usal/angular';


@Component({
  selector: 'app-my-skills',
  imports: [TranslatePipe, USALModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss'
})


export class MySkills {
  skills: { imgPath: string, text: string, altText: string }[] = [
    { imgPath: '/icons/angular.svg', text: 'Angular', altText: 'Skill: Angular' },
    { imgPath: '/icons/typescript.svg', text: 'TypeScript', altText: 'Skill: TypeScript' },
    { imgPath: '/icons/javascript.svg', text: 'JavaScript', altText: 'Skill: JavaScript' },
    { imgPath: '/icons/api.svg', text: 'Rest-Api', altText: 'Skill: Rest-Api' },
    { imgPath: '/icons/firebase.svg', text: 'Firebase', altText: 'Skill: Firebase' },
    { imgPath: '/icons/git.svg', text: 'GIT', altText: 'Skill: GIT' },
    { imgPath: '/icons/scrum.svg', text: 'Scrum', altText: 'Skill: Scrum' },
    { imgPath: '/icons/html.svg', text: 'HTML', altText: 'Skill: HTML' },
    { imgPath: '/icons/css.svg', text: 'CSS', altText: 'Skill: CSS' },
    { imgPath: '/icons/drf.svg', text: 'REST framework', altText: 'Skill: REST framework' },
    { imgPath: '/icons/django.svg', text: 'Django', altText: 'Skill: Django' },
    { imgPath: '/icons/python.svg', text: 'Python', altText: 'Skill: Python' },
    { imgPath: '/icons/linux.svg', text: 'Linux', altText: 'Skill: Linux' },
    { imgPath: '/icons/postgresql.svg', text: 'Postgresql', altText: 'Skill: Postgresql' },
    { imgPath: '/icons/sql.svg', text: 'Sql', altText: 'Skill: Sql' },
    { imgPath: '/icons/challenge-me.svg', text: 'mySkills.challengeMe', altText: 'Challenge me' },
  ];
}