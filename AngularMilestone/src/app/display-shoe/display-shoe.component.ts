import { Component, Input, OnInit } from '@angular/core';
import { Shoe } from '../models/shoes.model';

@Component({
  selector: 'app-display-shoe',
  templateUrl: './display-shoe.component.html',
  styleUrls: ['./display-shoe.component.css']
})
export class DisplayShoeComponent implements OnInit {

  constructor() { }
  @Input()
  shoe!: Shoe;

  ngOnInit(): void {
  }

}
