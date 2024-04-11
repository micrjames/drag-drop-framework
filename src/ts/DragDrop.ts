import { IDraggable, removeChildren } from "./utils";

export class DragDrop {
   private draggables!: Element[];
   private whichDragged!: Element;
   private target: (Element | undefined);
   constructor(draggables: IDraggable[], target: (Element | undefined)) {
	  this.draggables = [];
	  this.target = target;
	  this.setup(draggables, this.target);
   }

   private setup(sources: IDraggable[], target: (Element | undefined)) {
	  this.setup_sources(sources);
	  this.setup_target(target);
   }
   private setup_sources(sources: IDraggable[]) {
	  sources.forEach((source: IDraggable, index: number) => {
		  this.draggables[index] = this.setup_source(source);
	  });
   }
   private setup_source(source: IDraggable): Element {
	   const sourceEl = source.element;
	   sourceEl.classList.add("draggable");
	   sourceEl.setAttribute("draggable", "true");
	   removeChildren(sourceEl);
	   sourceEl.appendChild(source.content);
	   sourceEl.addEventListener("dragstart", this.handleDragStart);

	   return sourceEl;
   }
   private handleDragStart = (event: Event) => {
	   this.whichDragged = <Element>event.target;
   }
   private setup_target(target: (Element | undefined)) {
	  this.target = target;
	  this.target?.classList.add("drop-target");
	  this.target?.addEventListener("dragenter", this.handleDragEnter);
	  this.target?.addEventListener("dragleave", this.handleDragLeave);
	  this.target?.addEventListener("dragover", this.handleDragOver);
	  this.target?.addEventListener("drop", this.handleDrop);
   }
   private handleDragEnter = (event: Event) => {
	   const target = <Element>event.target;
	   target.classList.add("over");
   };
   private handleDragLeave = (event: Event) => {
	   const target = <Element>event.target;
	   target.classList.remove("over");
   };
   private handleDragOver = (event: Event) => {
	   event.preventDefault();
   };
   private handleDrop = (event: Event) => {
	   event.preventDefault();
	   const newTarget = this.whichDragged.parentElement;
	   const target = <Element>event.target;
	   target.classList.remove("over");
	   target.appendChild(this.whichDragged);

	   const newSourceEl = this.whichDragged;
	   let newDraggables: IDraggable[] = [];
	   let newDraggable: IDraggable = {
		 element: newSourceEl,
		 content: document.createTextNode(<string>newSourceEl.textContent)
	   };
	   newDraggables.push(newDraggable);

	   this.setup(newDraggables, <Element>newTarget);
   };
}
