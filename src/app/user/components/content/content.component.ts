import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/interfaces/search';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() content: Item[] | any[] = [];
  @Input() fetched: boolean = false;
  @Output() scrolled: EventEmitter<void> = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  isString(val: any): boolean {
    return typeof val === 'string';
  }
  onScrolled(): void {
    this.scrolled.emit();
  }
}
