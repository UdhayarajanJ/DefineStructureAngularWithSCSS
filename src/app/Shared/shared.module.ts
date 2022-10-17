import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { InternalservererrorComponent } from './Components/internalservererror/internalservererror.component';
import { AccessdeniedComponent } from './Components/accessdenied/accessdenied.component';
import { StructureDirective } from './Directives/structure.directive';
import { StructurePipe } from './Pipes/structure.pipe';



@NgModule({
  declarations: [
    PagenotfoundComponent,
    InternalservererrorComponent,
    AccessdeniedComponent,
    StructureDirective,
    StructurePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
