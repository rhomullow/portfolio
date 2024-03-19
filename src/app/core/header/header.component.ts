import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

enum Mode {
  LIGHT = 'light',
  DARK = 'dark',
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('heroSkills') heroSkills!: ElementRef;

  constructor(private router: Router) { }

  links = [
    { label: 'Início', href: ['/'] },
    { label: 'Projetos', href: ['/projects'] },
  ];

  skill = '';
  skills = ['frontend developer', 'UX designer like', 'responsive UI', 'angular components'];
  promiseChar = Promise.resolve();

  themeMode = Mode;

  startTextAnimation() {
    this.skills.forEach((word) => {
      word.split('').forEach((char, indexChar) => {
        this.promiseChar = this.promiseChar.then(() => {
          this.skill += char;
          return new Promise(resolve => {
            if (indexChar === word.length - 1) {
              setTimeout(resolve, indexChar * 100);

              if (this.heroSkills)
                setTimeout(() => { this.heroSkills.nativeElement.classList.add('hero__skills--completed'); }, indexChar * 25);

            } else {
              setTimeout(resolve, 200);
              if (this.heroSkills) this.heroSkills.nativeElement.classList.remove('hero__skills--completed');
            }
          });
        });
      });

      this.promiseChar.then(() => {
        this.skill = '';
        this.startTextAnimation();
      });
    });
  }

  verifyIsProjectPage(): boolean {
    return this.router.url === '/projects';
  }

  updateCurrentTheme(mode: Mode) {
    sessionStorage.setItem('theme', mode);
  }

  toggleTheme() {
    let status = document.body.classList.toggle(this.themeMode.DARK);

    if (status) this.updateCurrentTheme(Mode.DARK)
    else this.updateCurrentTheme(Mode.LIGHT)
  }

  verifyThemeModeOnSession() {
    const deviceMode = window.matchMedia("(prefers-color-scheme: dark)");
    let initMode = sessionStorage.getItem('theme') as Mode.LIGHT | Mode.DARK;

    if (!initMode)
      deviceMode.matches ? (initMode = Mode.DARK) : (initMode = Mode.LIGHT);

    this.updateCurrentTheme(initMode);
    if (deviceMode.matches) document.body.classList.add(initMode);
    else document.body.classList.remove(Mode.DARK)
  }

  initialize() {
    this.verifyThemeModeOnSession();

    if (!this.verifyIsProjectPage())
      this.startTextAnimation();
  }

  ngOnInit(): void {
    this.initialize();
  }
}

