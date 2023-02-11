import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() { }

  links = [
    { label: 'Início', href: ['/'] },
    { label: 'Projetos', href: ['/projects'] },
    { label: 'Certificados', href: ['#certified'] },
  ];

  skill = '';
  skills = ['frontend developer', 'UX designer like', 'responsive UI', 'angular components'];
  intervalToText!: any

  changeSkillOnHero() {
    let interval = 5000;
    let promise = Promise.resolve();

    this.skills.forEach((string) => {
      promise = promise.then(() => {

        let promiseChar = Promise.resolve();

        string.split('').forEach((char) => {

          promiseChar = promiseChar.then(() => {
            this.skill = this.skill.concat(char);

            return new Promise((resolveChar) => {
              setTimeout(resolveChar, string.length * 6);
            });
          });
        })

        this.skill = ''

        return new Promise((resolve) => {
          setTimeout(resolve, interval);
        });
      });
    });

  }

  ngOnInit(): void {
    this.changeSkillOnHero();
  }
}

