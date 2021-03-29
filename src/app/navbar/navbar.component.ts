import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor() { }

    showFiller = false;
    
    isColor: boolean = false;
    
    ngOnInit(): void {

    }

    checkNavbar(){
        this.showFiller = !this.showFiller;
        console.log(this.showFiller) 
    }

}
