import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MedicService } from "./medic.service";

@Component({
  selector: 'editbook-form',
  templateUrl: './editMedic-form.component.html'
})
export class EditMedicFormComponent {
  
  constructor(private _medicService: MedicService, private route: ActivatedRoute, private router: Router) { }
  id: any;
  medi: any;
  
typeArray=["Capsule", "Tablet", "Syrup", "Gel"];

  ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
          this.id = +params['id'];
      });
      this._medicService.getMedic(this.id).subscribe((data)=>{this.medi=data});
     
  }

  onSubmit(formValue: any){
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    let updatedMedi = {
          id: this.medi.id,
          name: formValue.name,
          company: formValue.company,
          manufacturingDate: formValue.manufacturingDate,
          expiryDate: formValue.expiryDate,
          price: formValue.price,
          type:formValue.value
        };
console.log("edit ang ",updatedMedi)
    this._medicService.updateMedic(updatedMedi)
      .subscribe(
        data=>{
          console.log(JSON.stringify(data));
          this.router.navigate(['medics']);
        }
      );
    
  }
}
