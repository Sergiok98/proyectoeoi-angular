import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER = `http://localhost:8080/`;

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getCartas(){
    return this.http.get(`${SERVER}cartas`);
  }
}
