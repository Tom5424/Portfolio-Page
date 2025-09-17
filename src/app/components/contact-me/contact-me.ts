import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, NgClass],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss'
})


export class ContactMe {
  contactForm: { name: string, email: string, message: string, checkboxPrivacyPolicy: boolean } = { name: '', email: '', message: '', checkboxPrivacyPolicy: false };


  submitForm(contactForm: NgForm): void {
    if (contactForm.valid) {
      this.contactForm = contactForm.value;
      contactForm.resetForm();
    }
  }
}