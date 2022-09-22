import { Product } from "./Product";

export let productArray: Product[] = [];
 
let product1 = new Product("Apple MacBook Pro 14 Late 2021 M1 Pro Space Grey US Keyboard Layout Z15G-US", 7890, "Apple", 14.2, "https://creatixcdn.azureedge.net/fetch/pc365/w_380,h_285,mode_pad,v_13/https://www.pc365.co.il/images/mbp14-spacegray-gallery1-202110(3).png", "https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg",0);
let product2 = new Product("Apple MacBook Pro 14 Late 2021 M1 Pro Space Grey (32GB) Z15H-32-HB", 11390, "Apple", 14.2, "https://creatixcdn.azureedge.net/fetch/pc365/w_380,h_285,mode_pad,v_13/https://www.pc365.co.il/images/mbp14-spacegray-gallery1-202110(3).png", "https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg",1);
let product3 = new Product("HP ProBook 450 G8 Notebook",3449,"HP",15.6,"https://creatixcdn.azureedge.net/fetch/pc365/w_300,h_285,mode_pad,v_8/https://www.pc365.co.il/images/c06750859.png","https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/New_Partner_Wh_Blu.png",2);
let product4 = new Product("HP ProBook 440 G8 Notebook",4190,"HP",14,"https://creatixcdn.azureedge.net/fetch/pc365/w_380,h_285,mode_pad,v_13/https://www.pc365.co.il/images/c06884228.png","https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/New_Partner_Wh_Blu.png",3);
let product5 = new Product("Lenovo ThinkPad E14 Gen 2 20TA005BIV", 3490, "Lenovo", 14, "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/ThinkPad_E14_Gen_2_Intel_CT1_01.png", "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/LenovoLogo-POS-Red.png",4)
let product6 = new Product("Lenovo ThinkPad E14 Gen 2 20TA005BIV", 4290, "Lenovo", 14, "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/ThinkBook_14s_Yoga_ITL_CT1_01.png", "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/LenovoLogo-POS-Red.png",5)

productArray.push(product1);
productArray.push(product2);
productArray.push(product3);
productArray.push(product4);
productArray.push(product5);
productArray.push(product6);





