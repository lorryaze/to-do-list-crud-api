import express from "express";
import { ToDoService } from "../services/todoService";

let items: any[] = [];
const item = new ToDoService(items);

export const addItem = (req: express.Request, res: express.Response) => {
  const result = item.addItem(Number(req.query.id), String(req.query.text));

  res.send(JSON.stringify({ resultado: result }));
};

export const editItem = (req: express.Request, res: express.Response) => {
  const response = JSON.stringify(req.body);
  const jsonObj = JSON.parse(response);
  const text = jsonObj.text;
  const id = Number(req.params.id);

  const result = item.findIndex(id);

  if (result === -1) {
    return res.status(404).send("Item not found");
  }

  const itemText = item.findItem(id);

  itemText.text = text || itemText.text;

  return res.send(itemText);
};

export const deleteItem = (req: express.Request, res: express.Response) => {
  const id = Number(req.params.id);
  const index = item.findIndex(id);

  if (index !== -1) {
    item.items.splice(index, 1);
    res.sendStatus(204); // return 204 No Content if successful
  } else {
    res.sendStatus(404); // return 404 Not Found if item is not found
  }
  console.log(item.items);
};
