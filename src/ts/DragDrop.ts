import { IDraggable, removeChildren } from "./utils";

export class DragDrop {
   private draggables!: Element[];
   private whichDragged!: Element;
   private targets: (Element | undefined)[];
   constructor(draggables: IDraggable[], targets: (Element | undefined)[]) {
	  this.draggables = [];
	  this.targets = targets;
	  this.setup(draggables, this.targets);
   }

   private setup(sources: IDraggable[], targets: (Element | undefined)[]) {
	  this.setup_sources(sources);
	  this.setup_targets(targets);
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
   private setup_targets(targets: (Element | undefined)[]) {
	  targets?.forEach(target => {
		 target?.classList.add("drop-target");
		 target?.addEventListener("dragenter", this.handleDragEnter);
		 target?.addEventListener("dragleave", this.handleDragLeave);
		 target?.addEventListener("dragover", this.handleDragOver);
		 target?.addEventListener("drop", this.handleDrop);
	  });
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
	   const newTargets: Element[] = [];
	   const newTarget = this.whichDragged.parentElement;
	   const target = <Element>event.target;
	   target.classList.remove("over");
	   target.appendChild(this.whichDragged);
	   newTargets.push(<Element>newTarget);

	   const newSourceEl = this.whichDragged;
	   let newDraggables: IDraggable[] = [];
	   let newDraggable: IDraggable = {
		 element: newSourceEl,
		 content: document.createTextNode(<string>newSourceEl.textContent)
	   };
	   newDraggables.push(newDraggable);

	   this.setup(newDraggables, newTargets);
   };
}
