import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../../models/product';
// service
import { ProductService } from '../../../services/product.service';
// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-jueves',
  templateUrl: './jueves.component.html',
  styleUrls: ['./jueves.component.css']
})
export class JuevesComponent implements OnInit {
  productList: Product[]; 
  usuario: any;
  mostrarOtros:false;
   
    constructor( private productService: ProductService,
      private modalService: NgbModal,
      private toastr: ToastrService) { }
    closeResult = '';
  
    ngOnInit() {
              return this.productService.getProducts()
              .snapshotChanges().subscribe(item => {
                this.productList = [];
                item.forEach(element => {
                  let x = element.payload.toJSON();
                  x["$key"] = element.key;
                  this.productList.push(x as Product);
                });
              }); 
           }
  
    ver(usuario: any, modal){
      this.usuario = usuario;
      this.modalService.open(modal);
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
  
    selectedIdx = 0;

    selectItem(index):void {
        this.selectedIdx = index;
    } 

     
  onEdit(product: Product) {
    this.productService.selectedProduct = Object.assign({}, product);
    this.goToEdit();
  }
  
  goToEdit(){
    document.getElementById("bajando").scrollIntoView();
  }
 
}
