const { ToDoService } = require("./ToDoService");

describe("ToDoService", () => {
  let toDoService;

  beforeEach(() => {
    const initialItems = [
      { id: 1, text: "Item 1" },
      { id: 2, text: "Item 2" },
      { id: 3, text: "Item 3" },
    ];

    toDoService = new ToDoService(initialItems);
  });

  test("addItem should add an item to the list", () => {
    const initialLength = toDoService.items.length;

    toDoService.addItem(4, "Item 4");

    expect(toDoService.items.length).toBe(initialLength + 1);
  });

  test("findIndex should return the correct index of an item", () => {
    const index = toDoService.findIndex(2);

    expect(index).toBe(1);
  });

  test("findIndex should return -1 when the item is not found", () => {
    const index = toDoService.findIndex(4);

    expect(index).toBe(-1);
  });

  test("findItem should return the correct item", () => {
    const item = toDoService.findItem(2);

    expect(item).toEqual({ id: 2, text: "Item 2" });
  });

  test("findItem should return undefined when the item is not found", () => {
    const item = toDoService.findItem(4);

    expect(item).toBeUndefined();
  });
});
