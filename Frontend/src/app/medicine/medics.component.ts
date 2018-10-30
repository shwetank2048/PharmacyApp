import { Component, OnInit } from '@angular/core';
import { MedicService } from './medic.service';

@Component({
  selector: 'app-books',
  templateUrl: './medics.component.html',
  styleUrls: ['./medics.component.css']
})
export class MedicsComponent implements OnInit {
  mediList: any[];  

  constructor(private _medicService: MedicService) { }

  ngOnInit() {
    this._medicService.getMedics()
      .subscribe((medicines: any[])=>{

        this.mediList=medicines;
        console.log("medics oninit ",this.mediList);
      });

  }

  deleteMedi(mediId) {
    console.log("dele id = ",+mediId)
    this._medicService.deleteMedic(mediId)
    .subscribe((data)=>{
      console.log("del ts ",data)
      this.mediList=data;
});
     /*this._medicService.getMedics(
       .subscribe((medicines: any[])=>{
       this.medics=medicines;
     })
     );*/
  }
}
