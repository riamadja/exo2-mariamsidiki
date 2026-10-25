import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  imports: [CommonModule], //pour le @if dans le HTML
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss',
})
export class Gestion {
  dernierContact: any = null;

  // On récupère les données du service dès que le composant s'affiche
  constructor(private contactService: ContactService, private router:Router) {
    this.dernierContact = this.contactService.dernierContact;
    if (!this.dernierContact) {
      this.router.navigate(['/404']);}
  }
}
