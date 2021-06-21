import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 35, label: '# of Users' },
    { value: 1250, label: 'Revenue' },
    { value: 65, label: 'Reviews' },
  ];
  items = [
    {
      image: '/assets/images/couch.jpg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on',
    },
    {
      image: '/assets/images/dresser.jpg',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff in',
    },
    {
      image: '/assets/images/table.jpg',
      title: 'Table',
      description: 'This is a great table to put stuff in',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
