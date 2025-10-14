import { Component } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";
import { USALModule } from '@usal/angular';


@Component({
  selector: 'app-my-skills',
  imports: [TranslatePipe, USALModule],
  templateUrl: './my-skills.html',
  styleUrls: ['./my-skills.scss', './my-skills-media.scss']
})


export class MySkills {
  skills: { imgPath: string, text: string, altText: string }[] = [
    { imgPath: '/img-icons/angular.svg', text: 'Angular', altText: 'Skill: Angular' },
    { imgPath: '/img-icons/typescript.svg', text: 'TypeScript', altText: 'Skill: TypeScript' },
    { imgPath: '/img-icons/javascript.svg', text: 'JavaScript', altText: 'Skill: JavaScript' },
    { imgPath: '/img-icons/api.svg', text: 'Rest-Api', altText: 'Skill: Rest-Api' },
    { imgPath: '/img-icons/firebase.svg', text: 'Firebase', altText: 'Skill: Firebase' },
    { imgPath: '/img-icons/git.svg', text: 'GIT', altText: 'Skill: GIT' },
    { imgPath: '/img-icons/scrum.svg', text: 'Scrum', altText: 'Skill: Scrum' },
    { imgPath: '/img-icons/html.svg', text: 'HTML', altText: 'Skill: HTML' },
    { imgPath: '/img-icons/css.svg', text: 'CSS', altText: 'Skill: CSS' },
    { imgPath: '/img-icons/drf.svg', text: 'REST framework', altText: 'Skill: REST framework' },
    { imgPath: '/img-icons/django.svg', text: 'Django', altText: 'Skill: Django' },
    { imgPath: '/img-icons/python.svg', text: 'Python', altText: 'Skill: Python' },
    { imgPath: '/img-icons/linux.svg', text: 'Linux', altText: 'Skill: Linux' },
    { imgPath: '/img-icons/postgresql.svg', text: 'Postgresql', altText: 'Skill: Postgresql' },
    { imgPath: '/img-icons/sql.svg', text: 'Sql', altText: 'Skill: Sql' },
    { imgPath: '/img-icons/challenge-me.svg', text: 'mySkills.challengeMe', altText: 'Challenge me' },
  ];
}