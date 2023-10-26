import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent {
  Affichage() {
    alert("Affichage");

    let myDiv = <HTMLElement>document.getElementById("xnom");
    myDiv.innerHTML = "Hello, World!";

    let myDiv2 = <HTMLElement>document.getElementById("xprenom");
    myDiv2.innerHTML = "Hello, World!";

    let myDiv3 = <HTMLElement>document.getElementById("xemail");
    myDiv3.innerHTML = "Hello, World!";

    let myDiv4 = <HTMLElement>document.getElementById("xmdp");
    myDiv4.innerHTML = "Hello, World!";

    let myDiv5 = <HTMLElement>document.getElementById("xmdp2");
    myDiv5.innerHTML = "Hello, World!";

    let myDiv6 = <HTMLElement>document.getElementById("xdate");
    myDiv6.innerHTML = "Hello, World!";

    let myDiv7 = <HTMLElement>document.getElementById("xadresse");
    myDiv7.innerHTML = "Hello, World!";

    let myDiv8 = <HTMLElement>document.getElementById("xville");
    myDiv8.innerHTML = "Hello, World!";

    



  }
}
