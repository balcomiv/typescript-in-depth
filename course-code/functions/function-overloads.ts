function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProperty: string | boolean): string[] {
  let bookArg: string;

  if (typeof bookProperty === 'string') {
    bookArg = 'book arg is author';
  } else {
    bookArg = 'book arg is available';
  }
  return [bookArg];
}

//  Running func for quokka.js
getTitles('name'); // ?
getTitles(true); // ?
