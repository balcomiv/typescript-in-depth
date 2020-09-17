class Catalog<T> implements Inventory<T> {
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
catalog.addItem('one');
catalog.addItem('two');
catalog.getNewestItem(); // ?
