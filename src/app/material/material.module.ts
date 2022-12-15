import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


const material=[
  MatToolbarModule,
  MatIconModule,
  MatCardModule
]

@NgModule({
  exports: [material],
  imports: [
   material
  ]
})
export class MaterialModule { }
