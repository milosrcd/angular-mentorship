export class Customer {
  private id: number;
  private name: string;
  private email: string;
  private phone: string;
  private address: string;

  constructor(id: number, name: string, email: string, phone: string, address: string){
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }

  customerInfo(): string{
    return `My name is: ${this.name}. You can contact me via email ${this.email} or phone ${this.phone}`
  }
}
