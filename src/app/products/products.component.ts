import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { ProductService } from '../services/product.service';
import { NewProductComponent } from './new-product/new-product.component';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    constructor(private productService: ProductService,
                private modalService: MDBModalService) { }

    modalRef: MDBModalRef;

    listProduct: any;
    loading: boolean = false;

    ngOnInit(): void {
        this.getProduct()

        // this.newProduct() 
    }

    getProduct(){
        this.loading = true;
        this.productService.getProducts().subscribe(data=>{
            this.listProduct = data;
            this.loading = false;
            console.log('->',this.listProduct)
            // this.checkPrice(data)
        },
        error=>{
            console.log(error)
            this.loading = false;
        })
    }

    newProduct(){
        this.modalRef = this.modalService.show(NewProductComponent, {
            // backdrop: 'static',
            // keyboard: false,
            keyboard: true,
            focus: true,
            show: true,
            ignoreBackdropClick: false,
            class: 'modal-dialog-centered modal-dialog',
            containerClass: '',
            animated: true,
            data:{
                title: 'Novo Produto',
                textButton: 'Salvar',
                isNew: true,
                isProduct: this.listProduct
            }
        })
        this.modalRef.content.action.subscribe( (result1: any) => { 
            if(result1 == 'yes'){
                this.getProduct()
            }
        });
    }

    convertMoney(money: any) {
		var formatter = new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		});
		return formatter.format(money);
    }
}

export interface Store{
    name: string;
    price: number;
}