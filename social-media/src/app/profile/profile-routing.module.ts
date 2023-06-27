import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePhotoComponent } from './components/dashboard/photos/profile/profile-photo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TimelineComponent } from './components/dashboard/timeline/timeline.component';
import { AboutComponent } from './components/dashboard/about/about.component';
import { FollowersComponent } from './components/dashboard/followers/followers.component';
import { FollowingComponent } from './components/dashboard/following/following.component';
import { PhotosComponent } from './components/dashboard/photos/photos.component';
import { OverviewComponent } from './components/dashboard/about/overview/overview.component';
import { WorkEducationComponent } from './components/dashboard/about/work-education/work-education.component';
import { PlacesLivedComponent } from './components/dashboard/about/places-lived/places-lived.component';
import { ContactComponent } from './components/dashboard/about/contact/contact.component';
import { DetailsComponent } from './components/dashboard/about/details/details.component';
import { CoverComponent } from './components/dashboard/photos/cover/cover.component';
import { OtherComponent } from './components/dashboard/photos/other/other.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const routes: Routes = [{
  path: 'dashboard', component: DashboardComponent, children: [
    { path: 'timeline', component: TimelineComponent },
    {
      path: 'about', component: AboutComponent, children: [
        { path: 'overview', component: OverviewComponent },
        { path: 'work-education', component: WorkEducationComponent },
        { path: 'places-lived', component: PlacesLivedComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'details', component: DetailsComponent },
      ]
    },
    { path: 'followers', component: FollowersComponent },
    { path: 'following', component: FollowingComponent },
    {
      path: 'photos', component: PhotosComponent, children: [
        { path: 'profile', component: ProfilePhotoComponent },
        { path: 'cover', component: CoverComponent },
        { path: 'others', component: OtherComponent },
      ]
    },
  ]
},
{ path: 'edit-profile', component: EditProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
