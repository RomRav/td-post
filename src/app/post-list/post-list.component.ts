import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;

  date = new Date();


  constructor() { }

  ngOnInit() {
  }

  statusPostLikPos() {

    if (this.postLoveIts < 0) {
      return false;
    } else if (this.postLoveIts > 0) {
      return true;
    }
  }

  statusPostLikNeg() {

    if (this.postLoveIts > 0) {
      return false;
    } else if (this.postLoveIts < 0) {
      return true;
    }
  }


  changePostLoveIts(LoveChanger) {
    this.postLoveIts = this.postLoveIts + LoveChanger;
    console.log(this.postLoveIts);
  }


}
