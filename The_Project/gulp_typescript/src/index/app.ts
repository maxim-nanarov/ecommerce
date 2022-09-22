import { productArray } from "../allProduct";
import { Product } from "../Product";
import { LaptopComponent } from "../ComputerComponent";

let filterdArray: Array<Product> = [];
let LaptopArray: Product[] = [];

//PRINTS ALL THE OBJECT IN THE PRODUCT ARRAY
export function printObject(productArray: Array<Product>) {
  let product_list = document.getElementById("Product_List");
  product_list!.innerHTML = "";
  for (let i = 0; i < productArray.length; i++) {
    if (product_list !== undefined) {
      let LP = new LaptopComponent(productArray[i]);
    }
  }
}

//gets the local storage and stores it in an array
export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("key")!);
}

//i cant cheack easely the array in the local storage
// so heres a function for checking:
function checkLocalStorage() {
  let productArray: Product[] = getLocalStorage();
  productArray.forEach((element) => {
    console.log(element);
  });
}

//gets the local storages and sets it as the object given.
// *NOTE* the object given must be an array of the current products.
function setLocalStorage(Object: any) {
  localStorage.clear();
  localStorage.setItem("key", JSON.stringify(Object))!;
}

//loads the pages,
//it loads here the edit page because i want from it to load with
//the laptops values in the input so the user will change only
//few thing instead of filling evrything from the start.
window.addEventListener("load", () => {
  if (localStorage.getItem("key") === null) {
    localStorage.setItem("key", JSON.stringify(productArray)!);
    LaptopArray = JSON.parse(localStorage.getItem("key")!);
  } else {
    LaptopArray = JSON.parse(localStorage.getItem("key")!);
  }
  //loads the first and the admin page
  if (
    window.location.href === "http://localhost:4000/admin.html" ||
    window.location.href === "http://localhost:4000/"
  ) {
    LaptopArray = Sort(LaptopArray);
    printObject(LaptopArray);
  }
  //loads the edit page
  if (window.location.href === "http://localhost:4000/edit.html") {
    let Product: Product = JSON.parse(localStorage.getItem("key2")!);

    let name = document.getElementById("name") as HTMLInputElement;
    let price = document.getElementById("price") as HTMLInputElement;
    let screen = document.getElementById("screen") as HTMLInputElement;
    let Company_Name = document.getElementById(
      "company_Name"
    ) as HTMLInputElement;
    let photo = document.getElementById("photo") as HTMLInputElement;
    let logo = document.getElementById("logo") as HTMLInputElement;

    name.value = Product.Title;
    price.value = Product.Price.toString();
    screen.value = Product.ScreenSize.toString();
    Company_Name.value = Product.Company_Name;
    photo.value = Product.Picture;
    logo.value = Product.Company_Logo;
  }
});

function Refresh() {
  printObject(Sort(LaptopArray));
}
export function Sort(Array: Array<Product>) {
  //sort function that sorts first the prices
  //and then sort accodringly to thenprices
  let A: Array<number> = [];
  Array.forEach((element) => {
    A.push(element.Price);
  });
  A.sort(function (b, a) {
    return b - a;
  });
  let arr: Array<Product> = [];
  A.forEach((element) => {
    Array.forEach((Product) => {
      if (element === Product.Price && arr.length <= Array.length) {
        arr.push(Product);
      }
    });
  });
  return arr;
}
//the class with functions that will work on specific pages:
//Module class is specifed to app: (index page(the store page))
class Module {
  //function that filters the rest

  filterWithScreenSizes(SS: number) {
    let product_list = document.getElementById("Product_List");
    product_list!.innerHTML = "";
    let WA: Array<Product> = [];
    //productArray: the array where all the porducts are held
    //new array for the Price Filter
    if(filterdArray.length  <  1){
      WA = LaptopArray;
    }else{
      WA = filterdArray;
      filterdArray = [];
    }

    WA.forEach((product) => {
      if (product.ScreenSize === SS) {
        filterdArray.push(product);
      }
    });
    this.printwithAllArrays();
  }

  filterWithManufacturer(Manu: string) {
    let product_list = document.getElementById("Product_List");
    product_list!.innerHTML = "";
    let WA: Array<Product> = [];
    //productArray: the array where all the porducts are held
    //new array for the Price Filter
    if(filterdArray.length  <  1){
      WA = LaptopArray;
    }else{
      WA = filterdArray;
      filterdArray = [];
    }

    WA.forEach((product) => {
      if (Manu === product.Company_Name) {
        filterdArray.push(product);
      }
    });
    this.printwithAllArrays();
  }

