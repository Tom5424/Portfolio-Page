import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ValidationMessage } from '../validation-message/validation-message';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-me',
  imports: [ValidationMessage, FormsModule, NgClass],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss'
})


export class ContactMe {
  http: HttpClient = inject(HttpClient);
  contactForm: { name: string, email: string, message: string, checkboxPrivacyPolicy?: boolean } = { name: '', email: '', message: '', checkboxPrivacyPolicy: false };


  submitForm(contactForm: NgForm): void {
    if (contactForm.form.valid) {
      this.contactForm = contactForm.form.value;
      delete this.contactForm.checkboxPrivacyPolicy;
      this.postData(contactForm);
    }
  }


  postData(contactForm: NgForm): void {
    this.http.post('https://tom-petri.net/send-mail.php', JSON.stringify(this.contactForm), { headers: { 'Content-Type': 'text/plain' }, responseType: 'text' }).subscribe({
      next: (response) => {
        contactForm.resetForm();
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Message send');
      }
    });
  }


  showValidationMessages(control: NgModel): boolean | null {
    return control.touched && (control.valid || control.invalid)
  }


  formIsInvalid(contactForm: NgForm): boolean | null {
    return contactForm.invalid;
  }


  getButtonDisableOrEnableClass(contactForm: NgForm): string {
    return contactForm.invalid ? 'button-disable' : 'button-enable';
  }
}