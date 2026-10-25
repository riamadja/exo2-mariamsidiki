import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private contactService:ContactService) {
    this.contactForm = this.fb.group({

      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      age: [''],
      hideEmail: [false],
      email: ['', [Validators.required, Validators.email]],
      commentaire: ['', Validators.required]
    });
  }

  onHideEmailChange() {
    const emailControl = this.contactForm.get('email');
    const isHidden = this.contactForm.get('hideEmail')?.value;

    if (isHidden) {

      emailControl?.clearValidators();
      emailControl?.setValue('');
    } else {
      // remet les validateurs si on redécoche
      emailControl?.setValidators([Validators.required, Validators.email]);
    }

    // validité globale du formulaire
    emailControl?.updateValueAndValidity();
    this.contactForm.updateValueAndValidity();
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.enregistrerContact(this.contactForm.value)
      alert('Le formulaire est valide');
      this.router.navigate(['/']);
    }
  }
}
