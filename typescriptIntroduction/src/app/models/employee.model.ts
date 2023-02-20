import { User } from './user.model';
export class Employee extends User{

  jobTitle: string;

  constructor(id: number, name: string, email: string, phone: string, jobTitle: string){
    super(id, name, email, phone);
    this.jobTitle = jobTitle;
  }
}
