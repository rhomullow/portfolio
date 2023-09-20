import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  colors: string[] = ['#010101', '#603814', '#75D6EC', '#FEAFC7', '#760188', '#011A98', '#06BD02', '#FFFF00', '#FE941D', '#FF1D25']

  constructor() { }

  ngOnInit(): void {
  }

}
