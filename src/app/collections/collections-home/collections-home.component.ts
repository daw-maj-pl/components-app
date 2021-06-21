import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  partOfLink = 'hi';
  data = [
    { name: 'John', age: 27, job: 'Designer', employed: true },
    { name: 'Jane', age: 28, job: 'Engineer', employed: false },
    { name: 'Mark', age: 25, job: 'Photographer', employed: true },
  ];
  headers = [
    { key: 'employed', label: 'Has a Job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() {}

  ngOnInit() {}
}
