import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import {AboutComponent} from './about/about.component';
import { MedicsComponent } from './medicine/medics.component';
import { MedicComponent } from './medicine/medic.component';
import { AddMedicFormComponent } from './medicine/addMedic-form.component';
import { EditMedicFormComponent } from './medicine/editMedic-form.component';
import { MedicFilterPipe } from './medicine/medics-filter.pipe';
import { MedicService } from './medicine/medic.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, AboutComponent, MedicsComponent, MedicComponent, AddMedicFormComponent, EditMedicFormComponent, MedicFilterPipe, HeaderComponent ],
  providers: [ MedicService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
