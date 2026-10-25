import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.scss',
})
export class Liste {

  films = [
    { titre: 'Sense and Sensibility', affiche: 'senseandsensibility.png' },
    { titre: 'Pride and Prejudice', affiche: 'prideandprejudice.png' },
    { titre: 'Persuasion', affiche: 'persuasion.png' },
    { titre: 'Charlie et la chocolaterie', affiche: 'charlieetlachocolaterie.png' },
    { titre: 'Titanic', affiche: 'titanic.png' }
  ];


  filmSelectionne:any=null;

  selectionnerFilm(film:any){
    this.filmSelectionne = film;
  }
}
