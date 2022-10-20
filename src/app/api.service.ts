import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = 'https://dummyjson.com';
  serchProdouct(prodouctList: any) {
    return this.h.get(`${this.url}/products/search?q=${prodouctList}`);
  }

  getProdoutsDetails(productid: any) {
    return this.h.get(`${this.url}/products/${productid}`);
  }
  registerUser(user:any){
    return this.h.post(`${this.url}/users/add`,user)
  }
  constructor(public h: HttpClient) {}
}
