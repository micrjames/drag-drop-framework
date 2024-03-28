import "./styles/main.scss";

import { DragDrop } from "./ts/DragDrop";
import { IDraggable } from "./ts/utils";

const body = document.body;
const container = body.firstElementChild;

const draggableContainer = document.createElement("div");
draggableContainer.classList.add("draggable-bkg");

const draggableEl = document.createElement("div");
const draggableText = document.createTextNode("some text");
draggableContainer?.appendChild(draggableEl);

let draggables: IDraggable[] = [];
let draggable: IDraggable = {
   element: <Element>draggableEl,
   content: draggableText
};
const target = document.createElement("div");
target.classList.add("droppable-target");

container?.appendChild(<Element>draggableContainer);
container?.appendChild(<Element>target);

draggables.push(draggable);

new DragDrop(draggables, <Element>target);
