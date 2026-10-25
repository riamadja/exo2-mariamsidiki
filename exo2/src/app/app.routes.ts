import { Routes } from '@angular/router';
import {Accueil} from './accueil/accueil';
import  {Liste} from './liste/liste';
import {Gestion} from './gestion/gestion';
import {Contact} from './contact/contact';
import {Erreur404} from './erreur-404/erreur-404'


export const routes: Routes = [
  {path:'accueil', component:Accueil},
  {path:'liste',component:Liste},
  {path: 'gestion',component:Gestion},
  {path:'contact',component:Contact},
  {path:'',redirectTo:'acceuil',pathMatch:'full'},
  { path: '**', component: Erreur404 }

];
