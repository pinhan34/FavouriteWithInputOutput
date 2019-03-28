import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TweetlikeComponent } from './tweetlike/tweetlike.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetlikeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,TweetlikeComponent]
})
export class AppModule { }
