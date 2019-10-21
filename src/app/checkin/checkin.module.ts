import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { CheckinPage } from './checkin.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


const routes: Routes = [
  {
    path: '',
    component: CheckinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckinPage]
})
export class CheckinPageModule {}
