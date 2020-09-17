namespace ArrowFunctions {
  const allBooks: { author: string }[] = [];

  const arr = allBooks.filter(function (book) {
    return book.author === 'Author Name';
  });

  const arrArrow = allBooks.filter((book) => book.author === 'Author Name');

  //  Arrow function set the 'this' variable when the function is created, not when it's invoked.
  //  Check out lexical scope

  // TODO: Handling "this" in arrow functions
}
