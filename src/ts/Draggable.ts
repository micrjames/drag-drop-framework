import { IDraggable, createDiv } from "./utils";

export class Draggable {
   private _draggable: IDraggable; 
   constructor(context: (Element | null)) {
	  const el = createDiv("", "", "some text");

	  context?.appendChild(el);

	  this._draggable = {
		 element: el,
		 content: document.createTextNode(<string>el.textContent)
	  };
   }

   get draggable(): IDraggable {
   	  return this._draggable;
   }
}
