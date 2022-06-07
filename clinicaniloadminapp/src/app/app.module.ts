import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { AppntsComponent } from './components/appnts/appnts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { PatientsComponent } from './components/patients/patients.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

//firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';

//primeng
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    DashboardComponent,
    FooterComponent,
    PatientsComponent,
    AppntsComponent,
    ProfileComponent,
    WelcomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),

    //primeng
    AutoCompleteModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
    PasswordModule,
    ScrollPanelModule,
    SpeedDialModule,
    SplitButtonModule,
    TableModule,
    TabViewModule,
    ToolbarModule,
    VirtualScrollerModule,
    provideAnalytics(() => getAnalytics()),
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
