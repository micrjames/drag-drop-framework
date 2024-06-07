import { createDiv } from "./utils";

export class Targets {
   private _targets: Element[];
   constructor(context: (Element | null), n: number) {
	  this._targets = Array.from({length: n}, _ => {
		 const target = createDiv("droppable-target");
		 context?.appendChild(<Element>target);
		 return target;
	  });
   }

   get targets(): Element[] {
	  return this._targets;
   }
}
