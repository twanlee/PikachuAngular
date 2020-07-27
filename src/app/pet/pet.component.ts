import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petName = 'pikachu';
  petImage='https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png';
  updateName(name){
    this.petName = name;
  }
  updateImage(image){
    this.petImage = image;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
