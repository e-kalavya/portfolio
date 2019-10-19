export class ContactConfig {

  contactDetails: Contact;

  constructor() {
    this.contactDetails = new Contact();
    this.contactDetails.contactNumber = [
      {
        numberCode: 'profile.contact.cellular.mobile',
        number: '+81 7048180209'
      },
      {
        numberCode: 'profile.contact.cellular.alternate',
        number: '+91 7418448779'
      }
    ];
    this.contactDetails.contactLinks = [
      {
        typeCode: 'profile.contact.online.mailId',
        link: 'tzrajesh7@gmail.com'
      },
      {
        typeCode: 'profile.contact.online.skype',
        link: 'rajeshsundaram7'
      },
      /* {
        typeCode: 'profile.contact.online.gplus',
        link: ''
      },
      {
        typeCode: 'profile.contact.online.facebook',
        link: ''
      },
      {
        typeCode: 'profile.contact.online.twitter',
        link: ''
      }, */
    ];
  }
}





export class Contact {
  contactNumber: Array<ContactNumber>;
  contactLinks: Array<ContactLink>;
}

export class ContactNumber {
  numberCode: string;
  number: string;
}

export class ContactLink {
  typeCode: string;
 link: string;
}
