import { IDraggable, createDiv } from "./utils";
import { Draggable } from "./Draggable";

export class Draggables {
   private draggableContainer: Element;
   private _draggables: IDraggable[];
   constructor(context: (Element | null), n: number) {
	  this.draggableContainer = createDiv("draggable-bkg");

	  this._draggables = Array.from({length: n}, _ => new Draggable(this.draggableContainer).draggable);

	  context?.appendChild(<Element>this.draggableContainer);
   }

   get draggables(): IDraggable[] {
   	  return this._draggables;
   }
}
