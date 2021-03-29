import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Subject } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
    selector: 'app-new-product',
    templateUrl: './new-product.component.html',
    styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

    constructor(public modalRef: MDBModalRef,
                private storeService: StoreService,
                private productService: ProductService) { }
    action: Subject<any> = new Subject();
    loading: boolean = true;

    title: string = '';
    textButton: string = '';
    isNew: boolean;

    list_store: any;

    id: number;
    name: string = '';
    description: string;
    image: string;
    price: number;
    parceled: number;
    plots: number;
    url: string;
    dateCreate: string;
    dateUpdate: string;

    product: Product
    store: Store
    
    isProduct: any;

    ngOnInit(): void {
        this.getStore()
        this.name = 'gui'
        console.log(this.isNew)

        if(this.isNew == true){
            this.id = this.isProduct.length+1;
            this.dateCreate = this.getDateDay();
        }
        else{
           
        }

        this.dateUpdate = this.getDateDay();
        this.loading = false;
    }

    getDateDay(){
        var date = new Date()
        var day = date.getDate()
        var month = date.getMonth()+1
        var year = date.getFullYear()
        var dateSend = day+'/'+month+'/'+year;

        if(month < 10 ){
            var aux = ("0" + month).slice(-2);
            dateSend = day+'/'+aux+'/'+year;
        }
        return dateSend
    }

    getStore(){
        this.storeService.getStores().subscribe( data=> {
            this.list_store = data;
            // console.log(this.list_store)
        },
        error=>{
            console.log(error)
        })
    }

    selectStore(obj: any){
        console.log(obj)
        this.store = obj;
        console.log(this.id)

    }

    saveNew(){
        console.log()

        var check = true
        // if(check){
        //     this.productService.newProduct(this.product).subscribe(data=>{
        //         console.log(data)
        //     },
        //     error=>{
        //         console.log(error)
        //     })
        // }
        this.action.next('yes');
        this.modalRef.hide();
    }

    doHide() {
        this.modalRef.hide();
    }
}

export interface Product{
    id: number,
    name: string,
    image: string,
    description: string,
    store: any,
    dateCreate: string,
    dateUpdate: string,
}

export interface Store{
    id: number,
    name: string,
    price: number,
    parceled: number,
    plots: number,
    url: string,
    dateCreate: string,
    dateUpdate: string,
    status: string,
}
