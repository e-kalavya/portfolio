import * as moment from 'moment';

interface RootObject {
  profile: Profile;
}

export interface Profile {
  personal: Personal;
  description: string;
  graduatedYear: number;
}

export interface Personal {
  name: string;
  birthDate: string;
  emailId: string;
  nationality: string;
  skypeId: string;
  languages: string[];
  image: string;
}

export class PersonalProfileHelper {
  constructor(private personalInfo: Personal) {}

  getAge(): number {
    return moment().diff(
      moment(this.personalInfo.birthDate, 'MM/DD/YYYY'),
      'years'
    );
  }
}
