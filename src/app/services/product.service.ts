import { Injectable } from '@angular/core';

import { Product} from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
    new Product(1,'Product 1','Almond',100,"../../assets/Almond.jfif"),
    new Product(2,'Product 2','Apricot',150,"../../assets/Apricot.jfif"),
    new Product(3,'Product 3','Betelnut',160,"../../assets/Beletnut.jfif"),
    new Product(4,'Product 4','Cashew Apple',180,"../../assets/Cashew Apple.jfif"),
    new Product(5,'Product 5','Cashew Nut',400,"../../assets/Cashew nut.jfif"),
    new Product(6,'Product 6','Chestnut',300,"../../assets/Chestnuts.jfif"),
    new Product(7,'Product 7','Chocolate Cashew',100,"../../assets/Chocolate Cashew.jfif"),
    new Product(8,'Product 8','Cranberry',150,"../../assets/Cranberry.jfif"),
    new Product(9,'Product 9','Cudpahnut',160,"../../assets/Cudpahnuts.jfif"),
    new Product(10,'Product 10','Dates',180,"../../assets/Dates.jfif"),
    new Product(11,'Product 11','Hazelnut',400,"../../assets/Hazelnut.jfif"),
    new Product(12,'Product 12','Pista',100,"../../assets/Pista.jfif"),
    new Product(13,'Product 13','Iran Dried Fruit',150,"../../assets/Iran Dried Fruit.jfif"),
    new Product(14,'Product 14','Kaju',160,"../../assets/Kaju.jfif"),
    new Product(15,'Product 15','Khajur',180,"../../assets/Khajur.jfif"),
    new Product(16,'Product 16','Makhana',400,"../../assets/Makhana.jfif"),
    new Product(17,'Product 17','Peanuts',100,"../../assets/Peanuts.jfif"),
    new Product(18,'Product 18','Pecans',150,"../../assets/Pecans.jfif"),
    new Product(19,'Product 19','Pilli Nuts',160,"../../assets/Pilli Nuts.jfif"),
    new Product(20,'Product 20','Turkish Nuts',180,"../../assets/Turkish Nuts.jfif"),
    new Product(21,'Product 21','Hazelnuts',400,"../../assets/Hazelnuts.jfif"),
    new Product(22,'Product 22','Anjeer',100,"../../assets/Product1.jfif"),
    new Product(23,'Product 23','Pulse Nigeria',150,"../../assets/Pulse Nigeria.jfif"),
    new Product(24,'Product 24','Rashilal',160,"../../assets/Rasiklal.jfif"),
    new Product(25,'Product 25','Walnut',180,"../../assets/Walnut.jfif"),
    new Product(26,'Product 26','Mixed Plate',800,"../../assets/Mixed Plate.jfif"),
    new Product(27,'Product 27','Mixed Plate',500,"../../assets/Mixed Plate2.jfif"),
    
    
  ]
  constructor() { }

  getProducts():Product[]{
    return this.products
  }
}
