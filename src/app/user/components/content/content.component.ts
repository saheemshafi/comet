import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/search';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() content: Item[] = [];
  constructor() {}
  ngOnInit(): void {}
}
