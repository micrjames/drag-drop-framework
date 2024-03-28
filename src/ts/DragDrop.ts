import { IDraggable } from "utils";

export class DragDrop {
   private draggables!: Element[];
   private whichDragged!: Element;
   private target: Element;
   constructor(draggables: IDraggable[], target: Element, numbered: boolean = false) {
	  this.draggables = [];
	  this.target = target;
	  this.reset(draggables, this.target, numbered);
   }

   private reset(sources: IDraggable[], target: Element, numbered: boolean = false) {
	  sources.forEach((source: IDraggable, index: number) => {
		  const sourceEl = source.element;
		  sourceEl.classList.add("draggable");
		  sourceEl.setAttribute("draggable", "true");
		  if(numbered) {
			 const span = document.createElement("span");
			 span.textContent = `${index+1}`;
			 sourceEl.appendChild(span);
		  }
		  let sourceElContent: Text;
		  if(typeof source.content === "string") {
			 sourceElContent = document.createTextNode(source.content);
			 sourceEl.appendChild(sourceElContent);
		  }
		  sourceEl.addEventListener("dragstart", (event: Event) => {
			 this.whichDragged = <Element>event.target;
		  });
		  this.draggables[index] = sourceEl;
	  });
	  this.target = target;
	  this.target.classList.add("drop-target");
	  this.target.addEventListener("dragenter", (event: Event) => {
		  const target = <Element>event.target;
		  target.classList.add("over");
	  });
	  this.target.addEventListener("dragleave", (event: Event) => {
		  const target = <Element>event.target;
		  target.classList.remove("over");
	  });
	  this.target.addEventListener("dragover", (event: Event) => {
		  event.preventDefault();
	  });
	  this.target.addEventListener("drop", (event: Event) => {
		  event.preventDefault();
		  const target = <Element>event.target;
		  target.appendChild(this.whichDragged);
	  });
   }
}
