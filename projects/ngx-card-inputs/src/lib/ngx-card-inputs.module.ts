import { NgModule } from '@angular/core';
import { CardInputComponent } from './card-input/card-input.component';
import { CardExpiryInputComponent } from './card-expiry-input/card-expiry-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardInputComponent,
    CardExpiryInputComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    CardInputComponent,
    CardExpiryInputComponent
  ]
})
export class NgxCardInputsModule { }
