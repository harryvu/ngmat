import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule
} from '@angular/material';

@NgModule({
  exports: [
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class AppMaterialModule {}
