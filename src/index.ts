import "./styles/main.scss";

import { Draggables } from "./ts/Draggables";
import { Targets } from "./ts/Targets";
import { DragDrop } from "./ts/DragDrop";

import { container } from "./ts/incs";

new DragDrop(
   new Draggables(container, 1).draggables,
   new Targets(container, 1).targets.pop()
);
