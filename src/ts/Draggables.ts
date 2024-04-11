import { IDraggable } from "./utils";

export class Draggables {
   private draggableContainer: Element;
   private _draggables: IDraggable[];
   constructor(context: (Element | null), n: number) {
	  this.draggableContainer = document.createElement("div");
	  this.draggableContainer.classList.add("draggable-bkg");

	  this._draggables = Array.from({length: n}, _ => {
		 const draggableEl = document.createElement("div");
		 const draggableText = document.createTextNode("some text");

		 this.draggableContainer?.appendChild(draggableEl);

		 const draggable: IDraggable = {
			element: <Element>draggableEl,
			content: draggableText
		 };
		 return draggable;
	  });

	  context?.appendChild(<Element>this.draggableContainer);
   }

   get draggables(): IDraggable[] {
   	  return this._draggables;
   }
}
