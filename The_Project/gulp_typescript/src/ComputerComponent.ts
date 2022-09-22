import { Product } from "./Product";
import { module } from "./index/app";

export class LaptopComponent {

  data: Product;
  parent: HTMLElement | null = module.GetsHTMLParent();

    constructor(data: Product) {
        this.data = data;
        this.render(data);
    // TODO: Render component now, or keep parent for later rendering
    }

    update(data: Product) {
    // TODO: Update data and re-render if needed
      let updateDiv = document.getElementById('product'+data.count);
      if (window.location.href === "http://localhost:4000/") {
        updateDiv!.innerHTML += `<div id="Product${data.count}" class="Products">
        <img src='${data.Picture}'>
        <img src='${data.Company_Logo}' > 
        <div class="Info">
          <div class="Seperator">
        <label class="CompanyName">${data.Company_Name}</label> 
          </div>
          <div class="Seperator">
        <p>${data.Title}</p>
          </div>
          <div class="Seperator">
        <label class="Price">The Price: ${data.Price}</label>
          </div>
          <div class="Seperator">
        <label class="ScreanSize">The Screen Size: ${data.ScreenSize}</label>
          </div>
        </div>
        </div>
      </div>`;
      } else if (window.location.href === "http://localhost:4000/admin.html") {
        updateDiv!.innerHTML += `<div id="Product${data.count}" class="Products">
    <img src='${data.Picture}'>
    <img src='${data.Company_Logo}' > 
    <div class="aButton">
    <button id='${data.count}' onclick="app.admin.Edit(this.id)">Edit</button>
            <button id='${data.count}' onclick="app.admin.Remove(this.id)">Remove</button>
        </div>
    <div class="Info">
      <div class="Seperator">
    <label class="CompanyName">${data.Company_Name}</label> 
      </div>
      <div class="Seperator">
    <p>${data.Title}</p>
      </div>
      <div class="Seperator">
    <label class="Price">The Price: ${data.Price}</label>
      </div>
      <div class="Seperator">
    <label class="ScreanSize">The Screen Size: ${data.ScreenSize}</label>
      </div>
    </div>
    </div>`;
      }
    }
    
    render(data:Product) {
      if (window.location.href === "http://localhost:4000/") {
        this.parent!.innerHTML += `<div id="Product${data.count}" class="Products">
        <img src='${data.Picture}'>
        <img src='${data.Company_Logo}' > 
        <div class="Info">
          <div class="Seperator">
        <label class="CompanyName">${data.Company_Name}</label> 
          </div>
          <div class="Seperator">
        <p>${data.Title}</p>
          </div>
          <div class="Seperator">
        <label class="Price">The Price: ${data.Price}</label>
          </div>
          <div class="Seperator">
        <label class="ScreanSize">The Screen Size: ${data.ScreenSize}</label>
          </div>
        </div>
        </div>
      </div>`;
      } else if (window.location.href === "http://localhost:4000/admin.html") {
        this.parent!.innerHTML += `<div id="Product${data.count}" class="Products">
    <img src='${data.Picture}'>
    <img src='${data.Company_Logo}' > 
    <div class="aButton">
    <button id='${data.count}' onclick="app.admin.Edit(this.id)">Edit</button>
            <button id='${data.count}' onclick="app.admin.Remove(this.id)">Remove</button>
        </div>
    <div class="Info">
      <div class="Seperator">
    <label class="CompanyName">${data.Company_Name}</label> 
      </div>
      <div class="Seperator">
    <p>${data.Title}</p>
      </div>
      <div class="Seperator">
    <label class="Price">The Price: ${data.Price}</label>
      </div>
      <div class="Seperator">
    <label class="ScreanSize">The Screen Size: ${data.ScreenSize}</label>
      </div>
    </div>
    </div>`;
      }
    }
}
