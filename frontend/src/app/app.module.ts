import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import   {EventService} from './event.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoutComponent } from './logout/logout.component';

import { FormsModule} from '@angular/forms';
import { AuthGuard} from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
   
  ],
  providers: [AuthService, AuthGuard, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
