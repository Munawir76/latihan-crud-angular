import { Component } from '@angular/core';
import { GetService } from 'src/app/services/get.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
title = 'apidata';
newdata:any;
constructor(private apiservie:GetService){}

ngOnInit(){
this.apiservie.getData().subscribe(respons => {
  this.newdata = respons
  console.log('ini respon api data', this.newdata.data)
})

}
}
