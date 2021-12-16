import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() opened: boolean;
  date: Date;
  // width: string;
  constructor() {
    this.date = new Date();
  }

  ngOnInit(): void {
    // console.log(this.opened);
    // if (this.opened) {
    //   this.width = 'calc(100% - 250px)';
    // } else {
    //   this.width = '100%';
    // }
  }
}
