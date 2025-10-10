import { Component, input } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-validation-message',
  imports: [],
  templateUrl: './validation-message.html',
  styleUrls: ['./validation-message.scss', './validation-message-media.scss']
})


export class ValidationMessage {
  ngModelControl = input<NgModel>();
  errorMessages = input<{ messageType: string; text: string }[]>([]);
  successMessages = input<{ messageType: string; text: string }[]>([]);


  formFieldIsTouched(control: NgModel | undefined): boolean | null | undefined {
    return control?.touched;
  }


  formFieldHasErrors(control: NgModel | undefined, errorMessage: { messageType: string; text: string }): boolean {
    return control?.errors?.[errorMessage.messageType];
  }


  formFieldIsValid(control: NgModel | undefined): boolean | null | undefined {
    return control?.valid;
  }
}