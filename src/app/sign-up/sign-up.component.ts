import { Sign } from './../interfaces/meal';
import { ServiceService } from './../services/service.service';
import {
  Component,
  ElementRef,
  Injectable,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class SignUpComponent implements OnInit {
  constructor(private router: Router, private api: ServiceService) {}

  Submit(dataUser: Sign) {
    this.api.SaveData(dataUser).subscribe((data) => {
      console.log('this is respon' + JSON.stringify(data));
    });
    window.localStorage.setItem('dataUser', JSON.stringify(dataUser));
    this.router.navigateByUrl('home');
  }
  ngOnInit(): void {}
}
