import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";
@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  constructor() { }

  public fecha: any;
  ngOnInit() {
    this.fecha = new Date();
     
    $(".mifecha").css('color', 'gray'); 
  }

}
