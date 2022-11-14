import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../service/product.service';
import { Shoe } from '../models/shoes.model'

@Component({
  selector: 'app-delete-shoe',
  templateUrl: './delete-shoe.component.html',
  styleUrls: ['./delete-shoe.component.css']
})
export class DeleteShoeComponent implements OnInit {
  shoe: Shoe = {
    shoeId: 6,
    name: '',
    color: '',
    size: '',
    price: '',
    materials: []
  };

  constructor(private service:ProductServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {}

  public onSubmit()
  {
    this.service.deleteShoe(this.shoe.shoeId, () => void{});
  }

}