  FilterWithPrice(firstNumb: number, secondNumb: number) {
    let product_list = document.getElementById("Product_List");
    product_list!.innerHTML = "";
    let WA: Array<Product> = [];
    //productArray: the array where all the porducts are held
    //new array for the Price Filter
    if(filterdArray.length  <  1){
      WA = LaptopArray;
    }else{
      WA = filterdArray;
      filterdArray = [];
    }

    WA.forEach((product) => {
      if (product.Price > firstNumb && product.Price < secondNumb) {
        filterdArray.push(product);
      }
    });
    // this.printwithAllArrays();

    this.printwithAllArrays();
  }
  //this function takes all the arrays
  //push them to one array and counts the
  // products that are the same as the amount
  // of the arrays that exist.

  printwithAllArrays() {
    console.log("enters the print with all arrays");
    console.log(filterdArray);
    printObject(filterdArray);
  }

  GetsHTMLParent(){
    return document.getElementById("Product_List");
  }

  MostExpensive() {
    let Array: Array<Product> = [];
    let A: Array<number> = [];
    LaptopArray.forEach((element) => {
      A.push(element.Price);
    });
    A.sort(function (a, b) {
      return b - a;
    });

    A.forEach((element) => {
      LaptopArray.forEach((Product) => {
        if (element === Product.Price) {
          Array.push(Product);
        }
      });
    });
    printObject(Array);
  }

  fromCheapest() {
    let Array: Array<Product> = [];
    let A: Array<number> = [];
    LaptopArray.forEach((element) => {
      A.push(element.Price);
    });
    A.sort(function (b, a) {
      return b - a;
    });

    A.forEach((element) => {
      LaptopArray.forEach((Product) => {
        if (element === Product.Price) {
          Array.push(Product);
        }
      });
    });
    printObject(Array);
  }

  clear() {
    printObject(Sort(LaptopArray));
  }
}

//Amdin class is specified to Admin: the
export class Admin {
  Remove(key: string) {
    let laptopArray: Product[] = [];
    LaptopArray.forEach((element) => {
      if (element.count.toString() !== key) {
        laptopArray.push(element);
      }
      LaptopArray = laptopArray;
      Refresh();
      setLocalStorage(LaptopArray);
    });
  }
  //ToDo: the edit page is nullfying the local storage.
  Edit(key: string) {
    console.log(key);
    let PA:Array<Product> = getLocalStorage();
    PA.forEach((element) => {
      console.log('key: ' + key);
      console.log(element);
      
      if (element.count === parseInt(key)) {
        localStorage.setItem("key2", JSON.stringify(element));
      }
    });
    location.replace("http://localhost:4000/edit.html");
  }
  edit() {
    let Product: Product = JSON.parse(localStorage.getItem("key2")!);

    let name = document.getElementById("name") as HTMLInputElement;
    let price = document.getElementById("price") as HTMLInputElement;
    let screen = document.getElementById("screen") as HTMLInputElement;
    let Company_Name = document.getElementById(
      "company_Name"
    ) as HTMLInputElement;
    let photo = document.getElementById("photo") as HTMLInputElement;
    let logo = document.getElementById("logo") as HTMLInputElement;

    Product.Title = name.value;
    Product.ScreenSize = parseInt(screen.value);
    Product.Price = parseInt(price.value);
    Product.Company_Name = Company_Name.value;
    Product.Picture = photo.value;
    Product.Company_Logo = logo.value;

    let LA: Product[] = getLocalStorage();
    for (let i = 0; i < LA.length; i++) {
      if (LA[i].count === Product.count) {
        LA.splice(i, 1);
        LA.push(Product);
      }
    }
    localStorage.clear();
    setLocalStorage(LA);
    checkLocalStorage();
    // location.replace("http://localhost:4000/admin.html");
  }
  //redirect to the add.html page
  Add() {
    location.replace("http://localhost:4000/add.html");
  }
  Return() {
    location.replace("http://localhost:4000");
  }
  Cancle() {
    //To Do, return to the page but without changing nothing.
    location.replace("http://localhost:4000/admin.html");
  }
  //handles the submit button and submits the
  //inputs to an element and the element is pushed to the
  //local storage.
  add() {
    let productArray: Product[] = getLocalStorage();
    let maxCount: number;
    if (productArray.length > 0) {
      maxCount = productArray[0].count;
      productArray.forEach((element) => {
        if (element.count > maxCount) {
          maxCount = element.count;
        }
      });
    } else {
      maxCount = 0;
    }

    maxCount = maxCount + 1;
    let name = document.getElementById("name") as HTMLInputElement;
    let price = document.getElementById("price") as HTMLInputElement;
    let screen = document.getElementById("screen") as HTMLInputElement;
    let Company_Name = document.getElementById(
      "company_Name"
    ) as HTMLInputElement;
    let photo = document.getElementById("photo") as HTMLInputElement;
    let logo = document.getElementById("logo") as HTMLInputElement;

    let pro = new Product(
      name.value,
      parseInt(price.value),
      Company_Name.value,
      parseInt(screen.value),
      photo.value,
      logo.value,
      maxCount
    );

    productArray.push(pro);
    localStorage.clear();
    setLocalStorage(productArray);
    checkLocalStorage();
  }
}

export const admin = new Admin();
export const module = new Module();
