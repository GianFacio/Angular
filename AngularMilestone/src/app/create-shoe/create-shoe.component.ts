import { Component, OnInit } from '@angular/core';
import { ShoeInterface } from '../models/ShoeInterface';
import { Material } from '../models/materials.model';
import { ProductServiceService } from '../service/product.service';

@Component({
  selector: 'app-create-shoe',
  templateUrl: './create-shoe.component.html',
  styleUrls: ['./create-shoe.component.css']
})
export class CreateShoeComponent implements OnInit {

  shoe: ShoeInterface = {
    name: "",
    color: "",
    size: "",
    price: "",
    materials: [],
  };

  materialsRaw: string = "";
  wasSubmitted: boolean = false;

  constructor(private service: ProductServiceService) { }

  ngOnInit() {
  }

  public onSubmit() {
    // Parse the Tracks and add to the Album then call the Service to create the new Album
    let materials: Material[] = [];
    let materialsAll = this.materialsRaw.split('\n');
    for (let i = 0; i < materialsAll.length; ++i) {
      let name = "";
      let color = "";
      let size = "";
      let price = "";
      let materialInfo = materialsAll[i];
      let materialParts = materialInfo.split(':');
      if (materialParts.length == 4) {
        name = materialParts[0];
        color = materialParts[1];
        size = materialParts[2];
        price = materialParts[3];
      }
      else if (materialParts.length == 2) {
        name = materialParts[0];
        color = materialParts[1];
        size = materialParts[2];
      }
      else {
        name = materialParts[0];
      }
    }
    this.shoe.materials = materials;
    //output albums to console in json format
    this.service.createShoe(this.shoe, () => void{});
    this.wasSubmitted = true;
  }
}

