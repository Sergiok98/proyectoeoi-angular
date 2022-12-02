import { Component, OnInit } from '@angular/core';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {
  cartas:any;
  todas:any;
  filtro:string = "";
  seleccionadas:any = [];
  seleccionadasExtra:any = [];
  seleccionadasSide:any = [];
  popperclick = NgxPopperjsTriggers.hover;
  popperPlace = NgxPopperjsPlacements.AUTO;
  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.getCartas();
    let storage = localStorage.getItem("seleccionadas");
    if (storage) this.seleccionadas = JSON.parse(storage);
  }

  getCartas(){
    this.backend.getCartas().subscribe((cartas:any) => {
      this.todas = cartas;
      this.paginar(1);
    });
  }

  paginar(pagina:number){
    this.cartas = this.todas.slice((pagina-1)*1000, pagina*1000);
  }

  add(carta:any){
    this.seleccionadas.push(carta);
    localStorage.setItem("seleccionadas", JSON.stringify(this.seleccionadas));
  }

  deleteCarta(i: number) {
    this.seleccionadas.splice(i, 1);
  }

  addExtra(carta:any){
    this.seleccionadasExtra.push(carta);
  }

  deleteCartaExtra(i: number) {
    this.seleccionadasExtra.splice(i, 1);
  }
  addSide(carta:any){
    this.seleccionadasSide.push(carta);
  }

  deleteCartaSide(i: number) {
    this.seleccionadasSide.splice(i, 1);
  }

  /*enviar(i:number) {
    console.log(this.seleccionadas[i]);
  }*/
}
