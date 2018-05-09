import { Injectable } from '@angular/core';

const INIT_CREDIT = 100;
const INIT_POPULARITY = 20;
const INTERVAL = 1000; // en ms

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  credit: number;
  popularity: number;
  date: Date;

  constructor() {
    this.load();
    window.setInterval(() => this.popularityToCredit(this.date), INTERVAL);
  }

  load() {
    /*this.storage.get('ressource').then((ressourceString) => {
      if (ressourceString) {
        const ressource = JSON.parse(ressourceString);
        this.credit = ressource.credit;
        console.log('credit', this.credit);
        this.popularity = ressource.popularity;
        console.log('popularity', this.popularity);
        this.popularityToCredit(new Date(ressource.date));
      } else {
        this.reset();
      }
    });*/
    this.reset();
  }

  popularityToCredit(previousDate: Date) {
    const newDate = new Date();
    const seconds = (newDate.getTime() - previousDate.getTime()) / 1000;
    console.log('seconds', seconds);
    // si le jour et l'heure sont les même, on ne change pas la popularité
    // si le jour et le même et qu'il y a 1 h de différence, on diminue la popularité avant le calcul du credit
    // si il y a une grosse différence, on recalcule la popularité et le crédit heure par heure.
    this.credit += seconds * this.popularity / 20; // TODO: changer l'algo de generation du credit
    this.date = newDate;
    this.save();
  }

  save() {
    const ressource = {
      credit: this.credit,
      popularity: this.popularity,
      date: this.date
    };
    const ressourceString = JSON.stringify(ressource);
    // this.storage.set('ressource', ressourceString);
  }

  reset() {
    this.credit = INIT_CREDIT;
    this.popularity = INIT_POPULARITY;
    this.date = new Date();
  }
}
