import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMaterials() { return this.http.get(`${this.url}/materials`); }
  addMaterial(data: any) { return this.http.post(`${this.url}/materials`, data); }

  getLoans() { return this.http.get(`${this.url}/loans`); }
  createLoan(data: any) { return this.http.post(`${this.url}/loans`, data); }
  returnLoan(id: number) { return this.http.put(`${this.url}/loans/${id}/return`, {}); }
}
