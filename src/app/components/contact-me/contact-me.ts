import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ValidationMessage } from '../validation-message/validation-message';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";
import { TrimmedRequiredDirective } from '../../directives/trimmed-required-directive';


@Component({
  selector: 'app-contact-me',
  imports: [ValidationMessage, FormsModule, NgClass, RouterLink, TranslatePipe, TrimmedRequiredDirective],
  templateUrl: './contact-me.html',
  styleUrls: ['./contact-me.scss', './contact-me-media.scss']
})


export class ContactMe {
  http: HttpClient = inject(HttpClient);
  contactForm: { name: string, email: string, message: string, checkboxPrivacyPolicy?: boolean } = { name: '', email: '', message: '', checkboxPrivacyPolicy: false };
  feedbackIsDisplay: boolean = false
  isLoading: boolean = false;
  emailStatusMessage: string = '';
  messageColor: string = '';


  submitForm(contactForm: NgForm): void {
    if (contactForm.form.valid) {
      this.contactForm = contactForm.form.value;
      this.contactForm.name = this.contactForm.name.trim();
      this.contactForm.message = this.contactForm.message.trim();
      delete this.contactForm.checkboxPrivacyPolicy;
      this.postData(contactForm);
    }
  }


  postData(contactForm: NgForm): void {
    contactForm.form.controls['checkboxPrivacyPolicy'].markAsUntouched({ onlySelf: true }); // Prevents that the validation message from the checkbox are displayd after sending the email
    this.isLoading = true;
    this.http.post('https://tom-petri.net/send-mail.php', JSON.stringify(this.contactForm), { headers: { 'Content-Type': 'text/plain' }, responseType: 'text' }).subscribe({
      next: (response) => {
        contactForm.resetForm();
        this.displayFeedbackMessageSuccess(true, 'contactMe.feedbackBoxMessages.success');
      },
      error: (error) => {
        this.isLoading = false;
        contactForm.resetForm();
        this.displayFeedbackMessageError(true, 'contactMe.feedbackBoxMessages.error', error);
      },
      complete: () => {
        this.isLoading = false;
        setTimeout(() => this.feedbackIsDisplay = false, 2500);
      }
    });
  }


  displayFeedbackMessageSuccess(feedbackIsDisplayd: boolean, feedbackMessage: string): void {
    this.feedbackIsDisplay = feedbackIsDisplayd;
    this.emailStatusMessage = feedbackMessage;
    this.getSuccessOrErrorMessageClass(true);
  }


  getSuccessOrErrorMessageClass(isSuccessful: boolean): void {
    this.messageColor = isSuccessful ? 'success-message' : 'error-message';
  }


  displayFeedbackMessageError(feedbackIsDisplayd: boolean, feedbackMessage: string, error: any): void {
    console.error(error);
    this.feedbackIsDisplay = feedbackIsDisplayd;
    this.emailStatusMessage = feedbackMessage;
    this.getSuccessOrErrorMessageClass(false);
    setTimeout(() => this.feedbackIsDisplay = false, 2500);
  }


  showValidationMessages(control: NgModel): boolean | null {
    return control.touched && (control.valid || control.invalid);
  }


  formIsInvalid(contactForm: NgForm): boolean | null {
    return contactForm.invalid;
  }


  getButtonDisableOrEnableClass(contactForm: NgForm): string {
    return contactForm.invalid ? 'button-disable' : 'button-enable';
  }
}