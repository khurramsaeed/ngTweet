import {Component, OnInit} from '@angular/core';
import {TweetService} from './tweet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  tweets: any[];

  constructor(private tweetService: TweetService) {

  }

  ngOnInit(): void {
    this.tweets = this.tweetService.getTweets();
  }

  onLikeSelectedUp(totalLikes: number, iLike: boolean) {

  }
}
