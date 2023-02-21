import { BaseEntity } from "./baseEntity.model";

export class Product implements BaseEntity{
  id: number;
  readonly title: string;
  readonly price: number;
  readonly description: string;

  constructor(id: number, title: string, price: number, description: string){
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }
  sayHello(): void {
    console.log('Hellow from Product class');
  }

  getTitle(): string{
    return this.title;
  }

  getPrice(): number{
    return this.price;
  }

  getDescription(): string{
    return this.description;
  }
}
