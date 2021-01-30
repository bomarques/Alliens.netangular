import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient,  @Inject('BASE_URL') private baseUrl: string) { }

  get(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl + 'api/clientes');
  }
  getById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.baseUrl + 'api/clientes/'+id);
  }

  post(cliente: Cliente): Observable<Cliente[]> {
    return this.http.post<Cliente[]>(this.baseUrl + 'api/clientes', cliente);
  }
  put(cliente: Cliente): Observable<Cliente[]> {
    return this.http.put<Cliente[]>(this.baseUrl + 'api/clientes/'+cliente.id, cliente);
  }

  delete(id: number): Observable<Cliente[]> {
    return this.http.delete<Cliente[]>(this.baseUrl + 'api/clientes/'+id);
  }

}
