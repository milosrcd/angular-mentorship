import { Address } from './address.model';
export class Customer extends Address {
  private id: number;
  private name: string;
  private email: string;
  private phone: string;

  constructor(id: number, name: string, email: string, phone: string, street: string, houseNumber: number, city: string, country: string){
    super(street, houseNumber, city, country);
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  customerInfo(): string{
    return `My name is: ${this.name}. You can contact me via email ${this.email} or phone ${this.phone}`
  }

  getName(): string{
    return this.name;
  }
}
