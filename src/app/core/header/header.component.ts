import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  links = [
    { label: 'Início', href: ['/'] },
    { label: 'Projetos', href: ['/projects'] },
    { label: 'Certificados', href: ['#certified'] },
  ];

  ngOnInit(): void {}
}
