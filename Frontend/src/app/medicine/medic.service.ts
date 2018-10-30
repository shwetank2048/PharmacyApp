import { Injectable} from '@angular/core';
import { Init } from "./initial-medic";
import  {Http,Response,Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable()
export class MedicService extends Init {
  private mediList=[];
  private mediCount;
  constructor(private http:Http) {
    super();
    //console.log("Initializing Medical service ...");
  }

  /* getMedicCount() {
    this.mediList = JSON.parse(localStorage.getItem('medics'));
    return this.mediList.length;
  } */

  getMedics() {
    return this.http.get("http://localhost:3000")
      .map((response:Response)=>{
        const medicines=response.json() ;
        this.mediList=medicines.list;
        console.log('getmedics  ',this.mediList)
        return this.mediList;

      })
  }

  getMedic(id) {
    return this.http.get("http://localhost:3000/"+id)
    .map((response:Response)=>{
      console.log("idres  ",response)
      const medicines=response.json() ;
      console.log('value ',medicines.obj[0])
       return  medicines.obj[0];
      })
      
     
  }

addMedic(newMedic: any) {
    //let medi = JSON.parse(localStorage.getItem('medics'));
  console.log("In add medic");
    this.mediList.push(newMedic);
    
    const headers=new Headers({'Content-Type':'application/json'});
    const body=JSON.stringify(newMedic);
    return this.http.post("http://localhost:3000/create",body,{headers:headers})
      .map((response:Response)=>response.json())
      .catch((error:Response)=>Observable.throw(error));
      
  }

  updateMedic(updatedMedi: any) {
    for (let i = 0; i < this.mediList.length; i++) {
      if (this.mediList[i].id == updatedMedi.id) {
        this.mediList[i] = updatedMedi;
      }
    }
    const headers=new Headers({'Content-Type':'application/json'});
    const body=JSON.stringify(updatedMedi);
    
    return this.http.post("http://localhost:3000/edit/"+updatedMedi.id,body,{headers:headers})
      .map((response:Response)=>response.json());
    
  }

  deleteMedic(id) {
    this.mediList.splice(this.mediList.indexOf(id),1);
    return this.http.get("http://localhost:3000/delete/"+id)
    .map((response:Response)=>{
      const medicines=response.json() ;
       this.mediList=medicines.list;
       return this.mediList;
    })
}
}