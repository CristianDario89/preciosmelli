import { Component, OnInit } from '@angular/core';

// model
import { Product } from '../../../models/product';

// service
import { ProductService } from '../../../services/product.service';

// toastr
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) { }

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
 

  onEdit(product: Product) {
    this.productService.selectedProduct = Object.assign({}, product);
    this.goToEdit();
  }

  onDelete($key: string) {
    if(confirm('Estas seguro que desea borrar este cliente?')) {
      this.productService.deleteProduct($key);
      this.toastr.warning('Borrado Exitosamente', 'Cliente borrado');
    }
  }

  goToEdit(){
    document.getElementById("bajando").scrollIntoView();
  }

}