import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NgForm} from '@angular/forms';

import { MedicService } from './medic.service';

@Component({
  selector: 'addMed-form',
  templateUrl: './addMedic-form.component.html'
})
export class AddMedicFormComponent {
 mediCount;
 id;
typeArray=["Capsule", "Tablet", "Syrup", "Gel"];
  constructor(private _medicService: MedicService, private router: Router) { }

  onSubmit(formValue: NgForm){
    this._medicService.getMedics().subscribe((data)=>{
      this.mediCount=data.length;
      let newMed = {
        id: this.mediCount + 1,
        name: formValue.value.name,
        company: formValue.value.company,
        manufacturingDate: formValue.value.manufacturingDate,
        expiryDate: formValue.value.expiryDate,
        price: formValue.value.price,
        type:formValue.value.type

        };
  this._medicService.addMedic(newMed)
    .subscribe(
      data=>{
        console.log(JSON.stringify(data));
        this.router.navigate(['medics']);
      },
      error=>console.log(error)
    );
      console.log('length is ',this.mediCount )
    });
        
  }
}
