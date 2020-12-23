import { Component, OnInit } from '@angular/core';
import { AlertandoService } from '../service/alertando.service';
@Component({
  selector: 'app-alerta-jueves',
  templateUrl: './jueves.component.html',
  styleUrls: ['./jueves.component.css']
})
export class AlertaJuevesComponent implements OnInit {
  title = 'myserver';
  allUser: Object;
  isEdit=false;

  userObj={
    name:'',
    telefono:'',
    cantidad:'',
    prestado:'',
    id:''
  }
  
  constructor(private commonService:AlertandoService){}
ngOnInit(){
  this.getLatestUser();
}

  addUser(formObj){
    console.log(formObj)
    this.commonService.createUser(formObj).subscribe((response)=>{
      this.getLatestUser();
    })
  }
  getLatestUser(){
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUser = response
    })
  }
  editUser(user){
    this.isEdit = true;
    this.userObj = user;
  }

  deleteUser(user){
    this.commonService.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }
  updateUser(){
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.getLatestUser();
    })
  }
}
