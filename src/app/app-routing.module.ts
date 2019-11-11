import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'checkin', loadChildren: './checkin/checkin.module#CheckinPageModule' },
  { path: 'timetable', loadChildren: './timetable/timetable.module#TimetablePageModule' },
  { path: 'messages', loadChildren: './messages/messages.module#MessagesPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'payment', loadChildren: './payment/payment.module#PaymentPageModule' },
  { path: 'home-lecturer', loadChildren: './home-lecturer/home-lecturer.module#HomeLecturerPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'admin-courses', loadChildren: './admin-courses/admin-courses.module#AdminCoursesPageModule' },
  { path: 'lecturer-scan', loadChildren: './lecturer-scan/lecturer-scan.module#LecturerScanPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'feed', loadChildren: './feed/feed.module#FeedPageModule' },
  { path: 'post', loadChildren: './post/post.module#PostPageModule' },
  { path: 'uploader', loadChildren: './uploader/uploader.module#UploaderPageModule' },
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
