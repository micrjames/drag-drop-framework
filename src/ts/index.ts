import { DragDrop } from "./DragDrop";

const dragDrop = new DragDrop();
const body = document.body;
const container = body.firstElementChild;

let draggables: Element[];
let target;
<div class="draggable-bkg" id="draggable-bkg"></div>
<div class="droppable-target" id="droppable-target"></div>
