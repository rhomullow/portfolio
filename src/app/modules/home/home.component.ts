import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  skills = ['angular', 'css 3']

  constructor() { }

  ngOnInit(): void {
  }

}
