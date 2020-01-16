import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  taches = [];
  newTache = '';

  constructor() {}

  onAddTache(){
    this.taches.push(this.newTache);
    this.newTache = "";
  }

  onDeleteIndex(index){
    this.taches.splice(index, 1);
  }
}
