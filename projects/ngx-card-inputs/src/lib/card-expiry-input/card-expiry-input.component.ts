import { Component, forwardRef, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-card-expiry-input',
  templateUrl: './card-expiry-input.component.html',
  styleUrls: ['./card-expiry-input.component.css'],
  providers: [
    {
       provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => CardExpiryInputComponent),
       multi: true
    }
  ]
})
export class CardExpiryInputComponent implements OnInit, ControlValueAccessor {

  @Input () placeholder: string = 'MM/YY';
  separator:string = '/';
  private _value!:string;

  excludedKeys = [8, 37, 39, 46, 9, 13];
  keyCode!:number;

  constructor() { }

  get value(){
    return this._value;
  }

  set value(v:string){
    if(v!=this._value){
      this._value = v;
      this.onChange(v);
    }
  }

  onChange(v:string){
  };

  onTouched(v:string){
  }

  writeValue(obj: any): void {
    this._value = obj;
    // throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  onNumberEnter(event:any){
    
    if(this._value != undefined){
      
      this.keyCode = event.keyCode;
      const value = event.key;
      if(!((this.keyCode>=48 && this.keyCode<=57) || (this.keyCode >= 96 && this.keyCode <= 105) || (this.excludedKeys.includes(this.keyCode)))){
        event.preventDefault()
      }
      else{
        if(((this.keyCode >= 48 && this.keyCode <= 57) || this.keyCode == 190) && event.shiftKey){
          event.preventDefault()
        }
        else{
          if(this.keyCode != 37 && this.keyCode != 39 && event.key != 'Backspace' && this._value.trim().length == 2){
            this._value = this._value + this.separator;
          }
          if(event.key == 'Backspace' && this._value.trim().length == 4){
            this._value = this._value.replace(this.separator,'');
          }
        }
      }

    }
  }


}
