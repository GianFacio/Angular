import { Component, Input, OnInit } from '@angular/core';
import { Shoe } from '../models/shoes.model';
import { ProductServiceService } from '../service/product.service';

@Component({
  selector: 'app-list-shoe',
  templateUrl: './list-shoe.component.html',
  styleUrls: ['./list-shoe.component.css']
})
export class ListShoeComponent implements OnInit
{

  constructor(private service: ProductServiceService) { }

  @Input() shoe: Shoe | undefined;
  shoes: Shoe[] = [];
  selectedShoe: Shoe | null = null

  ngOnInit(): void
  {
    this.service.getShoes((shoes: Shoe[]) => this.shoes = shoes);
    console.log(this.shoes);
  }

  onSelectShoe(shoe: Shoe)
  {
    this.selectedShoe = shoe;
  }
}
