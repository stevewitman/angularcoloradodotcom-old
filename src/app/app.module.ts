import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { NavComponent } from './nav/nav.component';
import { SplashComponent } from './splash/splash.component';
import { SlackComponent } from './slack/slack.component';
import { InviteService } from './slack/invite.service'
import { EventsComponent } from './events/events.component';
import { ItemFormComponent } from './items/item-form.component';
import { ItemService } from './items/item.service';
import { FooterComponent } from './footer/footer.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAWeEdfUqeWrrxxS1oU-r3Kk8XNuSAjwgQ",
    authDomain: "angularcolorado.firebaseapp.com",
    databaseURL: "https://angularcolorado.firebaseio.com",
    projectId: "angularcolorado",
    storageBucket: "angularcolorado.appspot.com",
    messagingSenderId: "606878939230"
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SplashComponent,
    SlackComponent,
    EventsComponent,
    ItemFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [InviteService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }