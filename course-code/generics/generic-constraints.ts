namespace GenericConstraints {
  interface catalogItem {
    catalogNumber: number;
  }

  interface Inventory<T> {
    getNewestItem: () => T;

    addItem: (newItem: T) => void;

    getAllItems: () => Array<T>;
  }

  class Catalog<T extends catalogItem> implements Inventory<T> {
    private catalogItems: T[] = [];

    addItem(newItem: T): void {
      this.catalogItems.push(newItem);
    }

    getAllItems(): T[] {
      return this.catalogItems;
    }

    getNewestItem(): T {
      return this.catalogItems[this.catalogItems.length - 1]; //?
    }
  }

  /**
   * Tests for Quokka
   */
  const catalog = new Catalog();
  //  catalog.addItem('two'); //  This would error because of 'T extends CatalogItem' constraint on Catalog class
  catalog.addItem({ catalogNumber: 2 });
  catalog.getNewestItem(); // ?
}
