import "./styles/main.scss";

import { DragDrop } from "./ts/DragDrop";
import { IDraggable } from "./ts/utils";

const body = document.body;
const container = body.firstElementChild;

const draggableContainer = container?.firstElementChild;
const draggableEl = document.createElement("div");
draggableContainer?.appendChild(draggableEl);

let draggables: IDraggable[] = [];
let draggable: IDraggable = {
   element: <Element>draggableEl,
   content: document.createTextNode("some text")
};
const target = draggableContainer?.nextElementSibling;

container?.appendChild(<Element>draggableContainer);
container?.appendChild(<Element>target);

draggables.push(draggable);

new DragDrop(draggables, <Element>target);
