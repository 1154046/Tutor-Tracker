import { Component, OnInit } from '@angular/core';
// import { BarcodeScanner} from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';
// import { BarcodeScanner} from '@ionic-native/barcode-scanner';
// import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.page.html',
  styleUrls: ['./checkin.page.scss'],
})
export class CheckinPage implements OnInit {
  qrcode: string;
  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor( public router: Router,
               public afAuth: AngularFireAuth,
               public alert: AlertController) {}


  ngOnInit() {
  }

 // Tool Bar Methods
  home() {
    this.router.navigate(['home']);
  }

  messages() {
    this.router.navigate(['messages']);
  }

  logout() {
    this.afAuth.auth.signOut()
    .then(res => {
            this.router.navigate(['login']);
            this.showAlert('GoodBye', 'See you soon. :)');
            // this.presentAlert();
          });
  }



  async create_code() {
    if (this.qrData === null) {
      this.showAlert('Error', 'Please Enter a Valid Class.');
    }
    if (this.qrData.includes('COMS')) {
      this.createdCode = this.qrData;
    } else {
      this.showAlert('Error', 'Please Enter a Valid Class.');
    }
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
