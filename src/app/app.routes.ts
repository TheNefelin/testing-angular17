import { Routes } from '@angular/router';
import { PhoneComponent } from './components/phone/phone.component';
import { ValidateRutComponent } from './components/validate-rut/validate-rut.component';
import { CompPadreComponent } from './components/comp-padre/comp-padre.component';
import { ObservadorComponent } from './components/observador/observador.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "telefonos", component: PhoneComponent },
  { path: "rut", component: ValidateRutComponent },
  { path: "observable", component: ObservadorComponent },
  { path: "padre-hijo", component: CompPadreComponent },
];
