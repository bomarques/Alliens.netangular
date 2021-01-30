import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient,  @Inject('BASE_URL') private baseUrl: string) { }

  get(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl + 'api/produtos');
  }

  getById(id: number): Observable<Produto> {
    return this.http.get<Produto>(this.baseUrl + 'api/produtos/'+id);
  }

  post(produto: Produto): Observable<Produto[]> {
    return this.http.post<Produto[]>(this.baseUrl + 'api/produtos', produto);
  }

  put(produto: Produto): Observable<Produto[]> {
    return this.http.put<Produto[]>(this.baseUrl + 'api/produtos/'+produto.id, produto);
  }

  delete(id: number): Observable<Produto[]> {
    return this.http.delete<Produto[]>(this.baseUrl + 'api/produtos/'+id);
  }

}
