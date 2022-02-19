"use strict"
// function Product(name, price) {
//   this.name = name;
//   this.price = price;
  
// }

// Product.prototype.make24PercentDiscount = function (){
//   this.price =  this.price - this.price * 25 / 100;
// };

// const Epta = new Product ("xoxol", 100);
// Epta.make24PercentDiscount();
// console.log (Epta);



//  ЗАДАНИЕ 2 
// class Product {
//   constructor (name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   make24PercentDiscount() {
//     this.price =  this.price - this.price * 25 / 100;
//   }
// }

// const Epta = new Product ("xoxol", 100);
// Epta.make24PercentDiscount();
// console.log (Epta);


// ____________________________________________________________

// function Post(author, text, date) {
//   this.author = author;
//   this.text = text;
//   this.date = date;
// }

// Post.prototype.edit = function(moitext) {
//   this.text = this.text = moitext;
// }

// const xoxli = new Post ("Stas", "saloo", 17.04);
// xoxli.edit("lol");
// console.log (xoxli);

// function AttachedPost (author, text, date, highlighted) {
//   Post.call(this, author, text, date);
//   this.highlighted = highlighted = false;
  
// }

// AttachedPost.prototype.makeTextHighlighted = function() {
//   this.highlighted = this.highlighted = true;
// }

// const roflanLico = new AttachedPost ("ya", "slojno", 22.04);
// roflanLico.makeTextHighlighted();
// console.log (roflanLico);



// class Post {
//   constructor (author, text, date) {
//     this.author = author;
//     this.text = text;
//     this.date = date;
//   }
//   edit(moitext) {
//     this.text = this.text = moitext;
//   } 
// }

// const xoxlo = new Post ("Stas", "saloo", 17.04);
// xoxlo.edit("lol");
// console.log (xoxlo);

// class AttachedPost extends Post {
//   constructor (author, text, date, highlighted) {
//     super (author, text, date);
//     this.highlighted = highlighted = false;
//   }
//   makeTextHighlighted() {
//     this.highlighted = this.highlighted = true;
//   }
// }

// const roflanLico = new AttachedPost ("ya", "slojno", 22.04);
// roflanLico.makeTextHighlighted();
// console.log (roflanLico);




// class Test {
//   calc(num) {
//       if (!Number.isInteger(num) || num < 0 || num > 999) {
//           return {};
//       }
    
//       return {
//         единицы: num % 10,
//         сотни: Math.floor(num / 100),
//         десятки: Math.floor(num / 10) % 10,
//       };
//   }

// }


// let test = new Test;
// console.log(test.calc(45));
