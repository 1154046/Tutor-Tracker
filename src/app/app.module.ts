import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import firebaseConfig from './firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { CheckinPipe } from './checkin.pipe';
// import { environment } from 'src/environments/environment';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AngularFirestore } from '@angular/fire/firestore';


import { HttpModule } from '@angular/http';
import { UserService } from '../app/users.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from '../app/auth.service';
import { ShareModule } from '../app/share/share.module';
import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFireAuthModule,
            // BarcodeScanner,
            NgxQRCodeModule,
            AngularFirestoreModule,
            // tslint:disable-next-line: deprecation
            HttpModule,
            ShareModule,
            AngularFireFunctionsModule
                            ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    AngularFirestore,
    UserService,
    AuthService,
    { provide: FunctionsRegionToken, useValue: 'us-central1' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
