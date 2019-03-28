import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './tweetlike.component.html',
  styleUrls: ['./tweetlike.component.css']
})

export class TweetlikeComponent{

  @Input('likesCount') likesCount : number;
  @Input('isActive') isActive : boolean;
  @Output() change = new EventEmitter<boolean>();

  onClick(){
    this.isActive = !this.isActive;
    this.likesCount += (this.isActive) ? 1 : -1;
    this.change.emit(this.isActive);
  }

}
