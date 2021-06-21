import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'What’s the capital of Canada?',
      content: 'Ottawa is the capital of Canada.',
    },
    {
      title: 'What’s the name of the longest river in the world?',
      content: 'The Nile is the name of the longest river in the world.',
    },
    {
      title: 'How many stripes are there on the US flag?',
      content: 'There are 13 stripes on the US flag.',
    },
  ];

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
