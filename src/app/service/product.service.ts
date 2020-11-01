import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';

@Injectable({
    providedIn: 'root'
})


export class UserService {

    constructor(private http : HttpClient) { }

    
    getUserDetails(): Observable<any> {
        let options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };        
		return this.http.get<any>(AppConfig.path + "default/get_all_products_product_get/", options);
    }
    
}