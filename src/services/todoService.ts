export class ToDoService {
  items: any[] = [];

  constructor(items: any[]) {
    this.items = items;
  }

  addItem(id: number, text: string) {
    this.items.push({ id: id, text: text });
  }

  findIndex(id: number) {
    let index = this.items.findIndex((element) => element.id === id);
    return index;
  }

  findItem(id: number) {
    let item = this.items.find((element) => element.id === id);
    return item;
  }
}
