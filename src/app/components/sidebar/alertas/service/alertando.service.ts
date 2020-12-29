 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AlertandoService {

  constructor(private _http:HttpClient) { }

  createUser(user){
     return this._http.post("http://localhost:3000/Employee", user);
  }
  getAllUser(){
    return this._http.get("http://localhost:3000/Employee")
  }
  getUser(id:number)
  {
    return this._http.get("http://localhost:3000/Employee/"+id)
  }
  updateUser(user){
    return this._http.put("http://localhost:3000/Employee/" +user.id, user)
  }
  deleteUser(user){
    return this._http.delete("http://localhost:3000/Employee/" +user.id)
  }
  

}