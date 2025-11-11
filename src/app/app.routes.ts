import { Routes } from '@angular/router';
import { MaterialsComponent } from './pages/materials/materials.component';
import { LoansComponent } from './pages/loans/loans.component';

export const routes: Routes = [
  { path: '', redirectTo: 'materials', pathMatch: 'full' },
  { path: 'materials', component: MaterialsComponent },
  { path: 'loans', component: LoansComponent }
];
