// src/app/services/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7173/api/Contribuinte'; // Caminho para o arquivo JSON

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching users:', error);
        return of([]); // Retorna um array vazio em caso de erro
      })
    );
  }

  verifyUser(id: number, senha: string): Observable<boolean> {
    return this.getUsers().pipe(
      map(users => {
        console.log('Users:', users);  // Verifique os dados carregados
        const isValid = users.some((user: { id: number; senha: string; }) => user.id === id && user.senha === senha);
        console.log('Is Valid:', isValid);  // Verifique o resultado da verificação
        return isValid;
      }),
      catchError(error => {
        console.error('Error verifying user:', error);
        return of(false); // Retorna false em caso de erro
      })
    );
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}





