import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {


  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='+ parametros.pais +'&category='+ parametros.categoria +'&apiKey=e903bad283e044188d405e74ad59a7c9';
    return this.http.get(URL);
  }
}
