export interface IUser {
   id: string;
   name: string;
   username: string;
   email: string;
   phone: string;
   website: string;
   address: IAddress;
   company: ICompany;
}

interface IAddress {
   street: string;
   suite: string;
   city: string;
   zipcode: string;
   geo: IGeo;
}

interface IGeo {
   lat: string;
   lng: string;
}

interface ICompany {
   name: string;
   catchPhrase: string;
   bs: string;
}
