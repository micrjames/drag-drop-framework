export interface IDraggable {
   element: Element;
   content: (Text | HTMLImageElement | HTMLElement & SVGElement);
}

export function removeChildren(context: Element) {
	while(context.firstChild)
	   context.removeChild(<Element>context.lastChild);
}
