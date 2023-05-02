import { Component, OnInit } from '@angular/core';

import { projects } from './../project/list/list.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  skills = ['angular', 'css 3', 'UX Designer', 'HTML5'];
  projects = projects;

  constructor() { }

  ngOnInit(): void {
  }

}
