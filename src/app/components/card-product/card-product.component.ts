import { Component } from '@angular/core';
import { GetService } from 'src/app/services/get.service';
import { ConvertRupiah } from 'src/app/helper/conver-rupiah';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  // FormatRupiah:ConvertRupiah();
  title = 'apidata';
  newdata:any;
  constructor(private apiservies:GetService ){}
  
  ngOnInit(){
  this.apiservies.getData().subscribe(respons => {
    this.newdata = respons
    console.log('ini respon api data', this.newdata.data)
  })
  
  }
}
