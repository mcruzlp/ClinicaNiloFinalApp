import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { PatientsComponent } from './components/patients/patients.component';
import { TopbarComponent } from './components/topbar/topbar.component';

//firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

//primeng
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { AppntsComponent } from './components/appnts/appnts.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    DashboardComponent,
    FooterComponent,
    PatientsComponent,
    AppntsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),

    //primeng
    AutoCompleteModule,
    ButtonModule,
    CardModule,
    DialogModule,
    DividerModule,
    InputNumberModule,
    InputTextModule,
    PanelModule,
    ScrollPanelModule,
    SpeedDialModule,
    SplitButtonModule,
    TableModule,
    TabViewModule,
    ToolbarModule,
    VirtualScrollerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
