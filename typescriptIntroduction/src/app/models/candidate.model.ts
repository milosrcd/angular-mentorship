export class Candidate {
  firstName: string;
  lastName: string;
  birthday: Date;

  constructor(firstName: string, lastName: string, birthday: Date){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
  }
}
