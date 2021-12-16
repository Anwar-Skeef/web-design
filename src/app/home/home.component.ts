import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  typeMode: boolean;
  opened: boolean;

  constructor() {
    this.opened = true;
  }
  public get width() {
    return window.innerWidth;
  }

  ngOnInit() {
    if (this.width <= 375) {
      this.typeMode = true;
      this.opened = false;
    } else {
      this.typeMode = false;
    }
  }
}
