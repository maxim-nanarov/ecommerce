export class Product{

    Title: string;
    Price:number;  
    Company_Name: string;
    ScreenSize: number; 
    Picture: string;
    Company_Logo: string;
    count:number; 

    constructor(Title:string, Price:number, Company_Name:string, 
        ScreenSize:number, Picture:string, Company_Logo:string, count:number) {
            this.Title = Title; 
            this.Price = Price;
            this.Company_Name = Company_Name;
            this.ScreenSize = ScreenSize;
            this.Picture = Picture;
            this.Company_Logo = Company_Logo;
            this.count = count;
      }
}