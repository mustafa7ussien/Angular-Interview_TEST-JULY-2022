export interface IEmployee {
   id: number;
   firstName: string;
   lastName: string;
   dob?: string;
   gender?: string;
   address1?:string;
   address2?:string;
   city?:string;
   postal?:string;
   country?:string;
   email: string;
   phone?: string;
   employeeType: {
      id: number,
      type: string
   };
}