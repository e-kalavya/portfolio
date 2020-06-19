// import { AngularFireModule } from "angularfire2";
// import { AngularFirestoreModule } from "angularfire2/firestore";
import { VisitorInfoComponent } from "./../../components/visitor-info/visitor-info.component";
import { ProfileAcademicComponent } from "./../../components/profile-academic/profile-academic.component";
import { ShrinkableMatListDirective } from "./../../directives/shrinkable-mat-list.directive";
import { ProfileVideoComponent } from "./../../components/profile-video/profile-video.component";
import {
  TranslateModule,
  TranslateDirective,
  TranslatePipe,
} from "@ngx-translate/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { MaterialModule } from "./../material/material.module";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { HttpModule } from "@angular/comm";
// import { NgxCarouselModule } from 'ngx-carousel';
// import { RouterModule } from "@angular/router";
import { ProfileComponent } from "../../components/profile/profile.component";
import "hammerjs";
import { ProfileHomeComponent } from "../../components/profile-home/profile-home.component";
import { ProfileExperienceComponent } from "../../components/profile-experience/profile-experience.component";
import { ProfileRoutes } from "../routing/profile";
import { ProfileContactComponent } from "../../components/profile-contact/profile-contact.component";
import { ClipboardModule } from "ngx-clipboard";
import { ProfileCertificationsComponent } from "../../components/profile-certifications/profile-certifications.component";
import { ProfileProjectsComponent } from "../../components/profile-projects/profile-projects.component";
import { ProfileProjectInfoComponent } from "../../components/profile-project-info/profile-project-info.component";
import { ProfileAddressOnMapComponent } from "../../components/profile-address-on-map/profile-address-on-map.component";
// import { AgmCoreModule } from "@agm/core";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { environment } from "./../../../environments/environment";
import { ChatBotComponent } from "../../components/chat-bot/chat-bot.component";
import { ChatBotService } from "../../services/chat-bot.service";
import { PrimeNgModule } from "../prime-ng/prime-ng.module";
import { ChartModule } from "primeng/chart";
import { LangSelectComponent } from "../../components/lang-select/lang-select.component";
import { ProfileService } from "../../services/profile.service";
import { ProjectsSortPipe } from "../../pipes/projects-sort.pipe";
import { NihongoAnkiComponent } from "../../components/nihongo-anki/nihongo-anki.component";
import { VocabService } from "../../services/vocab.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    // NgxCarouselModule,
    ClipboardModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpModule,
    // RouterModule.forChild(ProfileRoutes)
    // RouterModule.forRoot(ProfileRoutes),
    // AgmCoreModule.forRoot({
    //   apiKey: environment.googleMapConfig.apiKey,
    // }),
    PrimeNgModule,
    ChartModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule.enablePersistence()
  ],
  declarations: [
    ProfileComponent,
    ProfileVideoComponent,
    ShrinkableMatListDirective,
    ProfileHomeComponent,
    ProfileExperienceComponent,
    ProfileAcademicComponent,
    ProfileContactComponent,
    ProfileCertificationsComponent,
    ProfileProjectsComponent,
    ProfileProjectInfoComponent,
    ProfileAddressOnMapComponent,
    ChatBotComponent,
    LangSelectComponent,
    ProjectsSortPipe,
    VisitorInfoComponent,
    NihongoAnkiComponent,
  ],
  exports: [
    ProfileComponent,
    ProfileVideoComponent,
    ShrinkableMatListDirective,
    // NgxCarouselModule,
    ProfileHomeComponent,
    ProfileExperienceComponent,
    ProfileAcademicComponent,
    ProfileContactComponent,
    ProfileCertificationsComponent,
    RouterModule,
    ClipboardModule,
    // ReactiveFormsModule,
    ChartModule,
  ],
  providers: [MediaMatcher, ChatBotService, ProfileService, VocabService],
  entryComponents: [
    ProfileVideoComponent,
    ProfileProjectInfoComponent,
    ChatBotComponent,
    VisitorInfoComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileModule {}
