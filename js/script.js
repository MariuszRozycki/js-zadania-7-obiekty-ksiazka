class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
  }

  describeBook() {
    if(this.read === true) {
      return 'Ksiazka ma tytul: ' + '"' + this.title + '"' + '. Autorem jest: ' + this.author + '. Ksiazka zostala przeczytana.';
    } else if (this.read === false) {
      return 'Ksiazka ma tytul: ' + '"' + this.title + '"' + '. Autorem jest: ' + this.author + '. Ksiazka zostala nieprzeczytana.';
    } 
  }
  
};

let bookFirst = new Book('Wiedzmin', 'Andrzej Sapkowski', true);
// console.log(bookFirst);
// console.log(bookFirst.describeBook());
// console.log('-------------------------------------------------');

let bookSecond = new Book('Rakietowi miliarderzy', 'Tim Fernholtz', false);
// console.log(bookSecond);
// console.log(bookSecond.describeBook());
// console.log('-------------------------------------------------');

let bookThird = new Book('Anatomia Gory. Osiem tysiecy metrow pod marzeniami', 'Rafal Fronia', false);
// console.log(bookThird);
// console.log(bookThird.describeBook());
// console.log('-------------------------------------------------');

let bookFourth = new Book('Krotka historia czasu', 'Stephen W. Hawking', true);

let booksAll = [];
booksAll.push(bookFirst, bookSecond, bookThird, bookFourth);
// console.log(booksAll);
// console.log('-------------------------------------------------');

// console.log('Ksiazki przeczytane:');
function quantityRead(booksAll) {
  let sumRead = 0;
  let sumUnread = 0;
  booksAll.forEach(function (element, index) {
    if (element.read) {
      ++sumRead;
      console.log((index + 1) + ': pozycja: ' + element.describeBook());
     } else {
      ++sumUnread;
      console.log((index + 1) + ': pozycja: ' + element.describeBook());
     }
  });

  
  return [`Ilosc przeczytanych ksiazek to: ${sumRead}.`, `Ilosc nieprzeczytanych ksiazek to: ${sumUnread}.` ];
}
console.log(quantityRead(booksAll)[0]); 
console.log(quantityRead(booksAll)[1]); 
console.log('--------------------------');

// console.log('Ksiazki nieprzeczytane:');
// function quantityUnread(booksAll) {
//   let number = 0;
//   let sumUnread = 0;
//   booksAll.forEach(function (element) {
//     if (!element.read) {
//         sumUnread += 1;
//         ++number; 
//         // console.log(number + ': pozycja: ' + element.describeBook());     
//      }   
//   });
//   return 'Ilosc nieprzeczytanych ksiazek to: ' + sumUnread + '.'
// }
// console.log(quantityUnread(booksAll)); 
// console.log('--------------------------');

 