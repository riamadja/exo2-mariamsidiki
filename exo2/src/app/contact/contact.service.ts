import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  dernierContact: any = null;

  enregistrerContact(donnees: any) {
    this.dernierContact = donnees;
  }
}
