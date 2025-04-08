import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  submitted = false;

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Form Submitted!');
      this.contactForm.reset();
      this.submitted = false;
    }
  }
}
