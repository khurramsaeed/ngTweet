import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import {LikeComponent} from './like/like.component';
import {TweetService} from './tweet.service';


@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
