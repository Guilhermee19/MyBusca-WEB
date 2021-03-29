import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Store } from '../models/store';

@Injectable({
     providedIn: 'root'
})
export class StoreService {

    url = 'http://localhost:3000/store'; // api rest fake

    // injetando o HttpClient
    constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    // Obtem todos os Stores
    getStores(): Observable<Store[]> {
        return this.httpClient.get<Store[]>(this.url)
        .pipe(retry(2),catchError(this.handleError))
    }

    // Obtem um Store pelo id
    getStoreId(id: number): Observable<Store> {
        return this.httpClient.get<Store>(this.url + '/' + id)
        .pipe(retry(2),catchError(this.handleError))
    }

    // salva um Store
    newStore(store: Store): Observable<Store> {
        return this.httpClient.post<Store>(this.url, JSON.stringify(store), this.httpOptions)
        .pipe(retry(2),catchError(this.handleError))
    }

    // utualiza um Store
    updateStore(store: Store): Observable<Store> {
        return this.httpClient.put<Store>(this.url + '/' + store.id, JSON.stringify(store), this.httpOptions)
        .pipe( retry(1), catchError(this.handleError))
    }

    // deleta um Store
    deleteStore(store: Store) {
        return this.httpClient.delete<Store>(this.url + '/' + store.id, this.httpOptions)
        .pipe( retry(1),catchError(this.handleError))
    }

    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        } 
        else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };

}
