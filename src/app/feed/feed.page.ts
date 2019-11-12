import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions} from '@angular/fire/functions';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  posts;

  constructor( private aff: AngularFireFunctions ) {

  }

  ngOnInit() {
    const getFeed = this.aff.httpsCallable('getFeed');
    this.posts = getFeed({});
  //   getFeed({}).subscribe(data => {
  //     console.log(data);
  //   });
  // }
  }
}
