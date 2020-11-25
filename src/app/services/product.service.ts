import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  
  getProducts()
  {
    return this.productList = this.firebase.list('monodatos');
  }

  insertProduct(product: Product)
  {
    this.productList.push({
      name: product.name,
      localidad: product.localidad,
      direccion: product.direccion,
      pago: product.pago,
      tipo: product.tipo,
      ruta: product.ruta,
      observacion: product.observacion,
      price: product.price
    });
  }

  updateProduct(product: Product)
  {
    this.productList.update(product.$key, {
      name: product.name,
      localidad: product.localidad,
      direccion: product.direccion,
      pago: product.pago,
      tipo: product.tipo,
      ruta: product.ruta,
      observacion: product.observacion,
      price: product.price
    });
  }

  deleteProduct($key: string)
  {
    this.productList.remove($key);
  }
}
