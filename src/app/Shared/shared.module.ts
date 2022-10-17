import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { InternalservererrorComponent } from './Components/internalservererror/internalservererror.component';
import { AccessdeniedComponent } from './Components/accessdenied/accessdenied.component';
import { StructureDirective } from './Directives/structure.directive';
import { StructurePipe } from './Pipes/structure.pipe';
import { MaterialModule } from './Modules/material.module';

const Components = [
  PagenotfoundComponent,
  InternalservererrorComponent,
  AccessdeniedComponent,
  StructureDirective,
  StructurePipe
];

const Modules = [
  MaterialModule
];

@NgModule({
  declarations: [
    Components
  ],
  imports: [
    CommonModule,
    Modules
  ],
  exports: [
    Components,
    Modules
  ]
})
export class SharedModule { }
