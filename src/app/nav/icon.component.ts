import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent implements OnInit {
  @Input() opened: boolean;
  @Output() open: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}
  send() {
    this.opened = !this.opened;
    this.open.emit(this.opened);
  }
  ngOnInit(): void {}
}
