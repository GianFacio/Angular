//imports injectable
import { Injectable } from '@angular/core';

//imports httpclient
import { HttpClient } from '@angular/common/http';
//imports artist model
import { Brand } from '../models/brands.model';
//imports album model
import { Shoe } from '../models/shoes.model';
//imports albumCreate model
import { ShoeInterface } from '../models/ShoeInterface';
import { hostname } from 'os';


//defines class as service
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService
{

  constructor(private http: HttpClient) { }

  //creates a new album array and sets it to exampledata


  //creates a new host variable and assigns it to localhost
  private host = "http://localhost:3000";

  //returns all artists
  public getBrands(callback: (brand: Brand[]) => void): void
  {
    this.http.get<Brand[]>("/brands").
      subscribe((brands: Brand[]) =>
      {
        callback(brands);
      });
  }

  //returns all albums
  public getShoes(callback: (shoes: Shoe[]) => void): void
  {
    this.http.get<Shoe[]>("/shoes").
      subscribe((shoes: Shoe[]) =>
      {
        callback(shoes);
      });
  }

  //returns specific album
  public getShoesOfBrand(brandName: String, callback: (shoes: Shoe[]) => void): void
  {
    let request = `/shoes/${brandName}`;
    console.log('request', request);
    this.http.get<Shoe[]>(request).
      subscribe((shoes: Shoe[]) =>
      {
        console.log('have shoes', shoes);
        callback(shoes);
      });
  }

  //creates album
  public createShoe(shoe: ShoeInterface, callback: () => void): void
  {
    this.http.post<ShoeInterface>("/shoes", shoe).
      subscribe((data) =>
      {
        callback();
      });
  }

  //updates desired album
  public updateShoe(shoe: Shoe, callback: () => void): void
  {
    this.http.put<Shoe>("/shoes", shoe).
      subscribe((data) =>
      {
        callback();
      });
  }

  //deletes albums
  public deleteShoe(shoeId: number, callback: () => void): void
  {
    this.http.delete<Shoe>("/shoes/" + shoeId).
      subscribe((data) =>
      {
        callback();
      });
  }


}

