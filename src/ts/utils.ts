export interface IDraggable {
   element: Element;
   content: (Text | HTMLImageElement | HTMLElement & SVGElement);
}

export const removeChildren = (context: Element) => {
	while(context.firstChild)
	   context.removeChild(<Element>context.lastChild);
}

const buildEl = (el: string, className?: string, idName?: string, text?: string) => {
    const element = document.createElement(el);                              
    if(className) element.setAttribute("class", className);          
    if(idName) element.setAttribute("id", idName);     
    if(text) {
	   const elTxt = document.createTextNode(text);
	   element.appendChild(elTxt);
    }   

    return element;
}; 

export const createDiv = (className?: string, idName?: string, text?: string) => {
   return buildEl("div", className, idName, text);
};
