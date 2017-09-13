import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PageIntroComponent } from './page-intro/page-intro.component';
import { PageStartComponent } from './page-start/page-start.component';
import { PageBallooramaComponent } from './page-balloorama/page-balloorama.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageTechComponent } from './page-tech/page-tech.component';
import { PageFriendsComponent } from './page-friends/page-friends.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
    { path: '', redirectTo: 'start', pathMatch: 'full' },
    { path: 'intro', component: PageIntroComponent, data : { slideIndex : 3, animation: {value: 'hoch'}} },
    { path: 'start', component: PageStartComponent, data : { slideIndex : 3, animation: {value: 'runter'}} },
    { path: 'balloorama', component: PageBallooramaComponent, data : { slideIndex : 3, animation: {value: 'runter'}} },
    { path: 'about', component: PageAboutComponent, data : { slideIndex : 3, animation: {value: 'runter'}} },
    { path: 'tech-art', component: PageTechComponent, data : { slideIndex : 3, animation: {value: 'runter'}} },
    { path: 'friends-projects', component: PageFriendsComponent, data : { slideIndex : 3, animation: {value: 'runter'}} },
    { path: '**', redirectTo: 'start'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
