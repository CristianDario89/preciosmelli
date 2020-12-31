import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertandoService } from '../../../sidebar/alertas/service/alertando.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
cliente:any;
ReadMore:boolean=true;
visible:boolean=false;
 
  constructor(private route:ActivatedRoute, private clienteSvc:AlertandoService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.clienteSvc.getUser(id).subscribe(u =>{
     
      this.cliente = u;
    });

   
 
  }
  onclick(){
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible;
  }

  
}
