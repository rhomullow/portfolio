import { Component, OnInit } from '@angular/core';

export const projects = [
  {
    title: 'Project title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
    thumb: 'assets/img/project_thumb.png',
  },
  {
    title: 'Project title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
    thumb: 'assets/img/project_thumb.png',
  },
  {
    title: 'Project title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
    thumb: 'assets/img/project_thumb.png',
  },
  {
    title: 'Project title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
    thumb: 'assets/img/project_thumb.png',
  },
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor() {}

  projects = projects;

  ngOnInit(): void {}
}
