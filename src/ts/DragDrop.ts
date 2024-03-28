import { IDraggable } from "utils";

class DragDrop {
   private draggables!: Element[];
   private target: Element;
   constructor(draggables: IDraggable[], target: Element, numbered: boolean = false) {
	  draggables.forEach((draggable: IDraggable, index: number) => {
		  const draggableEl = draggable.element;
		  draggableEl.classList.add("draggable");
		  draggableEl.setAttribute("draggable", "true");
		  if(numbered) {
			 const span = document.createElement("span");
			 span.textContent = `${index+1}`;
			 draggableEl.appendChild(span);
		  }
		  let draggableElContent: Text;
		  if(typeof draggable.content === "string") {
			 draggableElContent = document.createTextNode(draggable.content);
			 draggableEl.appendChild(draggableElContent);
		  }
		  draggableEl.addEventListener("dragstart", () => {
		  });
		  this.draggables[index] = draggableEl;
	  });
	  this.target = target;
	  this.target.classList.add("drop-target");
	  this.target.addEventListener("dragover", (event: Event) => {
		  event.preventDefault();
	  });
	  this.target.addEventListener("drop", (event: Event) => {
		  event.preventDefault();
	  });
   }
}
