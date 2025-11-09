export class Repository<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  findById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}
