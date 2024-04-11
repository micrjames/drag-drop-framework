import "./styles/main.scss";

import { Draggables } from "./ts/Draggables";
import { DragDrop } from "./ts/DragDrop";

import { container } from "./ts/incs";

const target = document.createElement("div");
target.classList.add("droppable-target");

container?.appendChild(<Element>target);

new DragDrop(new Draggables(container, 1).draggables, <Element>target);
