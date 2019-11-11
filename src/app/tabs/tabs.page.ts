import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
// import { userInfo } from 'os';
import { UserService } from '../users.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
// tslint:disable:indent

export class TabsPage implements OnInit {

	@ViewChild('tabs', null) tabs: IonTabs;
	tabtype = '';

	// tslint:disable:align
	constructor( public router: Router,
				 public afAuth: AngularFireAuth,
				 public alert: AlertController,
				 public user: UserService
				 ) {
					// tslint:disable-next-line:variable-name
					const _type = this.user.getUsername();
					if (_type.includes('students')) {
						this.tabtype = 'home';
					} else {
						this.tabtype = 'home-lecturer';
					}
				  }

	ngOnInit() {
		this.tabs.select('feed');
	}

	home() {
		const usertype = this.user.getUsername();
		if (usertype.includes('students')) {
			this.router.navigate(['home']);
		} else {
			this.router.navigate(['home-lecturer']);
		}
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

}
