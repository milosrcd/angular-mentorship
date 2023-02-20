import { Address } from './address.model';
export class Customer{
  private id: number;
  private name: string;
  private email: string;
  private phone: string;
  private address: Address;

  constructor(id: number, name: string, email: string, phone: string, address: Address){
    this.address = address;
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
