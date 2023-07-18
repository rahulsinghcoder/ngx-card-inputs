import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CardInputComponent),
      multi: true
    }
  ]
})
export class CardInputComponent implements OnInit, ControlValueAccessor {

  @Input() length: number = 8;
  @Input() separator: string = ' ';
  @Input() separatorIndex: number = 4;
  @Input() placeholder: string = 'Card Number';
  @Input() cardType: string = 'visa'; //mastercard or amex
  @Input() class: string = ''; //mastercard or amex

  excludedKeys = [8, 37, 39, 46, 9, 13];
  keyCode!: number;

  private _value!: string;
  maxLength!: number;
  separatorLength!: number;

  get value() {
    return this._value;
  }

  set value(v: string) {
    if (v != this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  constructor() {

  }

  onChange(v: string) {
  };

  onTouched(v: string) {
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
    this.separatorLength = this.separator.length;

    if (this.cardType == 'visa' || this.cardType == 'mastercard') {
      this.placeholder = `XXXX${this.separator}XXXX${this.separator}XXXX${this.separator}XXXX`
      this.length = 16
      this.maxLength = this.length + 3 * this.separatorLength;
    }
    else if (this.cardType == 'amex') {
      this.placeholder = `XXXX${this.separator}XXXXXX${this.separator}XXXXX`
      this.length = 15
      this.maxLength = this.length + 2 * this.separatorLength;
    }
    else {
      this.maxLength = this.length + 3 * this.separatorLength;
    }
  }


  countSeparator() {

  }

  onNumberEnter(event: any) {

    if (this._value != undefined) {
      // console.log(68, this._value)
      console.log(event)

      this.keyCode = event.keyCode;
      if (!((this.keyCode >= 48 && this.keyCode <= 57) || (this.keyCode >= 96 && this.keyCode <= 105) || (this.excludedKeys.includes(this.keyCode)))) {
        event.preventDefault()
      }
      else {
        if (((this.keyCode >= 48 && this.keyCode <= 57) || this.keyCode == 190) && event.shiftKey) {
          event.preventDefault()
        }
        else {

          if (this.cardType == 'visa' || this.cardType == 'mastercard') {

            if (event.key == 'Backspace') {

              if (this._value.trim().length != 0 && this._value.charAt(this._value.trim().length - 2) == this.separator) {
                // console.log('event', `'${this._value}'`)
                this._value = this._value.substring(0, this._value.length - 1);
              }

            }
            else {

              if (this.keyCode != 37 && this.keyCode != 39 && this._value.trim().length != 0 && (this._value.trim().replaceAll(this.separator, '').length % 4 == 0)) {
                if (this._value.replaceAll(this.separator, '').length < this.length)
                  this._value = this._value + this.separator;
              }

            }

          }
          else if (this.cardType == 'amex') {

            if (event.key == 'Backspace') {

              if (this._value.trim().length != 0 && this._value.charAt(this._value.trim().length - 2) == this.separator) {
                // console.log('event', `'${this._value}'`)
                this._value = this._value.substring(0, this._value.length - 1);
              }

            }
            else {

              if (this._value.trim().length != 0 && (this._value.trim().replaceAll(this.separator, '').length == 4 || this._value.trim().replaceAll(this.separator, '').length == 10)) {
                if (this._value.replaceAll(this.separator, '').length < this.length)
                  this._value = this._value + this.separator;
              }

            }
          }


        }
      }
    }
  }

}
