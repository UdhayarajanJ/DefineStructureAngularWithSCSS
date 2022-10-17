import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
const MaterialModuleArray = [
  MatButtonModule,
  MatDividerModule,
  MatInputModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModuleArray
  ],
  exports: [
    MaterialModuleArray
  ]
})
export class MaterialModule { }
