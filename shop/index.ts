import { Laptop } from "./src/model/product/laptop";
import { User } from "./src/model/user";
import { TV } from "./src/model/product/tv";
import { Monitor } from "./src/model/product/monitor";
import { Phone } from "./src/model/product/phone";
import { Main } from "./src/main";

let main = new Main();

const laptop1 = new Laptop("hp", 1200, "hp", 4,"coreI5", "124gb", "256gb");
const laptop2 = new Laptop("acer", 1600, "acer", 7,"coreI9", "129gb", "256gb");
const laptop3 = new Laptop("mci", 12200, "hp", 4,"coreI5", "130gb", "256gb");

const tv = new TV("artel",1700,"core",1920,true,"smart");
const tv2 = new TV("samsung",1800,"ryzen",1920,false,"oddiy");

const monitor = new Monitor("lg",1200,"Lg",1800,60);
const monitor2 = new Monitor("mac",1700,"imac",2000,70);

const phone = new Phone("iPhone",1200,"Apple",3000,16);
const phone2 = new Phone("Samsung",130,"Samsung",2000,10);

const userr = new User("Diyorbek","gayratalievich","root123",70000);
const user2 = new User("Gopir","g123","12345678",200000);

main.addProduct(laptop1,laptop2,laptop3,tv,tv2,monitor,monitor2,phone,phone2)
console.log(main.getProductList());

console.log(main.showProduct("Phone"))




// main.signIn("salom","root123");
// main.signUp("diyor","drk","user134");
// main.signIn("diyor","user134");

