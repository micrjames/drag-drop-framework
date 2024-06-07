import { IDraggable, createDiv } from "./utils";

export class Draggables {
   private draggableContainer: Element;
   private _draggables: IDraggable[];
   constructor(context: (Element | null), n: number) {
	  this.draggableContainer = createDiv("draggable-bkg");

	  this._draggables = Array.from({length: n}, _ => {
		 const draggableEl = createDiv("", "", "some text");

		 this.draggableContainer?.appendChild(draggableEl);

		 const draggable: IDraggable = {
			element: <Element>draggableEl,
			content: document.createTextNode(<string>draggableEl.textContent)
		 };
		 return draggable;
	  });

	  context?.appendChild(<Element>this.draggableContainer);
   }

   get draggables(): IDraggable[] {
   	  return this._draggables;
   }
}
