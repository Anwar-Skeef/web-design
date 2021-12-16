import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'list-sid',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
})
export class MainListComponent implements OnInit {
  @Input() opened: boolean;
  @Output() open: EventEmitter<boolean> = new EventEmitter<boolean>();
  angle1: boolean;
  angle2: boolean;
  angle3: boolean;
  constructor() {
    this.angle1 = true;
    this.angle2 = true;
    this.angle3 = true;
  }

  send() {
    this.opened = !this.opened;
    this.open.emit(this.opened);
  }

  ngOnInit(): void {}
}
