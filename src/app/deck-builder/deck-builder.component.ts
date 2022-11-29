import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {
  cartas:any;

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.getCartas();
  }

  getCartas(){
    this.backend.getCartas().subscribe((cartas) => {
      this.cartas = cartas;
      //filtra alfabeticamnte , en este caso al comparar  por el nombre
      console.log(this.cartas);
    });
  }
}
