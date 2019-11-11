import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
// import { auth } from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // tslint:disable: variable-name

  constructor( public router: Router,
               public afAuth: AngularFireAuth,
               public alert: AlertController) {}

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

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  // Cards Methods

  checkin() {
    this.router.navigate(['checkin']);
  }

  download_timetable() {
    this.router.navigate(['timetable']);
  }

  req_payment() {
    this.router.navigate(['payment']);
  }

  profile() {
    this.router.navigate(['profile']);
  }

}

// Testing
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { TabsPage } from './tabs.page';

// describe('TabsPage', () => {
//   let component: TabsPage;
//   let fixture: ComponentFixture<TabsPage>;

//   beforeEach(async () => {
//     TestBed.configureTestingModule({
//       declarations: [TabsPage],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TabsPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
