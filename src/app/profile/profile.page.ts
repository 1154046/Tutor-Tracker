import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../users.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
// tslint:disable:indent


@Component({
	selector: 'app-page',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	mainuser: AngularFirestoreDocument;
	userPosts;
	sub;
	posts;
	username: string;
	profilePic: string;

	// tslint:disable:align
	constructor( private afs: AngularFirestore,
				 private user: UserService,
				 private router: Router,
				 public alert: AlertController,
		     	 public afAuth: AngularFireAuth) {
		this.mainuser = afs.doc(`users/${user.getUID()}`);
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.posts = event.posts;
			this.username = event.username;
			this.profilePic = event.profilePic;
		});
	}

	  // Tool Bar Methods
	  home() {
		this.router.navigate(['home']);
	  }

	  feed() {
		this.router.navigate(['/tabs/feed']);
	  }

	  messages() {
		this.router.navigate(['messages']);
	  }

	  upload() {
		this.router.navigate(['/tabs/uploader']);
	  }

	  logout() {
		this.afAuth.auth.signOut()
		.then(res => {
				this.router.navigate(['login']);
				this.showAlert('GoodBye', 'See you soon. :)');
				// this.presentAlert();
			  });
	  }

	  async showAlert( subheader: string, message: string ) {
		const alert = await this.alert.create({
		  header: 'Tutor Tracker',
		  subHeader: subheader,
		  message,
		  buttons: ['Okay.']

		});
		await alert.present();
	  }

	// tslint:disable-next-line:use-lifecycle-interface
	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	goTo(postID: string) {

		this.router.navigate(['post' + postID.split('/')[0]]);
	}

	ngOnInit() {
	}

}
