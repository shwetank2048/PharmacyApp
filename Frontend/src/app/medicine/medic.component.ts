import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from '@angular/common';
import { MedicService } from './medic.service';

import 'rxjs/add/operator/map';

@Component({
    templateUrl: './medic.component.html',
    styleUrls: ['./medic.component.css']
})
export class MedicComponent implements OnInit {
    id: any;
    medi:Object;

    constructor(private _medicService: MedicService, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });
        console.log("in show")
       this._medicService.getMedic(this.id)
        .subscribe((data)=>{
            console.log("medic res  ",data)
            this.medi=data;
    })
        
    }

    goBack(): void {
        this.location.back();
    }
}
