import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TimelineComponent } from './components/dashboard/timeline/timeline.component';
import { AboutComponent } from './components/dashboard/about/about.component';
import { FollowersComponent } from './components/dashboard/followers/followers.component';
import { FollowingComponent } from './components/dashboard/following/following.component';
import { PhotosComponent } from './components/dashboard/photos/photos.component';
import { OverviewComponent } from './components/dashboard/about/overview/overview.component';
import { WorkEducationComponent } from './components/dashboard/about/work-education/work-education.component';
import { ContactComponent } from './components/dashboard/about/contact/contact.component';
import { DetailsComponent } from './components/dashboard/about/details/details.component';
import { PlacesLivedComponent } from './components/dashboard/about/places-lived/places-lived.component';
import { CoverComponent } from './components/dashboard/photos/cover/cover.component';
import { OtherComponent } from './components/dashboard/photos/other/other.component';
import { ProfilePhotoComponent } from './components/dashboard/photos/profile/profile-photo.component';
import { LengthPipe } from './pipes/length.pipe';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    DashboardComponent,
    TimelineComponent,
    AboutComponent,
    FollowersComponent,
    FollowingComponent,
    PhotosComponent,
    OverviewComponent,
    WorkEducationComponent,
    ContactComponent,
    DetailsComponent,
    PlacesLivedComponent,
    CoverComponent,
    OtherComponent,
    ProfilePhotoComponent,
    LengthPipe,
    EditProfileComponent,

  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProfileModule { }
