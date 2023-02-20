export class Address{
  street: string;
  houseNumber: number;
  city: string;
  contry: string;

  constructor(street: string, houseNumber: number, city: string, country: string){
    this.street = street;
    this.houseNumber = houseNumber;
    this.city = city;
    this.contry = country;
  }
}
