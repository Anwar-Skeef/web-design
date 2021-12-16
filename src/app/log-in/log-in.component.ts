import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  newUser: string[];
  constructor(private router: Router) {}

  Login() {}
  Submit(name: string, password) {
    this.router.navigateByUrl('home');
    // if (localStorage.getItem('new')) {
    //   this.newUser = [input, ...this.newUser];
    // } else {
    //   this.newUser = [input];
    // }
    // localStorage.setItem('new', JSON.stringify(this.newUser));
  }
  ngOnInit(): void {}
}
