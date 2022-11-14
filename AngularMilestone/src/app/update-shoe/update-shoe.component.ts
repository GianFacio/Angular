import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shoe } from '../models/shoes.model';
import { ProductServiceService } from '../service/product.service';

@Component({
  selector: 'app-update-shoe',
  templateUrl: './update-shoe.component.html',
  styleUrls: ['./update-shoe.component.css']
})
export class UpdateShoeComponent implements OnInit {

  shoe:Shoe | any

  constructor(private service:ProductServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }


}
