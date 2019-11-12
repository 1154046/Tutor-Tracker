import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-lecturer',
  templateUrl: './home-lecturer.page.html',
  styleUrls: ['./home-lecturer.page.scss'],
})
export class HomeLecturerPage implements OnInit {

  constructor( public alert: AlertController,
               public afAuth: AngularFireAuth,
               public router: Router) { }

  ngOnInit() {
  }

  // Tool Bar Methods
  home() {
    this.router.navigate(['home']);
  }

  feed() {
    this.router.navigate(['/tabs/feed']);
  }

  upload() {
    this.router.navigate(['/tabs/uploader']);
  }

  scan() {
    this.router.navigate(['lecturer-scan']);
  }

  download_timetable() {
    this.router.navigate(['admin-courses']);
  }

  make_payment() {
    this.router.navigate(['payment']);
  }

  profile() {
    this.router.navigate(['profile']);
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

}
