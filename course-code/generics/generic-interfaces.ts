namespace GenericInterfaces {
  interface Book {}

  interface Inventory<T> {
    getNewestItem: () => T;

    addItem: (newItem: T) => void;

    getAllItems: () => Array<T>;
  }

  //  let bookInventory: Inventory<Book>;

  //  Populate the inventory here...

  // const allBooks: Array<Book> = bookInventory.getAllItems();
}
