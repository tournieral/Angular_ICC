import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilEComponent } from './accueil-e/accueil-e.component';
import { ActuEComponent } from './actu-e/actu-e.component';



@NgModule({
  declarations: [AccueilEComponent, ActuEComponent],
  imports: [
    CommonModule
  ]
})
export class ExtranetModule { }
