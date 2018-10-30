import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './about/about.component';
import { MedicsComponent } from './medicine/medics.component';
import { MedicComponent } from './medicine/medic.component';
import { AddMedicFormComponent } from './medicine/addMedic-form.component';
import { EditMedicFormComponent } from './medicine/editMedic-form.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'medics', component: MedicsComponent },
  { path: 'medics/:id', component: MedicComponent },
  { path: 'addMedic', component: AddMedicFormComponent},
  { path: 'editMedic/:id', component: EditMedicFormComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
