import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './nav/icon.component';
import { MenuComponent } from './button-menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainListComponent } from './list-sidebar/main-list.component';
import { SwitchBtnComponent } from './switch-btn/switch-btn.component';
import { ListCardComponent } from './list-card/list-card.component';
import { WaitingComponent } from './waiting/waiting.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ListenerDirective } from './Directives/listener.directive';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    IconComponent,
    MenuComponent,
    FooterComponent,
    MainListComponent,
    SwitchBtnComponent,
    ListCardComponent,
    WaitingComponent,
    ListenerDirective,
    LogInComponent,
    HomeComponent,
    SignUpComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatButtonModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
