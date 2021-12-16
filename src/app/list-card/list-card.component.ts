import { meal, GeneralResponse } from './../interfaces/meal';

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css'],
})
export class ListCardComponent implements OnInit {
  meals: meal[] = [];
  constructor(
    private api: ServiceService,
    private spinner: NgxSpinnerService
  ) {}
  Get() {
    this.api.GetMeal().subscribe(
      (generalResponse) => {
        //when send data
        this.meals = generalResponse.data;
      },
      () => {
        //error
      },
      () => {
        //when requeste done
        this.spinner.hide();
      }
    );
  }

  ngOnInit(): void {
    this.Get();
    this.spinner.show();
  }
}
