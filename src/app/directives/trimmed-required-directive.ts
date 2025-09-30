import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
  selector: '[trimmedRequiredDirective]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TrimmedRequiredDirective),
      multi: true,
    }
  ],
})


export class TrimmedRequiredDirective implements Validator{


  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value == null || (typeof value === 'string' && value.trim().length === 0)) {
      return { required: true };
    }
    return null;
  }
}