import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../users.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
// tslint:disable: indent
// tslint:disable: deprecation
// tslint:disable: use-lifecycle-interface
// tslint:disable: no-shadowed-variable

@Component({
	selector: 'app-edit-profile',
	templateUrl: './edit-profile.page.html',
	styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

	mainuser: AngularFirestoreDocument;
	sub;
	username: string;
	profilePic: string;

	password: string;
	newpassword: string;

	busy = false;

	@ViewChild('fileBtn', null) fileBtn: {
		nativeElement: HTMLInputElement
	};

	constructor(
		private http: Http,
		private afs: AngularFirestore,
		private router: Router,
		private alertController: AlertController,
		private user: UserService,
		public afAuth: AngularFireAuth,
		public alert: AlertController) {
		this.mainuser = afs.doc(`users/${user.getUID()}`);
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.username = event.username;
			this.profilePic = event.profilePic;
		});
	}

	ngOnInit() {
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	updateProfilePic() {
		this.fileBtn.nativeElement.click();
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

	//   async presentAlert() {
	// 	const alert = await this.alert.create({
	// 	  header: 'Alert',
	// 	  subHeader: 'Subtitle',
	// 	  message: 'This is an alert message.',
	// 	  buttons: ['OK']
	// 	});

	// 	await alert.present();
	//   }

	uploadPic(event) {
		const files = event.target.files;

		const data = new FormData();
		data.append('file', files[0]);
		data.append('UPLOADCARE_STORE', '1');
		data.append('UPLOADCARE_PUB_KEY', 'c9db67f6afda68817118');

		this.http.post('https://upload.uploadcare.com/base/', data)
		.subscribe(event => {
			const uuid = event.json().file;
			this.mainuser.update({
				profilePic: uuid
			});
		});
	}

	// tslint:disable-next-line:adjacent-overload-signatures
	async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		});

		await alert.present();
	}

	async updateDetails() {
		this.busy = true;

		if (!this.password) {
			this.busy = false;
			return this.presentAlert('Error!', 'You have to enter a password');
		}

		try {
			await this.user.reAuth(this.user.getUsername(), this.password);
		} catch (error) {
			this.busy = false;
			return this.presentAlert('Error!', 'Wrong password!');
		}

		if (this.newpassword) {
			await this.user.updatePassword(this.newpassword);
		}

		if (this.username !== this.user.getUsername()) {
			await this.user.updateEmail(this.username);
			this.mainuser.update({
				username: this.username
			});
		}

		this.password = '';
		this.newpassword = '';
		this.busy = false;

		await this.presentAlert('Done!', 'Your profile was updated!');

		this.router.navigate(['profile']);
	}

}
