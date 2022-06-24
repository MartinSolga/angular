import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zoobuch';

  animals : Animal [] = [
    {
      name: "Aldo",
      type: "Hund"  
    },
    {
      name: "Ben",
      type: "Bär"  
    },
    {
      name: "Schildi",
      type: "Schildkröte"  
    },
    {
      name: "Lala",
      type: "Strauss"  
    },
  ];

  newAnimal : Animal = {
    name : "New name",
    type : "New type"
  }

  deleteAnimal(animal: Animal) : void {
    this.animals = this.animals.filter(a => a != animal)
  }

  addAnimal() : void {
    this.animals.push(this.newAnimal)
  }
}
