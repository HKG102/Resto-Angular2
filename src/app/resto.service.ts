import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url = "http://localhost:3000/restaurantsDetail";
  constructor(private http : HttpClient) { }

  getList(){

    return this.http.get(this.url);
  }

  saveResto(data){
   // console.warn(data);
    return this.http.post(this.url, data)
  }

  deleteResto(id){
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentResto(id){
    return this.http.get(`${this.url}/${id}`);
  }

  updateResto(id,data){
    return this.http.put(`${this.url}/${id}`,data);
  }

}
